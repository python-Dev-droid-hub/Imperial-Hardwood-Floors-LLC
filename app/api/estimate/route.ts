import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/content/site";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

type EstimatePayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectDetails?: string;
  consent?: boolean | string;
  /** Honeypot — must stay empty. */
  website?: string;
};

const LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  projectDetails: 5000,
} as const;

function isEmail(value: string) {
  return (
    value.length <= LIMITS.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) &&
    !/[\r\n]/.test(value)
  );
}

/** Strip CR/LF to prevent header injection. */
function sanitizeHeader(value: string) {
  return value.replace(/[\r\n\0]/g, "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = rateLimit(`estimate:${ip}`);
  if (!limited.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please try again in a few minutes.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  let body: EstimatePayload;

  try {
    const contentLength = Number(request.headers.get("content-length") || "0");
    if (contentLength > 20_000) {
      return NextResponse.json(
        { ok: false, error: "Request too large." },
        { status: 413 },
      );
    }
    body = (await request.json()) as EstimatePayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Silent reject for bots that fill hidden fields.
  if (String(body.website ?? "").trim()) {
    return NextResponse.json({
      ok: true,
      mode: "live",
      message: "Thank you. Your estimate request has been sent.",
    });
  }

  const name = sanitizeHeader(String(body.name ?? "")).slice(0, LIMITS.name);
  const email = sanitizeHeader(String(body.email ?? ""))
    .toLowerCase()
    .slice(0, LIMITS.email);
  const phone = sanitizeHeader(String(body.phone ?? "")).slice(0, LIMITS.phone);
  const projectDetails = String(body.projectDetails ?? "")
    .replaceAll("\0", "")
    .trim()
    .slice(0, LIMITS.projectDetails);
  const consent =
    body.consent === true || body.consent === "true" || body.consent === "on";

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (projectDetails.length < 10) {
    errors.projectDetails =
      "Please share a bit more about your floor installation project.";
  }
  if (!consent) {
    errors.consent = "Consent is required so we can contact you.";
  }
  if (phone && phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number or leave it blank.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.trim();
  const mailTo = process.env.MAIL_TO?.trim() || site.email;

  if (!gmailUser || !gmailPass) {
    console.error("[estimate] Mail credentials are not configured");
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your request right now. Please email imperialhardwoodfloor@gmail.com.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass.replaceAll(" ", ""),
    },
  });

  const subject = `New estimate request from ${name}`;
  const text = [
    `New estimate request from the ${site.businessName} website`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Project details:",
    projectDetails,
    "",
    `Consent to contact: ${consent ? "Yes" : "No"}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #141210;">
      <h2 style="margin: 0 0 12px;">New estimate request</h2>
      <p style="margin: 0 0 16px;">From the ${escapeHtml(site.businessName)} website.</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Consent to contact:</strong> ${consent ? "Yes" : "No"}</p>
      <p style="margin-top: 20px;"><strong>Project details:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(projectDetails)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${site.businessName}" <${gmailUser}>`,
      to: mailTo,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch {
    console.error("[estimate] Mail send failed");
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your request right now. Please email imperialhardwoodfloor@gmail.com.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    mode: "live",
    message: "Thank you. Your estimate request has been sent.",
  });
}

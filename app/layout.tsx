import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { seo } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const GTM_ID = "GTM-NKFCFH45";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  // Prefer production origin; localhost fallback only for local OG resolution during build.
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: {
    default: seo.title,
    template: `%s | ${site.businessName}`,
  },
  description: seo.description,
  applicationName: site.businessName,
  authors: [{ name: site.businessName }],
  creator: site.businessName,
  keywords: [...seo.keywords],
  verification: {
    google: "tB_e71wLI71DFbtJZgHpcI0d7CqgGdoW3ZCdwkSlYXQ",
  },
  // Canonical only when production URL is configured
  alternates: siteUrl ? { canonical: "/" } : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    siteName: site.businessName,
    title: seo.title,
    description: seo.description,
    url: siteUrl || undefined,
    images: [
      {
        url: seo.ogImagePath,
        width: 2400,
        height: 1600,
        alt: "Hardwood floor installation for residential homes in Olathe, KS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImagePath],
  },
  other: {
    "og:phone_number": site.phone,
    "og:email": site.email,
    "og:locality": "Olathe",
    "og:region": "KS",
    "og:country-name": "USA",
  },
  // Avoid inventing icons beyond the logo we have
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-ivory font-sans text-charcoal"
        suppressHydrationWarning
      >
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        <Script
          id="gtm"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <SkipLink />
        <JsonLd />
        <Header />
        {children}
      </body>
    </html>
  );
}

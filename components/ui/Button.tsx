import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "primaryOnLight" | "secondaryOnLight";

const variants: Record<Variant, string> = {
  primary:
    "bg-copper text-ivory hover:bg-copper-bright focus-visible:outline-copper-bright shadow-[0_10px_30px_-12px_rgba(184,115,74,0.65)]",
  secondary:
    "border border-ivory/35 bg-ivory/5 text-ivory backdrop-blur-sm hover:border-ivory/70 hover:bg-ivory/10 focus-visible:outline-ivory",
  ghost:
    "text-ivory/90 hover:text-ivory focus-visible:outline-ivory underline-offset-4 hover:underline",
  primaryOnLight:
    "bg-charcoal text-ivory hover:bg-charcoal/90 focus-visible:outline-charcoal",
  secondaryOnLight:
    "border border-charcoal/20 text-charcoal hover:border-charcoal/50 hover:bg-charcoal/5 focus-visible:outline-charcoal",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center px-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const onDark = tone === "dark";

  return (
    <div
      data-reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] ${
          onDark ? "text-copper-bright" : "text-copper"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`font-display text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] ${
          onDark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            onDark ? "text-ivory/75" : "text-stone-ink"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

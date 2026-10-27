/** Static CSS atmosphere — no rAF / canvas loops. */
export function HeroAtmosphere() {
  return (
    <>
      <div
        className="hero-vignette pointer-events-none absolute inset-0 z-[5]"
        aria-hidden="true"
      />
      <div
        className="hero-grain pointer-events-none absolute inset-0 z-[6] opacity-[0.18] mix-blend-overlay"
        aria-hidden="true"
      />
    </>
  );
}

import SectionReveal from "../animations/SectionReveal";

export default function ManifestoSection() {
  const points = [
    {
      label: "1. Progetti > teoria",
      description:
        "Preferiamo una PR ben fatta a dieci lezioni guardate. Ogni iniziativa ha un output concreto: codice pubblico, demo, case study.",
    },
    {
      label: "2. Qualità > quantità",
      description:
        "Non puntiamo a migliaia di iscritti passivi. Vogliamo un gruppo gestibile di dev che partecipano davvero.",
    },
    {
      label: "3. Feedback onesti",
      description:
        "Code review sincere, niente ego. L’obiettivo è far crescere le persone e i progetti, non fare bella figura.",
    },
    {
      label: "4. Open by default",
      description:
        "Quando possibile, preferiamo open source, documentazione chiara e discussioni accessibili anche a chi arriva dopo.",
    },
  ];

  return (
    <section className="py-16 sm:py-20" id="manifesto">
      <SectionReveal variant="up">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Manifesto
            </h2>
            <p className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Le regole del gioco: cosa puoi aspettarti dalla community e cosa ci aspettiamo da te.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)]/80 p-6 sm:p-8">
            {/* Glow decorativo centrale */}
            <div className="pointer-events-none absolute inset-x-10 -top-24 h-52 rounded-full bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.18),_transparent_60%)] blur-3xl opacity-80" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[color:var(--primary)] via-transparent to-[color:var(--primary)] opacity-70" />
            <div className="grid gap-6 md:grid-cols-2 relative z-10">
              {points.map((point) => (
                <article
                  key={point.label}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)]/90 p-5"
                >
                  <h3 className="text-sm font-semibold sm:text-base">{point.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)] sm:text-sm">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}


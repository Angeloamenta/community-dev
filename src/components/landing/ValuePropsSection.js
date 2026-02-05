export default function ValuePropsSection() {
  const items = [
    {
      label: "Progetti reali",
      description:
        "Challenge tecniche, repo pubbliche e problemi concreti, non esercizi finti da tutorial.",
    },
    {
      label: "Community curata",
      description:
        "Dev selezionati, canali dedicati per stack e livello, mentor e feedback strutturato.",
    },
    {
      label: "Visibilità",
      description:
        "Case study, shoutout e spotlight sui profili più attivi, per farti notare da aziende e team.",
    },
  ];

  return (
    <section className="py-16">
      <div className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
            Cosa ottieni
          </h2>
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Non solo un altro server Discord. Uno spazio pensato per far crescere davvero il tuo
            profilo da dev.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.label}
              className="flex flex-col gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--background)]/60 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold">{item.label}</h3>
              <p className="text-sm text-[color:var(--muted-foreground)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


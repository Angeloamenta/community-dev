export default function CommunitySection() {
  const items = [
    {
      title: "Gruppi piccoli, impatto grande",
      description:
        "Batch di dev limitati per hackathon e progetti: abbastanza persone per costruire, abbastanza pochi da conoscersi davvero.",
    },
    {
      title: "Canali per stack e livello",
      description:
        "Frontend, backend, fullstack: spazi dedicati per confrontarti con chi usa i tuoi stessi strumenti e pattern.",
    },
    {
      title: "Mentor e peer review",
      description:
        "Feedback strutturati sul codice, sessioni di revisione e momenti di pairing per andare oltre la comfort zone.",
    },
  ];

  return (
    <section className="py-16 sm:py-20" id="community">
      <div className="relative space-y-8">
        {/* Glow decorativo in alto a destra */}
        <div className="pointer-events-none absolute -right-24 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.16),_transparent_55%)] blur-3xl opacity-80" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Community
            </h2>
            <p className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Non un altro server infinito. Una stanza di dev motivati che vogliono costruire cose
              serie.
            </p>
          </div>
          <p className="max-w-sm text-xs text-[color:var(--muted-foreground)] sm:text-sm">
            Canali mirati, batch limitati e iniziative con una data di inizio e fine chiara. Così
            puoi decidere come incastrare la community nella tua settimana.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 relative z-10">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-[var(--shadow-subtle)] transition hover:-translate-y-1 hover:border-[color:var(--primary)]"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-semibold sm:text-base group-hover:text-[color:var(--primary)]">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-[color:var(--muted-foreground)] sm:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


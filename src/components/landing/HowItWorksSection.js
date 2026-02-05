export default function HowItWorksSection() {
  const steps = [
    {
      title: "Ti iscrivi in pochi minuti",
      description:
        "Compili il profilo e ci racconti stack, livello e obiettivi. Niente burocrazia infinita.",
    },
    {
      title: "Scegli hackathon e progetti",
      description:
        "Accedi a sfide curate e progetti open source reali, in base al tuo tempo e alle tue skill.",
    },
    {
      title: "Costruisci, pubblichi, cresci",
      description:
        "Lavori con altri dev, migliori il portfolio GitHub e ti fai notare da community e aziende.",
    },
  ];

  return (
    <section className="py-16">
      <div className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
            Come funziona
          </h2>
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dal click alla prima pull request in tre step chiari.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--secondary)]/40 p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--primary)]/10 text-xs font-semibold text-[color:var(--primary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


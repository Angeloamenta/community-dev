export default function SocialProofSection() {
  const stats = [
    { label: "Dev attivi", value: "250+", note: "tra frontend, backend e fullstack" },
    { label: "Progetti lanciati", value: "40+", note: "open source e side-project" },
    { label: "Ore di coding", value: "3K+", note: "in hackathon e sfide guidate" },
  ];

  return (
    <section className="py-16">
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--secondary)]/60 px-6 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Numeri dalla community
            </h2>
            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Una community piccola abbastanza per conoscerci, abbastanza grande per costruire cose
              serie.
            </p>
          </div>
          <div className="grid w-full gap-6 sm:w-auto sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  {stat.label}
                </p>
                <p className="text-xs text-[color:var(--muted-foreground)]">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


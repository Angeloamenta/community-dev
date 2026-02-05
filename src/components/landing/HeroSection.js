export default function HeroSection() {
  return (
    <section className="py-16">
      <div className="space-y-6">
        <p className="text-sm font-medium text-[color:var(--muted-foreground)] uppercase tracking-[0.2em]">
          Community per sviluppatori
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Costruisci progetti reali, partecipa ad hackathon, cresci con altri dev.
        </h1>
        <p className="max-w-2xl text-base text-[color:var(--muted-foreground)] sm:text-lg">
          Una community curata di sviluppatori dove trovi sfide, progetti open source e
          opportunità concrete. Zero fuffa, solo codice e collaborazione.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-medium text-[color:var(--primary-foreground)] shadow-md transition hover:brightness-110"
          >
            Unisciti alla prossima hackathon
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium text-[color:var(--foreground)] bg-transparent hover:bg-[color:var(--secondary)]/60"
          >
            Esplora i progetti open source
          </a>
        </div>
      </div>
    </section>
  );
}


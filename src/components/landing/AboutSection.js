export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20" id="about">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.06),_transparent_55%)] p-6 sm:p-8">
        {/* Glow decorativo in basso a sinistra */}
        <div className="pointer-events-none absolute -left-32 bottom-[-120px] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.18),_transparent_60%)] blur-3xl opacity-80" />
        <div className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-[color:var(--border)] to-transparent md:block" />
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/80 px-3 py-1 text-[11px] text-[color:var(--muted-foreground)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              <span>Per dev che vogliono costruire, non solo “studiare”.</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Una community pensata per dev che vogliono fare sul serio con progetti, non solo corsi.
            </h2>
            <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)] sm:text-base">
              Portiamo insieme sviluppatori che vogliono mettere le mani nel codice su sfide reali:
              hackathon mirate, progetti open source mantenuti nel tempo, side project che possono
              diventare prodotti. Niente community “infinite” e dispersive: curiamo la qualità delle
              persone e delle iniziative.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)]/90 p-5 shadow-[var(--shadow-subtle)] relative z-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
              Cosa ti porti a casa
            </h3>
            <dl className="space-y-3 text-xs text-[color:var(--muted-foreground)] sm:text-sm">
              <div className="flex gap-2">
                <dt className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                <dd>
                  <span className="font-medium text-[color:var(--foreground)]">Progetti pubblici.</span>{" "}
                  Codice che puoi mostrare sul tuo GitHub, non esercizi isolati.
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                <dd>
                  <span className="font-medium text-[color:var(--foreground)]">Feedback strutturato.</span>{" "}
                  Review da pari livello e mentor per migliorare davvero.
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
                <dd>
                  <span className="font-medium text-[color:var(--foreground)]">Connessioni.</span> Persone
                  con cui lanciare side project, non solo compagni di chat.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}


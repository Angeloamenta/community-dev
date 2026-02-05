export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Glow / gradient di background */}
      <div className="pointer-events-none absolute inset-x-0 top-[-180px] -z-10 flex justify-center">
        <div className="h-72 w-[520px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_60%)] blur-3xl opacity-80" />
      </div>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        {/* Colonna testo */}
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/70 px-3 py-1 text-xs text-[color:var(--muted-foreground)] backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            <span>Nuova community per dev che vogliono costruire sul serio</span>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Hackathon, open source,{" "}
              <span className="bg-[linear-gradient(120deg,_#a855f7,_#6366f1,_#22c55e)] bg-clip-text text-transparent">
                zero fuffa.
              </span>
            </h1>
            <p className="max-w-2xl text-base text-[color:var(--muted-foreground)] sm:text-lg">
              Una community selezionata di sviluppatori dove partecipi a sfide curate, costruisci
              progetti pubblici e fai crescere davvero il tuo profilo GitHub e il tuo network.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--primary)] px-7 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] shadow-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--primary)]"
            >
              Iscriviti alla community
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/60 px-6 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:bg-[color:var(--secondary)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--ring)]"
            >
              Esplora progetti & community
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-[color:var(--muted-foreground)]">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              <span>Progetti open source reali</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              <span>Hackathon mirate, non generiche</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              <span>Focus su dev mid/senior motivati</span>
            </div>
          </div>
        </div>

        {/* Colonna “tech card” */}
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)]/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
            <div className="flex items-center justify-between gap-3 text-xs text-[color:var(--muted-foreground)]">
              <span className="inline-flex items-center gap-2 font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                `next-hackathon.ts`
              </span>
              <span className="rounded-full bg-[color:var(--secondary)]/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em]">
                Live
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 font-mono text-[11px] leading-relaxed text-[color:var(--muted-foreground)]">
              <p className="text-[color:var(--accent)]">
                // prossima hackathon · 48h · remote
              </p>
              <p>
                const stack = [&quot;Next.js&quot;, &quot;Node&quot;, &quot;PostgreSQL&quot;,
                &quot;Tailwind&quot;];
              </p>
              <p>const devNeeded = 32;</p>
              <p>const reward = &quot;progetto reale nel tuo GitHub&quot;;</p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                  Dev in waitlist
                </p>
                <p className="text-lg font-semibold">120+</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                  Progetti lanciati
                </p>
                <p className="text-lg font-semibold">40+</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                  Community
                </p>
                <p className="text-lg font-semibold">Selezionata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


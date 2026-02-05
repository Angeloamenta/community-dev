import { PageShell } from "../../components/landing";

export const metadata = {
  title: "Risorse per sviluppatori | community-dev",
  description:
    "Una selezione di risorse per sviluppatori: strumenti, link utili e contenuti per costruire progetti reali con la community.",
};

const resources = [
  {
    category: "Tooling & setup",
    items: [
      {
        label: "Starter Next.js + shadcn/ui",
        description:
          "Template base simile a quello che usiamo qui: Next.js, Tailwind e shadcn/ui pronti per partire.",
        href: "https://ui.shadcn.com/",
      },
      {
        label: "Design tokens & palette",
        description:
          "Riferimenti e generator per palette, tipografia e spacing coerenti nei progetti.",
        href: "https://www.radix-ui.com/colors",
      },
    ],
  },
  {
    category: "Open source & progetti",
    items: [
      {
        label: "Good first issues",
        description:
          "Raccolte di issue adatte per iniziare a contribuire a progetti open source.",
        href: "https://goodfirstissue.dev/",
      },
      {
        label: "Awesome for developers",
        description:
          "Liste curate di risorse, tool e repository utili per diversi stack e linguaggi.",
        href: "https://github.com/sindresorhus/awesome",
      },
    ],
  },
  {
    category: "Community & crescita",
    items: [
      {
        label: "Roadmaps.dev",
        description:
          "Mappe di competenze per frontend, backend, devops e altri percorsi della carriera dev.",
        href: "https://roadmap.sh/",
      },
      {
        label: "Patterns e best practice",
        description:
          "Articoli e raccolte di pattern architetturali e di UI per applicazioni moderne.",
        href: "https://refactoring.guru/",
      },
    ],
  },
];

export default function RisorsePage() {
  return (
    <PageShell>
      <section className="relative py-16 sm:py-20">
        {/* Glow decorativo per la pagina risorse */}
        <div className="pointer-events-none absolute inset-x-10 -top-24 h-60 rounded-full bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),_transparent_60%)] blur-3xl opacity-80" />
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
            Risorse
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Strumenti e link utili per costruire meglio, non solo più veloce.
          </h1>
          <p className="max-w-2xl text-sm text-[color:var(--muted-foreground)] sm:text-base">
            Qui raccogliamo materiali e tool che consigliamo spesso nella community: reference
            tecniche, starter kit e contenuti che aiutano a shipparare progetti reali.
          </p>
        </header>

        <section className="mt-10 space-y-10 relative z-10">
          {resources.map((group) => (
            <div key={group.category} className="space-y-4">
              <h2 className="text-sm font-semibold text-[color:var(--foreground)]">
                {group.category}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 text-sm transition hover:border-[color:var(--primary)] hover:shadow-[var(--shadow-subtle)]"
                  >
                    <span className="font-medium text-[color:var(--foreground)]">
                      {item.label}
                    </span>
                    <span className="text-xs text-[color:var(--muted-foreground)]">
                      {item.description}
                    </span>
                    <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--primary)] group-hover:underline">
                      Apri risorsa
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </PageShell>
  );
}


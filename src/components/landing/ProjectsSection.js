export default function ProjectsSection() {
  const projects = [
    {
      name: "Open source dashboard",
      meta: "Next.js · Tailwind · PostgreSQL",
      outcome: "+12 contributor · 3 feature rilasciate",
    },
    {
      name: "Hackathon API-first",
      meta: "Node · tRPC · Prisma",
      outcome: "48h di coding · 6 progetti finalisti",
    },
    {
      name: "Mini SaaS in side-project",
      meta: "React · Stripe · Supabase",
      outcome: "MVP online in 3 weekend",
    },
  ];

  return (
    <section className="py-16">
      <div className="space-y-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
              Progetti & hackathon
            </h2>
            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Challenge pensate per essere pushate su GitHub, non solo per vincere un premio una
              volta.
            </p>
          </div>
          <p className="max-w-sm text-sm text-[color:var(--muted-foreground)]">
            Ogni iniziativa è progettata per lasciarti qualcosa di concreto: codice pubblicabile,
            esperienza scrivibile sul CV, nuove connessioni nella community.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col justify-between gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--secondary)]/50 p-5"
            >
              <div className="space-y-2">
                <h3 className="text-base font-semibold">{project.name}</h3>
                <p className="text-xs font-mono text-[color:var(--muted-foreground)]">
                  {project.meta}
                </p>
              </div>
              <p className="mt-2 text-sm text-[color:var(--accent)]">{project.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


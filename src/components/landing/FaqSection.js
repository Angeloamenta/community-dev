const faqs = [
  {
    question: "Che livello devo avere per entrare?",
    answer:
      "Non serve essere senior, ma devi avere basi solide di sviluppo web e voglia di metterti in gioco su progetti reali.",
  },
  {
    question: "Quanto tempo devo dedicare?",
    answer:
      "Puoi scegliere tu il livello di coinvolgimento: da micro challenge da poche ore a hackathon di un weekend.",
  },
  {
    question: "È a pagamento?",
    answer:
      "Stiamo partendo con una community early access. Alcune iniziative saranno gratuite, altre premium: lo specificheremo sempre in anticipo.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
            Domande frequenti
          </h2>
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ok, ma in pratica come funziona?
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--background)]/60 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium">{item.question}</span>
                <span className="text-xs text-[color:var(--muted-foreground)] group-open:hidden">
                  Apri
                </span>
                <span className="text-xs text-[color:var(--muted-foreground)] hidden group-open:inline">
                  Chiudi
                </span>
              </summary>
              <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


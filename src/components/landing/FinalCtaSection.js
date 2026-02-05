export default function FinalCtaSection() {
  return (
    <section className="py-20">
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] px-6 py-10 text-[color:var(--primary-foreground)] sm:px-10 sm:py-12">
        <div className="space-y-6 sm:flex sm:items-center sm:justify-between sm:space-y-0 sm:gap-10">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pronto a scrivere la prossima riga di codice con noi?
            </h2>
            <p className="text-sm sm:text-base">
              La community sta partendo con un primo gruppo ristretto di sviluppatori. Candidati
              ora per partecipare alle prossime hackathon e ai primi progetti open source.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:min-w-[220px]">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] shadow-sm transition hover:opacity-90"
            >
              Candidati ora
            </a>
            <p className="text-xs text-[color:var(--primary-foreground)]/80">
              Ti porteremo su una pagina esterna per completare l’iscrizione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


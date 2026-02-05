import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)] py-8 text-xs text-[color:var(--muted-foreground)] sm:py-10">
      <div
        className="mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{
          maxWidth: "var(--page-max-width)",
          paddingInline: "var(--page-padding-x)",
        }}
      >
        <div className="space-y-1">
          <p className="font-medium text-[color:var(--foreground)]">community-dev</p>
          <p>Spazio per sviluppatori che vogliono costruire progetti reali.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#about" className="hover:text-[color:var(--foreground)]">
            About
          </a>
          <a href="#community" className="hover:text-[color:var(--foreground)]">
            Community
          </a>
          <a href="#manifesto" className="hover:text-[color:var(--foreground)]">
            Manifesto
          </a>
          <Link href="/risorse" className="hover:text-[color:var(--foreground)]">
            Risorse
          </Link>
        </div>
      </div>
    </footer>
  );
}


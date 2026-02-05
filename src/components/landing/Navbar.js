import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/80 backdrop-blur">
      <div
        className="mx-auto flex h-14 items-center justify-between gap-4 text-sm"
        style={{
          maxWidth: "var(--page-max-width)",
          paddingInline: "var(--page-padding-x)",
        }}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-[0.9rem] bg-[color:var(--primary)] text-xs font-bold text-[color:var(--primary-foreground)] shadow-sm">
            dev
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
            community
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] text-[color:var(--muted-foreground)] sm:flex">
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
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#"
            className="hidden rounded-full border border-[color:var(--border)] px-3 py-1.5 text-[11px] text-[color:var(--muted-foreground)] hover:bg-[color:var(--secondary)]/60 sm:inline-flex"
          >
            Entra nella community
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-[color:var(--primary)] px-3.5 py-1.5 text-[11px] font-semibold text-[color:var(--primary-foreground)] shadow-sm hover:brightness-110"
          >
            Candidati
          </a>
        </div>
      </div>
    </header>
  );
}


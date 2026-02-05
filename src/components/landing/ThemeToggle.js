"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "community-dev-theme"; // 'light' | 'dark'

function applyTheme(theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Inizializza in base a localStorage o preferenza di sistema
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      applyTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      onClick={toggle}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--muted-foreground)] text-xs shadow-sm transition hover:bg-[color:var(--secondary)]/60"
    >
      <span className="sr-only">
        {isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      </span>
      <span aria-hidden="true">{isDark ? "☾" : "☀︎"}</span>
    </button>
  );
}


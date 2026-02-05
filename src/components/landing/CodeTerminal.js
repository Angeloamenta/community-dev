"use client";

import { useEffect, useState } from "react";

const LINES = [
  '// snapshot di una sessione reale nella community',
  'const devsOnline = ["alice", "marco", "sara", "you"]; // join',
  'const channel = "hackathon-next";',
  "",
  "function startSession() {",
  "  pairProgramming(channel);",
  '  openPR("open-source-dashboard");',
  '  shipFeature("weekend-side-project");',
  "}",
];

export default function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => Math.min(prev + 1, LINES.length));
    }, 450);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  const displayed = LINES.slice(0, visibleLines);

  return (
    <div className="relative rounded-2xl border border-[color:var(--border)] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_65%)] p-4 shadow-[var(--shadow-soft)]">
      {/* bordo luminoso */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[color:var(--primary)]/10" />

      {/* header tipo finestra editor */}
      <div className="mb-3 flex items-center justify-between rounded-xl bg-[color:var(--background)]/80 px-3 py-1.5 text-[10px] text-[color:var(--muted-foreground)] backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-[color:var(--muted-foreground)]">
          community-dev.tsx
        </span>
        <span className="hidden text-[9px] uppercase tracking-[0.22em] text-[color:var(--primary)] sm:inline">
          live
        </span>
      </div>

      {/* area codice */}
      <div className="relative rounded-xl border border-[color:var(--border)] bg-[color:var(--card)]/95 p-4 font-mono text-[11px] leading-relaxed text-[color:var(--muted-foreground)]">
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),_transparent_60%)] opacity-60" />
        <div className="relative space-y-0.5">
          {displayed.map((line, idx) => (
            <div key={idx} className="flex">
              <span className="mr-2 text-[color:var(--border)] select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                className={
                  idx === 0
                    ? "text-[color:var(--accent)]"
                    : idx === 1
                      ? ""
                      : idx === 4
                        ? "text-[color:var(--primary)]"
                        : ""
                }
              >
                {line}
              </span>
            </div>
          ))}
          {visibleLines < LINES.length && (
            <div className="mt-1 flex">
              <span className="mr-2 text-[color:var(--border)] select-none">
                {String(visibleLines + 1).padStart(2, "0")}
              </span>
              <span className="inline-block h-3 w-2 translate-y-[2px] bg-[color:var(--primary)] opacity-80 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import SectionReveal from "../animations/SectionReveal";
import homeContent from "@/content/home.json";

const about = homeContent.about;
const code = about.code;

export default function AboutSection({ className }) {
  const [activeLang, setActiveLang] = useState(code[0].language);
  const active = code.find((item) => item.language === activeLang) || code[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(active.code).then(
      () => {},
      () => {}
    );
  };

  return (
    <section className={cn("overflow-hidden py-16 sm:py-20", className)} id="about">
      <SectionReveal variant="up">
        <div className="relative  border border-border p-6 sm:p-8">
          <div className="grid grid-cols-1 place-items-start gap-10 lg:grid-cols-2 lg:gap-8">
            {/* Colonna sinistra: titolo, descrizione, CTA */}
            <div className="relative flex flex-col gap-6">
              <div className="inline-flex items-center gap-2  border border-border bg-background/80 px-3 py-1 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5  bg-primary" />
                <span>{about.badge}</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                {about.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                {about.subtitle}
              </p>
              <a
                href={about.cta.href}
                className="inline-flex w-fit items-center justify-center rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted/50"
              >
                {about.cta.label}
              </a>
              <div className="absolute -bottom-6 -left-6 -right-6 block h-px bg-border lg:hidden" />
              <div className="absolute -bottom-[27px] -left-[27px] z-10 hidden size-[7px] rounded-full border border-border bg-background lg:block" />
              <div className="absolute -bottom-[27px] -right-[27px] z-10 hidden size-[7px] rounded-full border border-border bg-background lg:block" />
            </div>

            {/* Colonna destra: blocco codice con tab */}
            <div className="w-full">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/95 shadow-(--shadow-soft)">
                {/* Header: tab file + select + copy */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-background/80 px-3 py-2 backdrop-blur">
                  <div className="flex gap-1">
                    {code.map((item) => (
                      <button
                        key={item.language}
                        type="button"
                        onClick={() => setActiveLang(item.language)}
                        className={cn(
                          "rounded-md px-2.5 py-1 font-mono text-[11px] transition",
                          activeLang === item.language
                            ? "bg-primary/15 text-primary"
                            : "text-muted-foreground hover:bg-muted/30"
                        )}
                      >
                        {item.filename}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded-md px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                  >
                    Copy
                  </button>
                </div>
                {/* Body: codice con scroll */}
                <div className="max-h-96 overflow-auto">
                  <pre className="p-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                    <code>{active.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Bordi decorativi */}
          <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-border" />
          <div className="pointer-events-none absolute top-0 -right-12 h-px w-12 bg-linear-to-r from-border to-transparent" />
          <div className="pointer-events-none absolute top-0 -left-12 h-px w-12 bg-linear-to-l from-border to-transparent" />
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-border" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-px w-12 bg-linear-to-r from-border to-transparent" />
          <div className="pointer-events-none absolute bottom-0 -left-12 h-px w-12 bg-linear-to-l from-border to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px bg-border" />
          <div className="pointer-events-none absolute -top-12 left-0 h-12 w-px bg-linear-to-t from-border to-transparent" />
          <div className="pointer-events-none absolute -bottom-12 left-0 h-12 w-px bg-linear-to-b from-border to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-px bg-border" />
          <div className="pointer-events-none absolute -top-12 right-0 h-12 w-px bg-linear-to-t from-border to-transparent" />
          <div className="pointer-events-none absolute right-0 -bottom-12 h-12 w-px bg-linear-to-b from-border to-transparent" />
          <div className="pointer-events-none absolute -top-[3px] -right-[3px] size-[7px] rounded-full border border-border bg-background" />
          <div className="pointer-events-none absolute -right-[3px] -bottom-[3px] size-[7px] rounded-full border border-border bg-background" />
          <div className="pointer-events-none absolute -bottom-[3px] -left-[3px] size-[7px] rounded-full border border-border bg-background" />
          <div className="pointer-events-none absolute -top-[3px] -left-[3px] size-[7px] rounded-full border border-border bg-background" />
        </div>
      </SectionReveal>
    </section>
  );
}

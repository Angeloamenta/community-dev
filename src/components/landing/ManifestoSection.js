"use client";

import { Fragment } from "react";
import { cn } from "@/lib/utils";
import SectionReveal from "../animations/SectionReveal";
import homeContent from "@/content/home.json";

const manifesto = homeContent.manifesto;
const hoverTerms = manifesto.hoverTerms;

function HoverTerm({ label, image, className }) {
  return (
    <span
      className={cn(
        "group relative inline-block cursor-default",
        className,
      )}
      title={label}
    >
      <span className="px-1 text-foreground transition-colors group-hover:text-primary">
        {label}
      </span>
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 rounded-lg border border-border bg-card p-2 opacity-0 shadow-(--shadow-soft) transition-opacity duration-200 group-hover:opacity-100">
        <img
          src={image}
          alt={label}
          width={80}
          height={80}
          className="h-16 w-16 object-contain md:h-20 md:w-20"
        />
      </span>
    </span>
  );
}

export default function ManifestoSection({ className }) {
  const parts = manifesto.body.split(/(\{\{\d+\}\})/);

  return (
    <section
      className={cn("overflow-hidden py-32", className)}
      id="manifesto"
    >
      <SectionReveal variant="up">
        <div className="container w-full">
          <p className="mt-10 text-center text-3xl font-semibold tracking-tight text-muted-foreground/40 md:text-4xl">
            {parts.map((part, idx) => {
              const m = part.match(/\{\{(\d+)\}\}/);
              if (m) {
                const term = hoverTerms[Number(m[1])];
                return (
                  <HoverTerm
                    key={idx}
                    label={term.label}
                    image={term.image}
                  />
                );
              }
              return part.split("\n").map((line, j) => (
                <Fragment key={`${idx}-${j}`}>
                  {j > 0 && <br />}
                  {line}
                </Fragment>
              ));
            })}
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}

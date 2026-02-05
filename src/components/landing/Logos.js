"use client";

import { cn } from "@/lib/utils";
import SectionReveal from "../animations/SectionReveal";
import homeContent from "@/content/home.json";

const logos = homeContent.logos.items;

export default function Logos({ className }) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <SectionReveal variant="up">
        <div
          className="relative mx-auto w-full overflow-hidden pt-4"
          style={{
            maxWidth: "var(--page-max-width)",
            paddingInline: "var(--page-padding-x)",
          }}
        >
          <div className="border-y border-border py-4">
            <div className="flex w-max items-center gap-10 animate-logo-scroll">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="flex shrink-0 items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />
        </div>
      </SectionReveal>
    </section>
  );
}


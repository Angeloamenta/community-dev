"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import SectionReveal from "../animations/SectionReveal";
import homeContent from "@/content/home.json";

const community = homeContent.community;
const testimonials = community.testimonials;

export default function CommunitySection({ className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setProgress(0);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    startTimer();
  };

  const active = testimonials[currentIndex];

  return (
    <section
      className={cn("pt-16 pb-10 sm:pt-20 sm:pb-14", className)}
      id="community"
    >
      <SectionReveal variant="up">
        <div className="relative space-y-8">
          {/* Glow decorativo in alto a destra */}
          <div className="pointer-events-none absolute -right-24 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.16),transparent_55%)] blur-3xl opacity-80" />

          {/* Header */}
          <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {community.eyebrow}
              </h2>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {community.title}
              </h3>
            </div>
            <a
              href={community.cta.href}
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted/50"
            >
              {community.cta.label}
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)]">
            {/* Lista "accordion" */}
            <div className="space-y-1 rounded-2xl border border-border bg-card p-2">
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={testimonial.company}
                    className={cn(
                      "rounded-xl transition",
                      isActive && "bg-muted/40"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(index)}
                      className="flex w-full items-center gap-4 px-3 py-3 text-left"
                    >
                      <div className="flex flex-1 items-center gap-4">
                        <div className="flex max-w-3xs flex-1 items-center gap-4">
                          <span className="flex size-8 items-center justify-center rounded-lg bg-primary">
                            <img
                              src={testimonial.logo}
                              alt={testimonial.company}
                              className="h-4 invert dark:invert-0"
                            />
                          </span>
                          <p className="text-lg font-medium tracking-tight">
                            {testimonial.company}
                          </p>
                        </div>
                        <div className="hidden text-sm font-normal text-muted-foreground md:block">
                          <p className="text-muted-foreground">
                            {testimonial.outcome.text}
                            <span className="font-medium text-foreground">
                              {testimonial.outcome.highlight}
                            </span>
                          </p>
                        </div>
                      </div>
                    </button>
                    {isActive && (
                      <div className="px-3 pb-3 md:hidden">
                        <div className="h-1 w-16 overflow-hidden rounded-full bg-muted/50">
                          <div
                            className="h-full rounded-full bg-primary transition-[width]"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dettaglio testimonial attivo */}
            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center lg:p-8">
              <img
                src={active.avatar}
                alt={active.author}
                width={208}
                height={208}
                className="aspect-square max-w-52 rounded-lg object-cover"
              />
              <div className="flex flex-1 flex-col items-start gap-4">
                <img
                  src={active.wordmark}
                  alt={active.company}
                  className="h-6 dark:invert"
                />
                <p className="mt-2 max-w-2xl font-hedvigLettersSerif text-2xl text-foreground">
                  {active.quote}
                </p>
                <div className="mt-2 flex w-full items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {active.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {active.role}
                    </p>
                  </div>
                  <div className="hidden h-1 w-24 overflow-hidden rounded-full bg-muted/50 md:block">
                    <div
                      className="h-full rounded-full bg-primary transition-[width]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}


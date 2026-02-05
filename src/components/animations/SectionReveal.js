"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VARIANTS = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function SectionReveal({ children, variant = "up", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromConfig = VARIANTS[variant] || VARIANTS.up;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, ...fromConfig },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [variant, delay]);

  return (
    <div ref={ref} className="opacity-0 will-change-transform">
      {children}
    </div>
  );
}


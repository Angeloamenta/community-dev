"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function TextReveal({ children, className = "", delay = 0 }) {
    const textRef = useRef(null);

    useEffect(() => {
        // Small timeout to ensure font loading (can be refined with document.fonts.ready)
        const timeout = setTimeout(() => {
            if (!textRef.current) return;

            // Use SplitType to split text into words/chars
            const text = new SplitType(textRef.current, { types: 'lines, words', tagName: 'span' });

            // Hide initial state via CSS in global or just set opacity 0 here
            gsap.set(text.words, { y: '100%', opacity: 0 });

            // Animate
            gsap.to(text.words, {
                y: '0%',
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                delay: delay,
                ease: "power3.out",
            });
        }, 100);

        return () => clearTimeout(timeout);
    }, [delay]);

    return (
        <div ref={textRef} className={`${className} overflow-hidden`}>
            {children}
        </div>
    );
}

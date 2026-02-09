"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 pointer-events-none" // pointer-events-none on wrapper so it doesn't block if we want gaps? Actually let's keep it safe.
        >
            {/* Actual Nav Container */}
            <div className="pointer-events-auto max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                {/* Glass Pill Logic - only if desired, or simpler full width? User wants "Refined". Full width with glass is safer. 
            Let's make it a floating pill for max "Awwwards" points.
        */}
                <div className="w-full relative">
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-full h-16 top-4 flex items-center justify-between px-8 transition-all duration-300 ease-in-out hover:bg-white/90 hover:shadow-md">
                        {/* Logo */}
                        <div className="text-xl font-bold font-display uppercase tracking-widest text-brand-black flex items-center gap-2 cursor-pointer">
                            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                            Community<span className="text-gray-400 font-light ml-0.5 opacity-60 text-sm tracking-normal normal-case">.dev</span>
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                            {["Manifesto", "Projects", "Hackathons", "Resources"].map((link) => (
                                <a key={link} href="#" className="relative hover:text-brand-black transition-colors group">
                                    {link}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <button className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-brand-black text-white hover:bg-accent transition-colors duration-300 text-sm font-medium shadow-md hover:shadow-lg transform active:scale-95">
                            Join Waitlist
                        </button>

                        {/* Mobile Menu Icon (Placeholder) */}
                        <div className="md:hidden">
                            <div className="w-6 h-0.5 bg-black mb-1.5" />
                            <div className="w-6 h-0.5 bg-black" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

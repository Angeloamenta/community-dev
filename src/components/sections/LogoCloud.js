"use client";

import { motion } from "framer-motion";

export default function LogoCloud({ data }) {
    const { items } = data;

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items];

    return (
        <section className="py-24 bg-transparent relative z-10 border-y border-gray-100/50 overflow-hidden">
            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap px-4"
                    animate={{
                        x: [0, "-50%"]
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedItems.map((logo, idx) => (
                        <div key={`${logo.id}-${idx}`} className="flex shrink-0 items-center justify-center min-w-[120px]">
                            <img
                                src={logo.image}
                                alt={logo.description}
                                className={`h-6 md:h-8 w-auto object-contain transition-all duration-500 opacity-30 grayscale hover:opacity-100 hover:grayscale-0`}
                                style={{ filter: "brightness(0)" }} // Ensure they are black for light theme
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


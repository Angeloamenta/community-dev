"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero({ data }) {
    const { badge, title, subtitle, primaryCta, bullets, snippet } = data;
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Splitting title for staggered animation
    const titleWords = title.leading.split(" ");

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-brand-black/5 text-brand-black text-xs font-semibold uppercase tracking-wider shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        {badge.label}
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight font-display text-text-primary leading-[1.05]">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="block"
                            >
                                {title.leading}
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-accent relative">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="block"
                            >
                                {title.highlight}
                                {/* Underline decoration */}
                                <svg className="absolute w-full h-3 bottom-1 left-0 -z-10 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </motion.span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xl text-text-secondary text-lg md:text-xl leading-relaxed font-light"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA & Bullets */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
                    >
                        <a href={primaryCta.href} className="group relative px-8 py-4 bg-brand-black text-white rounded-full font-medium overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                            <div className="absolute inset-0 w-full h-full bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative flex items-center gap-3">
                                {primaryCta.label}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <div className="space-y-2">
                            {bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-text-secondary">
                                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-accent" />
                                    </div>
                                    {bullet}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Parallax Visual */}
                <motion.div style={{ y: y1 }} className="relative hidden lg:block perspective-1000">
                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: 10, rotateY: -10, scale: 0.9 }}
                        animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative z-10 bg-brand-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-700"
                    >
                        {/* Window Controls */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <span className="text-xs text-secondary-500 font-mono opacity-50">{snippet.fileName}</span>
                        </div>

                        {/* Code Content */}
                        <div className="p-8 font-mono text-sm leading-loose text-gray-300 relative">
                            {/* Syntax Highlighting Fake */}
                            <div className="text-gray-500 mb-6 font-italic">{'// ' + snippet.comment}</div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                                {snippet.stack.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 group/item">
                                        <span className="text-accent opacity-70 group-hover/item:opacity-100 transition-opacity">import</span>
                                        <span className="text-white font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 border-t border-white/10 pt-6">
                                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                    <span className="text-gray-500 text-xs uppercase tracking-wider">Waitlist</span>
                                    <span className="text-accent font-bold text-lg">{snippet.stats.waitlist}</span>
                                </div>
                                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                    <span className="text-gray-500 text-xs uppercase tracking-wider">Projects</span>
                                    <span className="text-white font-bold text-lg">{snippet.stats.projects}</span>
                                </div>
                            </div>

                            {/* Ambient Glow */}
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Floating Elements behind */}
                    <motion.div
                        style={{ y: y2 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-50px] right-[-50px] w-40 h-40 border border-gray-900/10 rounded-full z-0 flex items-center justify-center opacity-40"
                    >
                        <div className="w-2 h-2 bg-accent rounded-full absolute top-0" />
                    </motion.div>
                    <motion.div
                        style={{ y: y2 }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-80px] left-[-40px] w-60 h-60 border border-gray-900/5 rounded-full z-0 opacity-40"
                    />

                </motion.div>

            </div>
        </section>
    );
}

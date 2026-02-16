"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Check, Zap, Shield, Code2 } from "lucide-react";

export default function Hero({ data }) {
    const { badge, title, subtitle, primaryCta, bullets, snippet } = data;
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    // Mouse interaction for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative pt-40 pb-32 md:pt-52 md:pb-40 overflow-hidden z-10 bg-transparent">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-500/5 blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-12"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 text-brand-black text-sm font-semibold uppercase tracking-wider shadow-sm"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                        {badge.label}
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight font-display text-text-primary leading-[1.05]">
                        <span className="block">{title.leading}</span>
                        <span className="block bg-linear-to-r from-accent to-purple-600 bg-clip-text text-transparent relative mt-2 pb-2">
                            {title.highlight}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xl text-text-secondary text-xl md:text-2xl leading-relaxed font-light opacity-80"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA & Bullets */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-10"
                    >
                        <a href={primaryCta.href} className="group relative px-10 py-5 bg-brand-black text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl hover:bg-accent transition-all duration-500 hover:scale-[1.05]">
                            <span className="relative z-10 flex items-center gap-3">
                                {primaryCta.label}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <div className="space-y-3">
                            {bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-base font-medium text-text-secondary/80">
                                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    {bullet}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Parallax Visual + 3D Card */}
                <motion.div
                    style={{ y: y1 }}
                    className="relative hidden lg:block perspective-2000"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Glowing Aura behind card */}
                    <div className="absolute inset-x-0 inset-y-0 bg-accent/20 blur-[80px] rounded-full -z-10 animate-pulse" />

                    {/* Floating Badges */}
                    {snippet.visuals?.performance && (
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-12 z-30 bg-white shadow-2xl rounded-2xl p-4 flex items-center gap-4 border border-gray-100"
                        >
                            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{snippet.visuals.performance.label}</p>
                                <p className="text-sm font-bold text-gray-900">{snippet.visuals.performance.value}</p>
                            </div>
                        </motion.div>
                    )}

                    {snippet.visuals?.security && (
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -right-8 z-30 bg-white shadow-2xl rounded-2xl p-4 flex items-center gap-4 border border-gray-100"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-blue-500 fill-blue-500" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{snippet.visuals.security.label}</p>
                                <p className="text-sm font-bold text-gray-900">{snippet.visuals.security.value}</p>
                            </div>
                        </motion.div>
                    )}

                    {/* Main Code Card */}
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 bg-brand-black rounded-[2rem] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group"
                    >
                        {/* Interactive Border Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-br from-accent/20 via-transparent to-purple-500/20" />

                        {/* Window Controls */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/2 backdrop-blur-md">
                            <div className="flex gap-2.5">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-[0_0_10px_#FF5F5655]" />
                                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_#FFBD2E55]" />
                                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-[0_0_10px_#27C93F55]" />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono opacity-60">
                                <Code2 className="w-3 h-3" />
                                {snippet.fileName}
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="p-10 font-mono text-[0.85rem] leading-8 text-gray-300 relative">
                            <div className="text-gray-500 mb-6 font-italic">{'// ' + snippet.comment}</div>
                            <div className="grid grid-cols-2 gap-x-10 gap-y-5 mb-8">
                                {snippet.stack.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 group/item">
                                        <span className="text-accent font-bold opacity-60 group-hover/item:opacity-100 transition-opacity">import</span>
                                        <span className="text-white font-semibold transition-colors group-hover/item:text-accent">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Visual Progress Bar */}
                            {snippet.visuals?.speed && (
                                <div className="mb-8 p-4 bg-white/3 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500">{snippet.visuals.speed.label}</span>
                                        <span className="text-accent text-[10px] font-bold">{snippet.visuals.speed.value}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "94%" }}
                                            transition={{ duration: 2, delay: 1 }}
                                            className="h-full bg-linear-to-r from-accent to-purple-500"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Stats */}
                            <div className="flex justify-between items-center pt-8 border-t border-white/5">
                                {snippet.visuals?.reliability && (
                                    <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                                        <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{snippet.visuals.reliability.label}</div>
                                        <div className="text-white font-bold text-2xl">{snippet.visuals.reliability.value.split('%')[0]}<span className="text-accent">%</span></div>
                                    </motion.div>
                                )}
                                {snippet.visuals?.growth && (
                                    <motion.div whileHover={{ scale: 1.05 }} className="text-right cursor-default">
                                        <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{snippet.visuals.growth.label}</div>
                                        <div className="text-white font-bold text-2xl">{snippet.visuals.growth.value.split('%')[0]}<span className="text-purple-500">%</span></div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}

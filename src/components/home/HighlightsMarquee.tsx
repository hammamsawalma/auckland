"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export const HighlightsMarquee = () => {
    const t = useTranslations("Highlights");
    const locale = useLocale();
    const isRtl = locale === "ar";

    // Map 15 social images
    const images = Array.from({ length: 15 }, (_, i) => `/images/home/social/social_${i + 1}.jpg`);

    return (
        <section className="py-20 bg-app-dark overflow-hidden relative">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-heading">
                    {t("titleStart")} <span className="text-app-acc">{t("titleEnd")}</span>
                </h2>
                <p className="text-app-light/60 mt-4 text-lg font-light tracking-wide">
                    {t("subtitle")}
                </p>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full flex overflow-hidden group">
                {/* Left Gradient Mask */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-app-dark to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex w-max"
                    animate={{
                        x: isRtl ? ["0%", "50%"] : ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 100,
                        ease: "linear",
                    }}
                >
                    {[0, 1].map((part) => (
                        <div key={part} className="flex gap-6 pe-6">
                            {images.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative h-[350px] md:h-[500px] w-auto flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl group/card shadow-2xl border border-white/5 bg-black/20"
                                >
                                    {/* Explicit width and height for Lighthouse Core Web Vitals */}
                                    <Image
                                        src={src}
                                        alt={`Auckland Highlight Showcase ${index}`}
                                        loading="lazy"
                                        width={350}
                                        height={500}
                                        className="h-full w-auto object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* Right Gradient Mask */}
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-app-dark to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

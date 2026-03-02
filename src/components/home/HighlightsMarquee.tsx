"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const HighlightsMarquee = () => {
    const t = useTranslations("Highlights");

    // Map 15 social images
    const images = Array.from({ length: 15 }, (_, i) => `/images/home/social/social_${i + 1}.jpg`);

    // Duplicate the array so the marquee loops infinitely without breaking visually
    const marqueeImages = [...images, ...images];

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
                    className="flex gap-6 px-3"
                    animate={{
                        x: [0, -10350], // Adjust based on (width + gap) * 15
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 100,
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative h-[350px] md:h-[500px] w-auto flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl group/card shadow-2xl border border-white/5 bg-black/20"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={src}
                                alt={`Auckland Highlight Showcase ${index}`}
                                loading="lazy"
                                className="h-full w-auto object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Right Gradient Mask */}
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-app-dark to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

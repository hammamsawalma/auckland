"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Projects() {
    const t = useTranslations("Projects");
    const [activeTab, setActiveTab] = useState<"All" | "Wakrah" | "Al Khor">("All");

    // Map 59 Wakrah Images and 35 Al Khor Images
    const wakrahImages = Array.from({ length: 59 }, (_, i) => `/images/projects/wakrah/wakrah_${i + 1}.jpg`);
    const alKhorImages = Array.from({ length: 35 }, (_, i) => `/images/projects/alkhor/alkhor_${i + 1}.jpg`);

    const getAllImages = () => {
        if (activeTab === "Wakrah") return wakrahImages;
        if (activeTab === "Al Khor") return alKhorImages;
        // Interleave the arrays for a more dynamic "All" view instead of seeing just 59 Wakrahs first
        const interleaved = [];
        const maxLength = Math.max(wakrahImages.length, alKhorImages.length);
        for (let i = 0; i < maxLength; i++) {
            if (i < wakrahImages.length) interleaved.push(wakrahImages[i]);
            if (i < alKhorImages.length) interleaved.push(alKhorImages[i]);
        }
        return interleaved;
    };

    const currentImages = getAllImages();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-app-dark/60 z-10"></div>
                    <Image
                        src="/images/gallery/gallery-hero.jpg"
                        alt="Our Projects"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="relative z-20 container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
                        >
                            {t("title")}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-app-light max-w-2xl mx-auto font-light"
                        >
                            {t("subtitle")}
                        </motion.p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                            <div className="flex items-center gap-4 flex-1 w-full">
                                <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{t("featuredWork")}</h2>
                                <div className="h-[1px] flex-1 bg-app-dark/20 hidden md:block"></div>
                            </div>

                            {/* Filter Tabs */}
                            <div className="flex items-center gap-2 bg-app-light/50 p-1.5 rounded-full border border-app-dark/10">
                                {["All", "Wakrah", "Al Khor"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as typeof activeTab)}
                                        className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab
                                            ? "bg-app-dark text-white shadow-md scale-105"
                                            : "text-app-dark/60 hover:text-app-dark hover:bg-white"
                                            }`}
                                    >
                                        {tab === "Wakrah" ? "Wakrah Villa" : tab === "Al Khor" ? "Al Khor Residence" : "All Projects"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            key={activeTab} // Force re-animation on tab change
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.05 } },
                                hidden: {}
                            }}
                            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                        >
                            {currentImages.map((src, idx) => {
                                // Extract project name from URL path for the label
                                const isWakrah = src.includes("wakrah");
                                const projectName = isWakrah ? "Wakrah Private Villa" : "Al Khor VIP Residence";

                                return (
                                    <motion.div
                                        key={`${activeTab}-${idx}`}
                                        variants={{
                                            hidden: { opacity: 0, y: 40, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                                        }}
                                        className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group/item cursor-pointer mb-6 border border-app-dark/5"
                                    >
                                        <Image
                                            src={src}
                                            alt={projectName}
                                            width={600}
                                            height={800}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover/item:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        {/* Dynamic Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-app-dark/90 via-app-dark/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                                                <span className="inline-block px-3 py-1 bg-app-acc text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-2 shadow-lg">
                                                    {isWakrah ? "Wakrah" : "Al Khor"}
                                                </span>
                                                <h3 className="text-white font-bold text-xl drop-shadow-md">{projectName}</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

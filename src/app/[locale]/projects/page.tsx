"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Projects() {
    const t = useTranslations("Projects");

    const videos = [
        "/videos/factory/Video 14.mp4",
        "/videos/factory/Video 8.mp4",
        "/videos/factory/Video 7.mp4",
        "/videos/factory/Video 6.mp4",
        "/videos/factory/Video 2.mp4",
        "/videos/factory/Video 10.mp4",
        "/videos/factory/Video 11.mp4",
        "/videos/factory/Video 3.mp4",
    ];

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

                        <div className="flex items-center gap-4 mb-16">
                            <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{t("featuredWork")}</h2>
                            <div className="h-[1px] flex-1 bg-app-dark/20"></div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } },
                                hidden: {}
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {videos.map((src, idx) => (
                                <motion.div
                                    key={`video-${idx}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Using aspect-[3/4] to create a masonry-like vertical feel for these project highlights */}
                                    <VideoPlayer src={src} className="aspect-[3/4] w-full" />
                                    <div className="p-5 bg-white border border-t-0 border-app-dark/10 rounded-b-xl">
                                        <h3 className="font-bold text-app-dark mb-1">{t("projectCard")} {idx + 1}</h3>
                                        <p className="text-sm text-app-dark/60 font-medium tracking-wide uppercase">{t("completed")}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

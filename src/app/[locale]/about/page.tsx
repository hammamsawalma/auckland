"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
    const t = useTranslations("About");

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">

                {/* Mission Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    {/* Decorative Background Curved Shape */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-app-light rounded-l-[150px] opacity-50 pointer-events-none -z-10 transform translate-x-32 hidden lg:block"></div>

                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2 space-y-8"
                            >
                                <div className="inline-block px-4 py-2 bg-app-dark rounded-sm mb-2">
                                    <span className="text-app-acc text-sm font-bold uppercase tracking-widest">{t("whoWeAreLabel", { defaultMessage: "Who We Are" })}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-app-dark uppercase tracking-tight leading-none">
                                    {t("missionTitle", { defaultMessage: "Our Mission" })}
                                </h1>
                                <p className="text-xl text-app-dark/70 font-light leading-relaxed">
                                    {t("missionText", { defaultMessage: "We strive to deliver uncompromised quality in natural stone manufacturing, blending traditional craftsmanship with cutting-edge technology to shape environments that stand the test of time." })}
                                </p>

                                <div className="pt-8 border-t border-app-dark/10">
                                    <h3 className="text-xl font-bold text-app-dark mb-4">{t("whyChooseUs", { defaultMessage: "Why Choose Auckland?" })}</h3>
                                    <ul className="space-y-4">
                                        <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-app-acc shrink-0 mt-1" />
                                            <span className="text-app-dark/80">{t("reason1", { defaultMessage: "Global Sourcing from the finest quarries." })}</span>
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-app-acc shrink-0 mt-1" />
                                            <span className="text-app-dark/80">{t("reason2", { defaultMessage: "State-of-the-art CNC precision cutting." })}</span>
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-app-acc shrink-0 mt-1" />
                                            <span className="text-app-dark/80">{t("reason3", { defaultMessage: "Unmatched expertise in commercial installations." })}</span>
                                        </motion.li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2"
                            >
                                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/content/stone-bg-1.jpg"
                                        alt="Auckland Craftsmanship"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-app-dark/80 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <h3 className="text-3xl font-bold text-white mb-2">{t("visionTitle", { defaultMessage: "Our Vision" })}</h3>
                                        <p className="text-white/80 line-clamp-3">{t("visionText", { defaultMessage: "To be the undisputed leader in natural stone development across the Middle East." })}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Factory Video Outline Section */}
                <section className="py-32 bg-app-dark text-white relative">
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">{t("facilitiesTitle", { defaultMessage: "Inside Our Facilities" })}</h2>
                            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto">
                                {t("facilitiesText", { defaultMessage: "Take an exclusive look inside our manufacturing plant where raw stone is transformed into architectural masterpieces." })}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative"
                        >
                            <VideoPlayer
                                src="/videos/factory/Video 1.mp4"
                                poster="/images/content/stone-texture.jpg"
                            />
                        </motion.div>
                    </div>

                    {/* SVG Curve Divider Bottom */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-app-light"></path>
                        </svg>
                    </div>
                </section>

                {/* Quality Banner */}
                <section className="py-24 bg-app-light text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="container mx-auto px-4 max-w-4xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-app-dark uppercase mb-6">{t("qualityTitle", { defaultMessage: "Uncompromising Quality & Safety" })}</h2>
                        <p className="text-xl text-app-dark/70 font-light leading-relaxed">
                            {t("qualityText", { defaultMessage: "Our operations strictly adhere to international HSE standards. From factory floor safety protocols to rigorous multi-point inspections on every finished slab, we deliver excellence without compromise." })}
                        </p>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

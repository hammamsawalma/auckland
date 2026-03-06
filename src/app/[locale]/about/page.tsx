"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { CheckCircle2, MessagesSquare, Calculator, PencilRuler, HardHat, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";

export default function About() {
    const t = useTranslations("About");
    const tProd = useTranslations("Products");
    const tServ = useTranslations("Services");

    const services = [
        {
            title: tServ("service1Title"),
            description: tServ("service1Desc"),
            icon: <MessagesSquare className="w-8 h-8 text-app-acc" />
        },
        {
            title: tServ("service2Title"),
            description: tServ("service2Desc"),
            icon: <Calculator className="w-8 h-8 text-app-acc" />
        },
        {
            title: tServ("service3Title"),
            description: tServ("service3Desc"),
            icon: <PencilRuler className="w-8 h-8 text-app-acc" />
        },
        {
            title: tServ("service4Title"),
            description: tServ("service4Desc"),
            icon: <HardHat className="w-8 h-8 text-app-acc" />
        }
    ];


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">

                {/* Chapter 1: Mission Section */}
                <section className="py-24 pt-32 lg:pt-40 bg-white relative overflow-hidden">
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
                                    <h2 className="text-xl font-bold text-app-dark mb-4">{t("whyChooseUs", { defaultMessage: "Why Choose Auckland?" })}</h2>
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
                                        src="/images/content/stone-bg-1.webp"
                                        alt="Auckland Craftsmanship"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-app-dark/80 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <h2 className="text-3xl font-bold text-white mb-2">{t("visionTitle", { defaultMessage: "Our Vision" })}</h2>
                                        <p className="text-white/80 line-clamp-3">{t("visionText", { defaultMessage: "To be the undisputed leader in natural stone development across the Middle East." })}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Chapter 2: Global Sourcing (From Products) */}
                <section className="py-24 bg-app-light relative border-t border-app-dark/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row gap-12 items-center"
                        >
                            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-last md:order-first">
                                <Image
                                    src="/images/content/stone-texture.webp"
                                    alt="Stone Blocks"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-black text-app-dark uppercase tracking-tight">{tProd("sourcingTitle")}</h2>
                                <p className="text-lg text-app-dark/70 font-light leading-relaxed">
                                    {tProd("sourcingDesc")}
                                </p>
                                <ul className="space-y-4 pt-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-app-acc shrink-0" />
                                        <span className="text-app-dark/80 font-medium">{tProd("sourcingFeature1")}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-app-acc shrink-0" />
                                        <span className="text-app-dark/80 font-medium">{tProd("sourcingFeature2")}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-app-acc shrink-0" />
                                        <span className="text-app-dark/80 font-medium">{tProd("sourcingFeature3")}</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Chapter 3: The Engineering Pipeline (Process & Services) */}
                {/* 3A: Process Section Component directly injected */}
                <div className="bg-[#121212] pt-12 pb-24">
                    <ProcessSection />
                </div>

                {/* 3B: Services Detailed List */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-app-dark uppercase tracking-tight mb-4">{tServ("title")}</h2>
                            <p className="text-lg text-app-dark/60 font-light max-w-2xl mx-auto">{tServ("subtitle")}</p>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } },
                                hidden: {}
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        >
                            {services.map((svc, idx) => (
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    key={idx}
                                    className="flex flex-col p-6 md:p-8 border border-app-dark/10 rounded-2xl shadow-sm hover:shadow-2xl hover:border-app-acc/50 transition-all duration-500 group bg-white relative overflow-hidden"
                                >
                                    <div className="w-16 h-16 bg-app-light rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-app-dark transition-all duration-500">
                                        {svc.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-app-dark mb-4 transition-colors">{svc.title}</h3>
                                    <p className="text-app-dark/70 font-light leading-relaxed">
                                        {svc.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>



                {/* Chapter 4: Cinematic Video Showcase */}
                <ProjectShowcase />

                {/* Chapter 5: Quality Banner */}
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
        </div >
    );
}

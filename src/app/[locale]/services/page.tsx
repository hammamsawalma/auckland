"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessagesSquare, Calculator, PencilRuler, HardHat, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Services() {
    const t = useTranslations("Services");

    const services = [
        {
            title: t("service1Title"),
            description: t("service1Desc"),
            icon: <MessagesSquare className="w-8 h-8 text-app-acc" />
        },
        {
            title: t("service2Title"),
            description: t("service2Desc"),
            icon: <Calculator className="w-8 h-8 text-app-acc" />
        },
        {
            title: t("service3Title"),
            description: t("service3Desc"),
            icon: <PencilRuler className="w-8 h-8 text-app-acc" />
        },
        {
            title: t("service4Title"),
            description: t("service4Desc"),
            icon: <HardHat className="w-8 h-8 text-app-acc" />
        }
    ];

    const machinery = [
        t("machine1"),
        t("machine2"),
        t("machine3"),
        t("machine4")
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Services Hero */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-app-dark/70 z-10"></div>
                    <Image
                        src="/images/services/services-hero.jpg"
                        alt={t("title")}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="relative z-20 container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight"
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

                {/* Services List Section */}
                <section className="py-24 bg-white relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-app-light rounded-l-[100px] opacity-40 pointer-events-none -z-10 transform translate-x-16 hidden lg:block"></div>

                    <div className="container mx-auto px-4 max-w-6xl">
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
                                    className="flex flex-col p-8 border border-app-dark/10 rounded-2xl shadow-sm hover:shadow-2xl hover:border-app-acc/50 transition-all duration-500 group bg-white relative overflow-hidden"
                                >
                                    <div className="w-16 h-16 bg-app-light rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-app-dark transition-all duration-500">
                                        {svc.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-app-dark mb-4 transition-colors">{svc.title}</h3>
                                    <p className="text-app-dark/70 font-light leading-relaxed">
                                        {svc.description}
                                    </p>

                                    {/* Hover gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-app-acc/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* New Technical Expertise Section */}
                <section className="py-24 bg-app-light relative">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-full lg:w-1/2"
                            >
                                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                    <Image
                                        src="/images/factory/factory-1.jpg"
                                        alt={t("machineryTitle")}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-full lg:w-1/2 space-y-6"
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-app-dark uppercase">{t("machineryTitle")}</h2>
                                <p className="text-lg text-app-dark/70 font-light leading-relaxed">
                                    {t("machineryDesc")}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    {machinery.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-app-dark/5">
                                            <Cog className="w-5 h-5 text-app-acc shrink-0" />
                                            <span className="font-semibold text-app-dark text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* SVG Curve Divider Bottom */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-[#1A1A1A]"></path>
                        </svg>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#1A1A1A] text-white text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="container mx-auto px-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">{t("ctaTitle")}</h2>
                        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-white/70">
                            {t("ctaDesc")}
                        </p>
                        <button className="bg-app-acc text-app-dark font-bold py-4 px-12 rounded-full hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(202,176,120,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                            {t("ctaButton")}
                        </button>
                    </motion.div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

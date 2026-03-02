"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export default function Products() {
    const t = useTranslations("Products");

    const granites = [
        "Colonial white", "Colonial gold", "Shiva gold", "Alaska white", "Alaska gold",
        "Crystal yellow", "Moon white", "P-white", "Lavender blue", "Misty yellow",
        "Pink guarana", "Desert brown", "White galaxy", "Grey sardo", "Steel grey",
        "Santa sicilia", "Urban classic", "Black beauty", "Black galaxy", "Tan brown",
        "Kuppam green", "Black pearl", "Blue pearl", "Rosy pink", "Paradiso", "Jhansi red"
    ];

    const marbles = [
        "Crema marfil", "Crema uno", "Cappuccino", "Volakas white", "Carrara white",
        "Mugla white", "Omani beij", "Vietnam white", "Sunny gold", "Indian green",
        "Rosalia pink", "Indus gold", "Black and gold", "Armani grey", "Black marquina",
        "Maroon scuro", "Orchid jade", "Tundra grey", "Grey emperador", "Light emperador",
        "Dark emperador", "Travertine", "Perlato sicilia", "Afyun sugar", "Marmara white",
        "White wood", "Grey wood"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-app-dark/60 z-10"></div>
                    <Image
                        src="/images/products/products-hero.jpg"
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

                    {/* SVG Curve Divider Bottom */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-white"></path>
                        </svg>
                    </div>
                </section>

                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 max-w-6xl">

                        {/* Global Sourcing Info Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24 flex flex-col md:flex-row gap-12 items-center bg-app-light/30 rounded-3xl p-8 md:p-12 border border-app-dark/5"
                        >
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-3xl font-black text-app-dark uppercase tracking-tight">{t("sourcingTitle")}</h2>
                                <p className="text-lg text-app-dark/70 font-light leading-relaxed">
                                    {t("sourcingDesc")}
                                </p>
                                <ul className="space-y-4 pt-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-app-acc shrink-0" />
                                        <span className="text-app-dark/80 font-medium">{t("sourcingFeature1")}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-app-acc shrink-0" />
                                        <span className="text-app-dark/80 font-medium">{t("sourcingFeature2")}</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-app-acc shrink-0" />
                                        <span className="text-app-dark/80 font-medium">{t("sourcingFeature3")}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/content/stone-texture.jpg"
                                    alt="Stone Blocks"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>


                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{t("granitesTitle")} <span className="text-app-acc opacity-50 text-xl tracking-normal">({granites.length})</span></h2>
                                <div className="h-px flex-1 bg-app-dark/10"></div>
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.03 } },
                                    hidden: {}
                                }}
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                            >
                                {granites.map((item, idx) => (
                                    <Link key={`g-${idx}`} href={`/products/${item.toLowerCase().replace(/ /g, '-')}`}>
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            className="group relative h-20 border border-app-dark/10 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 bg-app-light/30 group-hover:bg-app-dark transition-colors duration-300 z-10"></div>
                                            <span className="relative z-20 font-medium text-sm md:text-base capitalize text-app-dark group-hover:text-white transition-colors duration-300 px-4 text-center">
                                                {item}
                                            </span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{t("marblesTitle")} <span className="text-app-acc opacity-50 text-xl tracking-normal">({marbles.length})</span></h2>
                                <div className="h-px flex-1 bg-app-dark/10"></div>
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.03 } },
                                    hidden: {}
                                }}
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                            >
                                {marbles.map((item, idx) => (
                                    <Link key={`m-${idx}`} href={`/products/${item.toLowerCase().replace(/ /g, '-')}`}>
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            className="group relative h-20 border border-app-dark/10 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 bg-app-light/30 group-hover:bg-app-dark transition-colors duration-300 z-10"></div>
                                            <span className="relative z-20 font-medium text-sm md:text-base capitalize text-app-dark group-hover:text-white transition-colors duration-300 px-4 text-center">
                                                {item}
                                            </span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </section>

                <div className="h-16 bg-white relative">
                    {/* Fake section to provide space for SVG Curve */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px rotate-180">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-app-dark"></path>
                        </svg>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}

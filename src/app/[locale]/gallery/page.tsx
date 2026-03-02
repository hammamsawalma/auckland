"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Gallery() {
    const t = useTranslations("Gallery");

    // A curated list of paths from the unzipped Wakrah and Al Khor folders.
    const galleryImages = [
        "/images/gallery/1.jpg",
        "/images/gallery/2.jpg",
        "/images/gallery/3.jpg",
        "/images/gallery/4.jpg",
        "/images/gallery/5.jpg",
        "/images/gallery/6.jpg",
        "/images/gallery/7.jpg",
        "/images/gallery/8.jpg",
        "/images/gallery/9.jpg",
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-app-dark/60 z-10"></div>
                    <Image
                        src="/images/gallery/gallery-hero.jpg"
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
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-[#FAFAFA]"></path>
                        </svg>
                    </div>
                </section>

                <section className="py-24 bg-[#FAFAFA]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } },
                                hidden: {}
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
                        >
                            {galleryImages.map((src, idx) => (
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                                    }}
                                    key={idx}
                                    className={`relative w-full h-full overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-500 group cursor-pointer ${idx === 0 || idx === 3 ? "lg:col-span-2 lg:row-span-2" : ""
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Auckland Project ${idx + 1}`}
                                        fill
                                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    {/* Hover Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-app-dark/90 via-app-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-block px-3 py-1 bg-app-acc text-app-dark text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                                                Wakrah Villa
                                            </span>
                                            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">{t("viewLabel")}</h3>
                                            <div className="w-12 h-1 bg-app-acc transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <div className="h-16 bg-[#FAFAFA] relative">
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

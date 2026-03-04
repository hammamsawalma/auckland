"use client";

import { useTranslations } from "next-intl";
import { FacadeCalculator } from "@/components/ui/FacadeCalculator";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function CalculatorPage() {
    const t = useTranslations("Calculator");

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-24 pt-32 lg:pt-40 bg-app-dark relative overflow-hidden h-fit lg:h-[70vh] flex flex-col justify-center">
                    {/* Decorative Background Curved Shape */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[150px] opacity-50 pointer-events-none -z-10 transform translate-x-32 hidden lg:block"></div>

                    <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-block px-4 py-2 bg-white/10 rounded-sm mb-4">
                                <span className="text-app-acc text-sm font-bold uppercase tracking-widest">{t("title")}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none">
                                ESTIMATE YOUR PROJECT
                            </h1>
                            <p className="text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
                                {t("subtitle")}
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-app-light relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-app-acc/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="container mx-auto px-4">
                        <FacadeCalculator />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

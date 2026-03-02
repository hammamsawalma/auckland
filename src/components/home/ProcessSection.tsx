"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ProcessSection() {
    const t = useTranslations("Process");
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: t("step1Title"),
            desc: t("step1Desc"),
            image: "/images/phase4/Images/Wakrah/f2591936.jpg"
        },
        {
            title: t("step2Title"),
            desc: t("step2Desc"),
            image: "/images/factory/factory-2.jpg"
        },
        {
            title: t("step3Title"),
            desc: t("step3Desc"),
            image: "/images/phase4/Images/Al Khor/IMG_7641.JPG"
        },
        {
            title: t("step4Title"),
            desc: t("step4Desc"),
            image: "/images/whatsapp-hero.jpeg"
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-app-dark mb-6 uppercase tracking-tight">{t("mainTitle")}</h2>
                    <p className="text-xl text-app-dark/60 max-w-3xl mx-auto font-light">
                        {t("mainDesc")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Sticky Image Reveal Side */}
                    <div className="hidden lg:block sticky top-32 h-[600px] w-full bg-app-light rounded-3xl overflow-hidden shadow-2xl relative">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeStep === idx ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className={`absolute inset-0 w-full h-full ${activeStep === idx ? "z-20" : "z-10"}`}
                            >
                                <div className="absolute inset-0 bg-app-dark/20 z-10 transition-opacity"></div>
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute bottom-10 left-10 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl">
                                    <span className="text-app-acc font-black text-2xl drop-shadow-sm mr-4">0{idx + 1}</span>
                                    <span className="text-app-dark font-bold text-lg uppercase tracking-wider">{step.title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scrolling Content Side */}
                    <div className="space-y-32 py-10 pb-[300px]">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={`content-${idx}`}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                onViewportEnter={() => setActiveStep(idx)}
                                viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                                transition={{ duration: 0.7 }}
                                className="relative"
                            >
                                <div className="lg:hidden w-full h-64 relative rounded-2xl overflow-hidden mb-8 shadow-lg">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                                        <span className="text-app-acc font-black text-xl">0{idx + 1}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="hidden lg:flex w-16 h-16 shrink-0 bg-app-light rounded-full items-center justify-center border-2 border-app-acc/30 shadow-inner">
                                        <span className="text-2xl font-black text-app-acc">0{idx + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-app-dark mb-4">{step.title}</h3>
                                        <p className="text-lg text-app-dark/70 leading-relaxed font-light mb-6">
                                            {step.desc}
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-app-dark/80">
                                                <CheckCircle2 className="w-5 h-5 text-app-acc" />
                                                <span className="font-medium">{t("check1")}</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-app-dark/80">
                                                <CheckCircle2 className="w-5 h-5 text-app-acc" />
                                                <span className="font-medium">{t("check2")}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* SVG Curve Divider Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-app-dark"></path>
                </svg>
            </div>
        </section>
    );
}

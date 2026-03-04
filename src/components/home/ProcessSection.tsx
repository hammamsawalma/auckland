"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export function ProcessSection() {
    const t = useTranslations("Process");

    const steps = [
        {
            title: t("step1Title"),
            desc: t("step1Desc")
        },
        {
            title: t("step2Title"),
            desc: t("step2Desc")
        },
        {
            title: t("step3Title"),
            desc: t("step3Desc")
        },
        {
            title: t("step4Title"),
            desc: t("step4Desc")
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-20">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-app-dark mb-6 uppercase tracking-tight">{t("mainTitle")}</h2>
                    <p className="text-xl text-app-dark/60 max-w-3xl mx-auto font-light">
                        {t("mainDesc")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={`content-${idx}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-app-light/30 rounded-3xl p-10 md:p-14 border border-app-dark/5 hover:border-app-dark/10 hover:shadow-2xl hover:bg-white transition-all duration-500 group"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="w-20 h-20 shrink-0 bg-white rounded-full flex items-center justify-center border-4 border-app-light group-hover:border-app-acc/30 shadow-md transition-all duration-500">
                                    <span className="text-3xl font-black text-app-acc">0{idx + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-app-dark mb-4">{step.title}</h3>
                                    <p className="text-lg text-app-dark/70 leading-relaxed font-light mb-8">
                                        {step.desc}
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-4 text-app-dark/80">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                                <CheckCircle2 className="w-4 h-4 text-app-acc" />
                                            </div>
                                            <span className="font-medium text-lg">{t("check1")}</span>
                                        </li>
                                        <li className="flex items-center gap-4 text-app-dark/80">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                                <CheckCircle2 className="w-4 h-4 text-app-acc" />
                                            </div>
                                            <span className="font-medium text-lg">{t("check2")}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}

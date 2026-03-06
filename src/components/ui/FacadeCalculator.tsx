"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export function FacadeCalculator() {
    const t = useTranslations("Calculator");

    const [area, setArea] = useState<number>(200);
    const [stoneType, setStoneType] = useState<"syrian" | "omani" | "limestone" | "grc">("syrian");
    const [installation, setInstallation] = useState<"mechanical" | "wet">("mechanical");
    const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
    const [areaError, setAreaError] = useState<string | null>(null);

    // Approximate Prices in QAR per sqm (Material + Install)
    const basePrices = {
        syrian: 250,
        omani: 280,
        limestone: 200,
        grc: 180
    };

    const installMultipliers = {
        mechanical: 1.3, // Mechanical is ~30% more expensive but better
        wet: 1.0
    };

    const handleCalculate = () => {
        if (isNaN(area) || area < 50 || area > 5000) {
            setAreaError("Please enter a valid area between 50 and 5,000 m².");
            setEstimatedCost(null);
            return;
        }
        setAreaError(null);
        const basePrice = basePrices[stoneType];
        const installMultiplier = installMultipliers[installation];
        const total = area * basePrice * installMultiplier;
        setEstimatedCost(Math.round(total));
    };

    return (
        <section className="bg-app-dark rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden border border-white/10 w-full max-w-4xl mx-auto my-16">
            {/* Decorative BG */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-app-acc/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-app-acc/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-app-acc/20 flex items-center justify-center">
                            <Calculator className="w-6 h-6 text-app-acc" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-heading font-black text-white tracking-widest">{t("title")}</h2>
                    </div>
                    <p className="text-white/80 font-light mb-8 leading-relaxed">
                        {t("subtitle")}
                    </p>

                    <div className="space-y-6">
                        {/* Area Input */}
                        <div>
                            <label className="block text-sm font-heading font-medium text-white/80 uppercase tracking-widest mb-3">{t("areaLabel")}</label>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    min="50"
                                    max="5000"
                                    value={area}
                                    onChange={(e) => { setArea(Number(e.target.value)); setAreaError(null); }}
                                    className={`w-full h-14 bg-white/5 border rounded-s-xl px-4 text-white focus:outline-none transition-colors ${areaError ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-app-acc"
                                        }`}
                                />
                                <div className="h-14 px-4 bg-white/10 border border-white/10 border-s-0 rounded-e-xl flex items-center text-white/70 text-sm">
                                    {t("unitSqM")}
                                </div>
                            </div>
                            {areaError && (
                                <p className="text-red-400 text-xs mt-2">{areaError}</p>
                            )}
                        </div>

                        {/* Stone Type */}
                        <div>
                            <label className="block text-sm font-heading font-medium text-white/80 uppercase tracking-widest mb-3">{t("stoneTypeLabel")}</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {["syrian", "omani", "limestone", "grc"].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setStoneType(type as "syrian" | "omani" | "limestone" | "grc")}
                                        className={`px-4 py-3 rounded-xl border text-start text-sm transition-all duration-300 ${stoneType === type ? "border-app-acc bg-app-acc/10 text-white font-bold" : "border-white/10 text-white/70 hover:border-white/30"}`}
                                    >
                                        {t(type as "syrian" | "omani" | "limestone" | "grc")}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Installation Method */}
                        <div>
                            <label className="block text-sm font-heading font-medium text-white/80 uppercase tracking-widest mb-3">{t("installationLabel")}</label>
                            <div className="grid grid-cols-1 gap-3">
                                {["mechanical", "wet"].map((method) => (
                                    <button
                                        key={method}
                                        onClick={() => setInstallation(method as "mechanical" | "wet")}
                                        className={`px-4 py-3 rounded-xl border text-start text-sm transition-all duration-300 ${installation === method ? "border-app-acc bg-app-acc/10 text-white font-bold shadow-[0_0_15px_rgba(202,176,120,0.15)]" : "border-white/10 text-white/70 hover:border-white/30"}`}
                                    >
                                        {t(method as "mechanical" | "wet")}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleCalculate}
                            className="w-full h-14 bg-app-acc text-app-dark font-heading font-black uppercase tracking-widest rounded-xl hover:bg-white transition-colors shadow-lg mt-4"
                        >
                            {t("calculateBtn")}
                        </button>
                    </div>
                </div>

                {/* Result Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-black/40 rounded-2xl border border-white/5 relative">
                    {estimatedCost !== null ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center w-full"
                        >
                            <h3 className="text-white/80 text-sm font-heading font-black uppercase tracking-widest mb-4">{t("estimatedCost")}</h3>
                            <div className="flex items-end justify-center gap-2 mb-8 text-app-acc">
                                <span className="text-5xl md:text-6xl font-heading font-black tracking-tighter">{estimatedCost.toLocaleString()}</span>
                                <span className="text-xl font-heading font-bold pb-2">{t("currency")}</span>
                            </div>

                            <p className="text-white/70 text-xs text-center max-w-xs mx-auto leading-relaxed mb-8">
                                {t("disclaimer")}
                            </p>

                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full h-12 bg-white text-app-dark font-heading font-black uppercase tracking-wider rounded-xl hover:bg-app-acc transition-colors hover:scale-105 duration-300">
                                {t("contactCta")}
                                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                            </Link>
                        </motion.div>
                    ) : (
                        <div className="text-center text-white/60 flex flex-col items-center">
                            <Calculator className="w-16 h-16 mb-4 opacity-40" />
                            <p className="text-sm font-heading font-medium uppercase tracking-widest">{t("selectOptions")}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

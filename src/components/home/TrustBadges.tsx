"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Award, Globe, Building2, Star, Cpu } from "lucide-react";

const badges = [
    {
        icon: Award,
        en: { label: "10+ Years", sub: "In Qatar's Stone Industry" },
        ar: { label: "أكثر من 10 سنوات", sub: "في صناعة الحجر بقطر" },
    },
    {
        icon: Globe,
        en: { label: "Direct Import", sub: "Syria · Oman · Jordan · Italy · Portugal" },
        ar: { label: "استيراد مباشر", sub: "سوريا · عُمان · الأردن · إيطاليا · البرتغال" },
    },
    {
        icon: Building2,
        en: { label: "All Project Types", sub: "Villas, Palaces & Commercial Towers" },
        ar: { label: "جميع أنواع المشاريع", sub: "فلل، قصور وأبراج تجارية" },
    },
    {
        icon: Star,
        en: { label: "Trusted in Qatar", sub: "By Leading Developers & Architects" },
        ar: { label: "موثوق به في قطر", sub: "من كبار المطورين والمعماريين" },
    },
    {
        icon: Cpu,
        en: { label: "CNC Precision", sub: "In-House Fabrication Facility" },
        ar: { label: "دقة CNC", sub: "مصنع تصنيع داخلي" },
    },
];

export function TrustBadges() {
    const locale = useLocale();
    const isAr = locale === "ar";

    return (
        <section className="py-14 bg-app-dark border-y border-white/5" aria-label={isAr ? "مؤشرات الثقة" : "Trust Signals"}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                    {badges.map((badge, i) => {
                        const content = isAr ? badge.ar : badge.en;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                className="flex flex-col items-center text-center gap-3 p-4 lg:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-app-acc/40 hover:bg-white/8 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-app-acc/10 flex items-center justify-center shrink-0 group-hover:bg-app-acc/20 transition-colors">
                                    <badge.icon className="w-5 h-5 text-app-acc" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="font-black text-white text-sm leading-tight">{content.label}</p>
                                    <p className="text-white/50 text-xs leading-tight mt-1">{content.sub}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

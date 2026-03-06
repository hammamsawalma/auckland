"use client";

import { useLocale } from "next-intl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Replace with your actual Google Business Profile review link once GBP is created
const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_PLACE_ID/review";

export default function ReviewsPage() {
    const locale = useLocale();
    const isAr = locale === "ar";

    const whatsappShare = `https://wa.me/?text=${encodeURIComponent(
        isAr
            ? "أنصح بالتعامل مع أوكلاند للبناء والتطوير في قطر للحصول على أحجار طبيعية وواجهات فاخرة. اقرأ تقييماتهم هنا: https://www.aucklandcd.com/ar/reviews"
            : "Highly recommend Auckland Construction & Development in Qatar for premium natural stone and facades. Check out their reviews here: https://www.aucklandcd.com/en/reviews"
    )}`;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 bg-app-dark">

                {/* Hero */}
                <section className="pt-32 lg:pt-40 pb-16 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="container mx-auto max-w-2xl"
                    >
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                            {isAr ? "شاركنا تجربتك" : "Share Your Experience"}
                        </h1>
                        <p className="text-white/70 text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
                            {isAr
                                ? "رأيك يساعدنا على تقديم أفضل خدمة ويساعد معماريين ومطورين آخرين في قطر على اتخاذ قرار أفضل."
                                : "Your review helps us improve and helps other architects and developers in Qatar make a confident decision."}
                        </p>

                        {/* Primary CTA — Google Review */}
                        <motion.a
                            href={GOOGLE_REVIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 h-16 px-10 bg-white text-app-dark font-black uppercase tracking-wider rounded-full text-base shadow-2xl hover:shadow-white/20 transition-all duration-300 mb-6"
                            aria-label={isAr ? "اكتب تقييماً على Google" : "Leave a Google Review"}
                        >
                            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            {isAr ? "اكتب تقييماً على Google" : "Leave a Google Review"}
                            <ExternalLink className="w-4 h-4 opacity-60" aria-hidden="true" />
                        </motion.a>

                        <p className="text-white/40 text-xs mb-10">
                            {isAr ? "سيفتح متجر Google في نافذة جديدة" : "Opens Google in a new tab · Takes 30 seconds"}
                        </p>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-8 max-w-sm mx-auto">
                            <div className="flex-1 h-px bg-white/10" />
                            <span className="text-white/30 text-xs uppercase tracking-widest">{isAr ? "أو" : "or"}</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* WhatsApp Share */}
                        <a
                            href={whatsappShare}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 h-12 px-6 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold uppercase tracking-wider rounded-full text-sm hover:bg-[#25D366]/20 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            {isAr ? "شارك مع زميل عبر واتساب" : "Share with a Colleague via WhatsApp"}
                        </a>
                    </motion.div>
                </section>

                {/* Why reviews matter section */}
                <section className="py-16 border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <h2 className="text-xl font-bold text-white mb-8">
                            {isAr ? "لماذا تُهم تقييماتك؟" : "Why Your Review Matters"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    en: { num: "10+", desc: "Google reviews help us rank above competitors in Qatar's construction search results" },
                                    ar: { num: "10+", desc: "تقييمات Google تساعدنا على التفوق على المنافسين في نتائج البحث بقطر" }
                                },
                                {
                                    en: { num: "3×", desc: "More inquiries come from businesses with positive Google reviews vs those without" },
                                    ar: { num: "3×", desc: "استفسارات أكثر تأتي للشركات ذات التقييمات الإيجابية مقارنة بتلك التي بدونها" }
                                },
                                {
                                    en: { num: "30s", desc: "That's all it takes to leave a review — and it helps Qatar's construction community" },
                                    ar: { num: "30 ثانية", desc: "هذا كل ما يستغرقه ترك تقييم — وسيفيد مجتمع البناء في قطر" }
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <p className="text-app-acc font-black text-4xl mb-2">{isAr ? item.ar.num : item.en.num}</p>
                                    <p className="text-white/60 text-sm font-light leading-relaxed">{isAr ? item.ar.desc : item.en.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

// Placeholder data for SEO articles
const articles = [
    {
        id: "facade-heat-resolution",
        image: "/hero-bg.jpg", // Replace with valid image
        titleEn: "Resolving Villa Facade Cracks: Why Syrian Stone Surpasses Alternatives in Gulf Heat",
        titleAr: "حلول تشقق واجهات الفلل: لماذا يتفوق الحجر السوري في حرارة الخليج؟",
        excerptEn: "Discover how the structural density of Syrian and Omani stone prevents thermal expansion and humidity damage compared to GRC and Paint.",
        excerptAr: "تعرف على كيفية تغلب الحجر السوري والعماني على الرطوبة والحرارة العالية وتفوقه على بديل الرخام في واجهات قطر.",
        date: "2024-03-15",
        author: "Auckland Engineering"
    },
    {
        id: "modern-heritage-villas",
        image: "/hero-bg.jpg", // Replace with valid image
        titleEn: "Modern Heritage: Blending Omani Marble with Arches in Qatari Villas",
        titleAr: "التراث الحديث: دمج الرخام العماني مع تصميم الأقواس في فيلات قطر",
        excerptEn: "Explore the 2026 trend of 'Warm Modernism' combining sustainable luxury interiors with traditional CNC carved stone.",
        excerptAr: "استكشف اتجاهات التصميم الفاخر لعام ٢٠٢٦ من خلال دمج الأقواس المنحوتة CNC والحجر العماني الصديق للبيئة.",
        date: "2024-03-10",
        author: "Auckland Design"
    }
];

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations("Blog");
    const isAr = locale === 'ar';

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-24 pt-32 lg:pt-40 bg-app-dark relative overflow-hidden h-fit lg:h-[60vh] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[150px] opacity-50 pointer-events-none -z-10 transform translate-x-32 hidden lg:block"></div>

                    <div className="container mx-auto px-4 max-w-6xl text-center">
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
                                INDUSTRY INSIGHTS
                            </h1>
                            <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                                {t("subtitle")}
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-app-light relative overflow-hidden min-h-[50vh]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {articles.map((article, idx) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-black/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-app-dark/10 transition-shadow duration-300 group"
                                >
                                    <div className="relative h-72 w-full bg-app-dark/5 overflow-hidden">
                                        {/* Image placeholder */}
                                        <div className="absolute inset-0 bg-app-dark/80 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                            <span className="text-white/20 font-heading font-black text-4xl uppercase tracking-widest">Auckland</span>
                                        </div>
                                        <div className="absolute top-6 left-6 bg-app-acc text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                            Article
                                        </div>
                                    </div>

                                    <div className="p-8 lg:p-10">
                                        <div className="flex items-center gap-6 text-app-dark/40 text-xs font-bold uppercase tracking-widest mb-6 border-b border-black/5 pb-6">
                                            <span className="flex items-center gap-2 text-app-acc"><Calendar className="w-4 h-4" /> {article.date}</span>
                                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {article.author}</span>
                                        </div>

                                        <h2 className="text-2xl font-black text-app-dark mb-4 leading-tight group-hover:text-app-acc transition-colors">
                                            {isAr ? article.titleAr : article.titleEn}
                                        </h2>
                                        <p className="text-app-dark/60 font-light mb-8 leading-relaxed line-clamp-3">
                                            {isAr ? article.excerptAr : article.excerptEn}
                                        </p>

                                        <Link href={`/blog/${article.id}`} className="inline-flex items-center gap-2 text-app-acc font-bold uppercase tracking-wider text-sm hover:text-app-dark transition-colors mt-auto">
                                            {t("readMore")}
                                            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* SEO Text Footer for targeting Long Tail Keywords directly on page */}
                        <div className="max-w-7xl mx-auto mt-24 p-12 border-t border-app-dark/10 bg-white rounded-3xl shadow-xl">
                            <div className="inline-block px-4 py-2 bg-app-light rounded-sm mb-6">
                                <h2 className="text-app-acc text-xs font-bold uppercase tracking-widest relative z-10">Targeted Market Expertise</h2>
                            </div>
                            <p className="text-app-dark/60 text-sm leading-loose font-light max-w-4xl">
                                {isAr ? "نحن في شركة أوكلاند نقدم أفضل حلول تشقق واجهات الفلل في قطر من خلال اختيار أفضل حجر للواجهات يتحمل حرارة الخليج. نستورد ونوفر موردين حجر سوري قطر ونركب واجهات حجر عماني قطر بالإضافة إلى تقديم أحدث ديكورات أرابيسك حجر للفلل والتصاميم النيو كلاسيك بحجر سوري. تفوق دائم على عيوب بديل الرخام للواجهات بأسعار تنافسية. تشطيبات فلل مستدامة وتوريد وتركيب الدوحة." : "Auckland Construction & Development offers premium heat resistant stone facades suitable for the Gulf. Avoid the pitfalls of GRC and synthetic materials with our natural stone installation in Qatar, featuring Omani marble and Syrian stone resilient to high humidity and temperatures. We specialize in luxury fit-out for modern heritage villas and CNC marble designs."}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

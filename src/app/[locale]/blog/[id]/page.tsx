"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { articles } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ArticlePage({ params }: { params: Promise<{ locale: string, id: string }> }) {
    const { locale, id } = use(params);
    const t = useTranslations("Blog");
    const isAr = locale === 'ar';

    const article = articles.find(a => a.id === id);

    if (!article) {
        notFound();
    }

    const title = isAr ? article.titleAr : article.titleEn;
    const author = isAr ? article.authorAr : article.authorEn;
    const content = isAr ? article.contentAr : article.contentEn;
    const date = isAr ? article.dateAr : article.dateEn;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Hero section */}
                <section className="py-24 pt-32 lg:pt-40 bg-app-dark relative overflow-hidden h-fit lg:h-[50vh] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[150px] opacity-50 pointer-events-none -z-10 transform translate-x-32 hidden lg:block"></div>
                    <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <Link href="/blog" className="inline-flex items-center gap-2 text-app-acc text-sm font-bold uppercase tracking-widest hover:text-white transition-colors mb-6">
                                {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                                {isAr ? "العودة إلى المدونة" : "Back to Blog"}
                            </Link>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
                                {title}
                            </h1>

                            <div className="flex items-center justify-center gap-6 text-white/50 text-sm font-bold uppercase tracking-widest mt-8">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-app-acc" /> {date}</span>
                                <span className="flex items-center gap-2"><User className="w-4 h-4 text-app-acc" /> {author}</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 bg-app-light relative">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white border border-black/5 rounded-3xl p-8 md:p-16 shadow-xl"
                        >
                            <div className="prose prose-lg max-w-none text-app-dark/80 font-light leading-relaxed whitespace-pre-line">
                                {content}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

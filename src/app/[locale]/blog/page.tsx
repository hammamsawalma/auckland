import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/lib/blog-data";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });
    return { title: t("heroTitle"), description: t("subtitle") };
}

export default async function BlogPage({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });
    const isAr = locale === "ar";

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-24 pt-32 lg:pt-40 bg-app-dark relative overflow-hidden h-fit lg:h-[60vh] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[150px] opacity-50 pointer-events-none -z-10 transform translate-x-32 hidden lg:block"></div>

                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-white/10 rounded-sm mb-4">
                                <span className="text-app-acc text-sm font-bold uppercase tracking-widest">{t("title")}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none">
                                {t("heroTitle")}
                            </h1>
                            <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                                {t("subtitle")}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-app-light relative overflow-hidden min-h-[50vh]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {articles.map((article) => (
                                <div
                                    key={article.id}
                                    className="bg-white border border-black/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-app-dark/10 transition-shadow duration-300 group"
                                >
                                    <Link href={`/blog/${article.id}`} className="block h-full cursor-pointer">
                                        <div className="relative h-72 w-full bg-app-dark/5 overflow-hidden">
                                            {/* Image placeholder */}
                                            <div className="absolute inset-0 bg-app-dark/80 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                                <span className={(isAr ? "font-arabic tracking-normal " : "font-heading tracking-widest ") + "text-white/20 font-black text-4xl uppercase"}>
                                                    {isAr ? "أوكلاند" : "Auckland"}
                                                </span>
                                            </div>
                                            <div className="absolute top-6 left-6 bg-app-acc text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                                {t("articleBadge")}
                                            </div>
                                        </div>

                                        <div className="p-8 lg:p-10 flex flex-col items-start justify-start">
                                            <div className="flex items-center gap-6 text-app-dark/40 text-xs font-bold uppercase tracking-widest mb-6 border-b border-black/5 pb-6 w-full">
                                                <span className="flex items-center gap-2 text-app-acc"><Calendar className="w-4 h-4" /> {isAr ? article.dateAr : article.dateEn}</span>
                                                <span className="flex items-center gap-2"><User className="w-4 h-4" /> {isAr ? article.authorAr : article.authorEn}</span>
                                            </div>

                                            <h2 className="text-2xl font-black text-app-dark mb-4 leading-tight group-hover:text-app-acc transition-colors">
                                                {isAr ? article.titleAr : article.titleEn}
                                            </h2>
                                            <p className="text-app-dark/60 font-light mb-8 leading-relaxed line-clamp-3">
                                                {isAr ? article.excerptAr : article.excerptEn}
                                            </p>

                                            <div className="inline-flex items-center gap-2 text-app-acc font-bold uppercase tracking-wider text-sm group-hover:text-app-dark transition-colors mt-auto pointer-events-none">
                                                {t("readMore")}
                                                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* SEO Text Footer */}
                        <div className="max-w-7xl mx-auto mt-24 p-12 border-t border-app-dark/10 bg-white rounded-3xl shadow-xl">
                            <div className="inline-block px-4 py-2 bg-app-light rounded-sm mb-6">
                                <h2 className="text-app-acc text-xs font-bold uppercase tracking-widest relative z-10">{t("targetMarketTitle")}</h2>
                            </div>
                            <p className="text-app-dark/60 text-sm leading-loose font-light max-w-4xl">
                                {t("targetMarketDesc")}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

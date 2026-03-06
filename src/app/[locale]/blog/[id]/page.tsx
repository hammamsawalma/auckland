import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = {
    params: Promise<{ locale: string; id: string }>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

// Generate metadata for each article for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, id } = await params;
    const article = articles.find((a) => a.id === id);
    if (!article) return {};
    const title = locale === "ar" ? article.titleAr : article.titleEn;
    const description = locale === "ar" ? article.excerptAr : article.excerptEn;
    const url = `${BASE_URL}/${locale}/blog/${id}`;
    const altLocale = locale === "ar" ? "en" : "ar";
    return {
        title,
        description,
        alternates: {
            canonical: url,
            languages: {
                'en': `${BASE_URL}/en/blog/${id}`,
                'ar': `${BASE_URL}/ar/blog/${id}`,
            },
        },
        openGraph: {
            type: "article",
            url,
            title,
            description,
            images: article.image
                ? [{ url: article.image, width: 1200, height: 630, alt: title }]
                : [{ url: '/v2_images/gallery/gallery-hero.webp', width: 1200, height: 630, alt: title }],
            publishedTime: article.dateEn,
            authors: [article.authorEn],
        },
    };
}

// Statically generate all article pages at build time
export async function generateStaticParams() {
    return articles.map((a) => ({ id: a.id }));
}

export default async function ArticlePage({ params }: Props) {
    const { locale, id } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });
    const isAr = locale === "ar";

    const article = articles.find((a) => a.id === id);

    if (!article) {
        notFound();
    }

    const title = isAr ? article.titleAr : article.titleEn;
    const author = isAr ? article.authorAr : article.authorEn;
    const content = isAr ? article.contentAr : article.contentEn;
    const date = isAr ? article.dateAr : article.dateEn;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: isAr ? article.excerptAr : article.excerptEn,
        image: article.image || '/v2_images/gallery/gallery-hero.webp',
        datePublished: article.dateEn,
        author: {
            "@type": "Organization",
            name: article.authorEn,
        },
        publisher: {
            "@type": "Organization",
            name: "Auckland Construction & Development",
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/v2_images/acd-icon.png`,
            },
        },
        url: `${BASE_URL}/${locale}/blog/${id}`,
        inLanguage: locale,
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={articleSchema} />
            <Navbar />

            <main className="flex-1">
                {/* Hero section */}
                <section className="py-24 pt-32 lg:pt-40 bg-app-dark relative overflow-hidden h-fit lg:h-[50vh] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[150px] opacity-50 pointer-events-none -z-10 transform translate-x-32 hidden lg:block"></div>
                    <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                        <div className="space-y-6">
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
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 bg-app-light relative">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-16 shadow-xl">
                            <div className="prose prose-lg max-w-none text-app-dark/80 font-light leading-relaxed whitespace-pre-line">
                                {content}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

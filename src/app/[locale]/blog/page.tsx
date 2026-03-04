import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

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
        <main className="min-h-screen bg-app-dark pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto border-b border-white/10 pb-12 mb-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">{t("title")}</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-app-acc/50 transition-all duration-300 group">
                        <div className="relative h-64 w-full bg-black/50 overflow-hidden">
                            {/* In a real app, use the actual Next.js Image component with accurate src */}
                            <div className="absolute inset-0 bg-app-acc/10 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white uppercase tracking-wider">
                                Insights
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex items-center gap-4 text-white/40 text-xs uppercase tracking-widest mb-4">
                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {article.author}</span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-app-acc transition-colors">
                                {isAr ? article.titleAr : article.titleEn}
                            </h2>
                            <p className="text-white/60 font-light mb-8 leading-relaxed line-clamp-3">
                                {isAr ? article.excerptAr : article.excerptEn}
                            </p>

                            <Link href={`/blog/${article.id}`} className="inline-flex items-center gap-2 text-app-acc font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">
                                {t("readMore")}
                                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* SEO Text Footer for targeting Long Tail Keywords directly on page */}
            <div className="max-w-7xl mx-auto mt-20 p-8 border border-white/5 bg-black/20 rounded-2xl">
                <h2 className="text-white/40 text-sm font-bold uppercase tracking-widest mb-4">Targeted Market Expertise</h2>
                <p className="text-white/30 text-xs leading-loose">
                    {isAr ? "نحن في شركة أوكلاند نقدم أفضل حلول تشقق واجهات الفلل في قطر من خلال اختيار أفضل حجر للواجهات يتحمل حرارة الخليج. نستورد ونوفر موردين حجر سوري قطر ونركب واجهات حجر عماني قطر بالإضافة إلى تقديم أحدث ديكورات أرابيسك حجر للفلل والتصاميم النيو كلاسيك بحجر سوري. تفوق دائم على عيوب بديل الرخام للواجهات بأسعار تنافسية. تشطيبات فلل مستدامة وتوريد وتركيب الدوحة." : "Auckland Construction & Development offers premium heat resistant stone facades suitable for the Gulf. Avoid the pitfalls of GRC and synthetic materials with our natural stone installation in Qatar, featuring Omani marble and Syrian stone resilient to high humidity and temperatures. We specialize in luxury fit-out for modern heritage villas and CNC marble designs."}
                </p>
            </div>
        </main>
    );
}

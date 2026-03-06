"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs = [
    {
        en: {
            q: "What types of natural stone are best for Qatar's climate?",
            a: "Syrian stone and Omani marble are the top choices for Qatar's extreme heat. Syrian stone has a compressive strength of 120–160 MPa and water absorption below 0.5%, making it highly resistant to thermal expansion — the leading cause of facade cracks in the Gulf. Omani marble is ideal for interiors. For outdoor and pool areas, honed limestone provides excellent slip resistance."
        },
        ar: {
            q: "ما أنواع الأحجار الطبيعية الأنسب لمناخ قطر؟",
            a: "يُعدّ الحجر السوري والرخام العماني الخياران الأمثلان لحرارة قطر الشديدة. يتمتع الحجر السوري بقوة ضغط تتراوح بين 120 و160 ميغاباسكال وامتصاص مائي أقل من 0.5%، مما يجعله مقاوماً للتمدد الحراري — السبب الرئيسي لتشققات الواجهات في الخليج. أما الرخام العماني فهو مثالي للداخليات. وللمناطق الخارجية وحمامات السباحة، يوفر الحجر الجيري المصنفر مقاومة ممتازة للانزلاق."
        }
    },
    {
        en: {
            q: "How much does stone facade cladding cost in Qatar?",
            a: "Stone cladding costs in Qatar typically range from QAR 180–350 per m² for limestone, QAR 250–400 per m² for Syrian stone, and QAR 300–500 per m² for premium Omani marble — all figures inclusive of supply and installation. GRC panels range from QAR 150–300 per m². Prices vary based on thickness, finish type, complexity of installation, and access to the facade. Contact Auckland for a free site-specific quote."
        },
        ar: {
            q: "كم تبلغ تكلفة كسوة الواجهات الحجرية في قطر؟",
            a: "تتراوح تكاليف كسوة الحجر في قطر عادةً بين 180–350 ريال قطري للمتر المربع للحجر الجيري، و250–400 ريال للحجر السوري، و300–500 ريال للرخام العماني الفاخر — وجميع الأسعار تشمل التوريد والتركيب. تتراوح ألواح GRC بين 150–300 ريال للمتر المربع. تختلف الأسعار بحسب السماكة ونوع الإنهاء ومدى تعقيد التركيب وإمكانية الوصول إلى الواجهة. تواصل مع أوكلاند للحصول على عرض سعر مجاني."
        }
    },
    {
        en: {
            q: "What is GRC and how does it compare to natural stone?",
            a: "GRC (Glass Reinforced Concrete) is a factory-fabricated material using cement reinforced with glass fibres. It weighs 70% less than natural stone (18–25 kg/m² vs 60+ for stone), making it ideal for high-rise buildings where structural load is a constraint. GRC excels at intricate Islamic geometric patterns (mashrabiya) that would cost 3–5x more in carved natural stone. However, natural stone is superior for long-term durability, thermal performance, and resale value."
        },
        ar: {
            q: "ما هو الـ GRC وكيف يقارن بالحجر الطبيعي؟",
            a: "الـ GRC (الخرسانة المسلحة بالألياف الزجاجية) مادة مصنعة في المصانع باستخدام الإسمنت المسلح بألياف زجاجية. وزنه أخف بنسبة 70% من الحجر الطبيعي (18–25 كغم/م² مقابل 60+ للحجر)، مما يجعله مثالياً للمباني المرتفعة حيث يكون الحمل الهيكلي قيداً. يتميز الـ GRC بالأنماط الهندسية الإسلامية المعقدة (المشربية) التي ستكلف 3–5 أضعاف في الحجر الطبيعي المنحوت. أما الحجر الطبيعي فهو متفوق من حيث المتانة طويلة الأمد والأداء الحراري وقيمة إعادة البيع."
        }
    },
    {
        en: {
            q: "Do you offer stone installation across Qatar?",
            a: "Yes — Auckland Construction & Development provides full supply and installation services across all of Qatar, including Doha, Al Wakrah, Al Khor, Al Rayyan, and Lusail. We have in-house installation teams with over 10 years of experience in commercial and residential projects."
        },
        ar: {
            q: "هل تقدمون خدمات تركيب الحجر في جميع أنحاء قطر؟",
            a: "نعم — تقدم أوكلاند للبناء والتطوير خدمات التوريد والتركيب الكاملة في جميع أنحاء قطر، بما في ذلك الدوحة والوكرة والخور والريان ولوسيل. لدينا فرق تركيب داخلية تمتلك أكثر من 10 سنوات من الخبرة في المشاريع التجارية والسكنية."
        }
    },
    {
        en: {
            q: "Can you supply stone for both villas and commercial buildings?",
            a: "Absolutely. Auckland has successfully completed stone supply and installation for both luxury private villas and large-scale commercial projects including towers, hotels, and government buildings in Qatar. Our CNC factory allows us to produce any thickness, dimension, or custom profile required for your project specifications."
        },
        ar: {
            q: "هل يمكنكم توريد الحجر للفلل والمباني التجارية معاً؟",
            a: "بالتأكيد. أتمّت أوكلاند بنجاح مشاريع توريد وتركيب الحجر لكل من الفلل الخاصة الفاخرة والمشاريع التجارية الكبيرة بما فيها الأبراج والفنادق والمباني الحكومية في قطر. يتيح لنا مصنعنا المجهز بأجهزة CNC إنتاج أي سماكة أو مقاس أو تشكيلة مخصصة مطلوبة لمواصفات مشروعك."
        }
    },
    {
        en: {
            q: "How long does a natural stone facade last in the Gulf?",
            a: "A properly installed natural stone facade in Qatar can last 50–100+ years with minimal maintenance. Unlike painted finishes that require repainting every 5–7 years, or GRC that needs UV-coating reapplication, natural stone's colour and structure are inherent to the material — they do not fade or degrade. Sealing is recommended for porous stones like limestone every 5–10 years."
        },
        ar: {
            q: "كم تدوم واجهة الحجر الطبيعي في منطقة الخليج؟",
            a: "يمكن لواجهة الحجر الطبيعي المُركَّبة بشكل صحيح في قطر أن تدوم من 50 إلى 100 سنة أو أكثر مع الحد الأدنى من الصيانة. على خلاف الطلاءات التي تحتاج إلى إعادة طلاء كل 5–7 سنوات، أو الـ GRC الذي يحتاج إلى إعادة تطبيق الطلاء المقاوم للأشعة فوق البنفسجية، فإن لون الحجر الطبيعي وبنيته متأصلان في المادة ذاتها — لا يتلاشيان ولا يتدهوران. يُوصى بتلميع الأحجار شبه المسامية كالحجر الجيري كل 5–10 سنوات."
        }
    }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.en.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": f.en.a
        }
    }))
};

export function FAQSection() {
    const locale = useLocale();
    const isAr = locale === "ar";
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            <JsonLd data={faqSchema} />
            <section className="py-20 bg-app-light" id="faq">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-2 bg-app-dark rounded-sm mb-4">
                            <span className="text-app-acc text-sm font-bold uppercase tracking-widest">
                                {isAr ? "أسئلة شائعة" : "FAQ"}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-app-dark uppercase tracking-tight mb-4">
                            {isAr ? "أسئلة يطرحها المعماريون دائماً" : "Questions Architects Always Ask"}
                        </h2>
                        <p className="text-lg text-app-dark/70 font-light max-w-xl mx-auto">
                            {isAr
                                ? "إجابات مباشرة حول اختيار الحجر والتكاليف والتركيب في بيئة قطر"
                                : "Straight answers about stone selection, costs, and installation in Qatar's environment"}
                        </p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => {
                            const q = isAr ? faq.ar.q : faq.en.q;
                            const a = isAr ? faq.ar.a : faq.en.a;
                            const isOpen = openIndex === i;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07, duration: 0.4 }}
                                    className={`rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? "border-app-acc shadow-lg" : "border-app-dark/10"} bg-white`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 p-6 text-start"
                                        aria-expanded={isOpen}
                                    >
                                        <h3 className="font-bold text-app-dark text-base leading-snug">{q}</h3>
                                        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-app-acc text-white" : "bg-app-light text-app-dark"}`}>
                                            {isOpen ? <Minus className="w-4 h-4" aria-hidden="true" /> : <Plus className="w-4 h-4" aria-hidden="true" />}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 text-app-dark/70 font-light leading-relaxed border-t border-app-dark/5 pt-4">
                                                    {a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

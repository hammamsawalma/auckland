import { LucideIcon } from "lucide-react";

export type Article = {
    id: string;
    image?: string;
    titleEn: string;
    titleAr: string;
    excerptEn: string;
    excerptAr: string;
    contentEn?: string;
    contentAr?: string;
    dateEn: string;
    dateAr: string;
    authorEn: string;
    authorAr: string;
};

// SEO articles — bilingual EN/AR
export const articles: Article[] = [
    {
        id: "facade-heat-resolution",
        image: "/images/gallery/gallery-hero.webp",
        titleEn: "Resolving Villa Facade Cracks: Why Syrian Stone Surpasses Alternatives in Gulf Heat",
        titleAr: "معالجة تشققات واجهات الفلل: لماذا يتفوق الحجر السوري في مواجهة حرارة الخليج العالية؟",
        excerptEn: "Discover how the structural density of Syrian and Omani stone prevents thermal expansion and humidity damage compared to GRC and Paint.",
        excerptAr: "اكتشف السر وراء القوة الهيكلية للحجر السوري والعماني في مقاومة التمدد الحراري والرطوبة، ليكون الخيار الأمثل والبديل الأذكى مقارنة بالجي آر سي والدهانات التقليدية.",
        dateEn: "March 15, 2024",
        dateAr: "١٥ مارس ٢٠٢٤",
        authorEn: "Auckland Engineering",
        authorAr: "أوكلاند الهندسية",
        contentEn: "Villa facades in the Gulf region face extreme weather conditions, from intense heat to high humidity. Traditional solutions like GRC (Glassfibre Reinforced Concrete) or simply using paint often suffer from thermal expansion, leading to cracks and structural damage over time. Syrian and Omani stone, however, provide a robust alternative. Their high structural density inherently resists thermal expansion, safeguarding buildings against humidity damage and minimizing maintenance costs. Natural stone acts as an excellent insulator, maintaining the interior temperature and reducing the reliance on air conditioning systems.\n\nIn addition to the structural benefits, natural stone elevates the aesthetics of any villa. The variations in texture and color convey an image of luxury and durability that synthetic materials struggle to replicate. Auckland Engineering has successfully utilized Syrian stone in numerous high-end residential projects, proving it is an investment that preserves both structure and value.",
        contentAr: "تواجه الواجهات المعمارية للفيلات والقصور في منطقة الخليج تحديات مناخية قاسية، تتراوح بين درجات الحرارة الحارقة والرطوبة العالية. وغالباً ما تعاني الحلول التقليدية كالخرسانة المسلحة بالألياف الزجاجية (GRC) أو الدهانات العادية من مشكلة التمدد الحراري، مما يؤدي بمرور الوقت إلى تشققات واضحة وتدهور في المظهر الهيكلي. هنا يبرز دور الحجر السوري والعماني كبديل عصري لا يضاهى؛ فبفضل كثافتهما الهيكلية الاستثنائية ومقاومتهما الفطرية للتمدد الحراري، يشكلان درعاً واقياً يحمي المباني من أضرار الرطوبة، ويقلل من تكاليف الصيانة الدورية. كما يمتاز الحجر الطبيعي بخصائص عزل فائقة، ما يسهم في استقرار درجات الحرارة الداخلية وتقليل الاعتماد المفرط على أنظمة التكييف.\n\nبعيداً عن المزايا الهيكلية، يضفي الحجر الطبيعي لمسة من الرقي المطلق على أي فيلا. في أوكلاند الهندسية، نفخر بسجلنا الحافل في تنفيذ مشاريع سكنية فاخرة باستخدام الحجر السوري، لنثبت أنه الاستثمار الأمثل للحفاظ على متانة البنيان ورقي الواجهة في آن واحد."
    },
    {
        id: "modern-heritage-villas",
        image: "/images/gallery/gallery-hero.webp",
        titleEn: "Modern Heritage: Blending Omani Marble with Arches in Qatari Villas",
        titleAr: "التراث برؤية معاصرة: دمج الرخام العماني مع تصميم الأقواس في الفلل القطرية",
        excerptEn: "Explore the 2026 trend of 'Warm Modernism' combining sustainable luxury interiors with traditional CNC carved stone.",
        excerptAr: "استكشف التوجه المعماري الأبرز لعام ٢٠٢٦ \"الحداثة الدافئة\"، حيث تتناغم فخامة التصاميم الداخلية المستدامة مع دقة الحجر المنحوت بتقنية CNC.",
        dateEn: "March 10, 2024",
        dateAr: "١٠ مارس ٢٠٢٤",
        authorEn: "Auckland Design",
        authorAr: "أوكلاند للتصميم",
        contentEn: "The architectural landscape in Qatar is witnessing a significant shift towards 'Warm Modernism,' a trend poised to dominate by 2026. This approach harmoniously blends the minimalist lines of contemporary architecture with the deep-rooted cultural heritage of the region. A hallmark of this trend is the integration of Omani marble with classic Arabian arches, creating visually stunning structural statements. Using advanced CNC carved stone, we can now achieve intricate geometric patterns that pay homage to traditional craftsmanship while maintaining precision and scale.\n\nThis fusion not only achieves a luxurious aesthetic but also emphasizes sustainability. Omani marble is sourced locally, significantly reducing the carbon footprint associated with transportation. Furthermore, the material's longevity ensures a sustainable lifecycle for the building's interior and exterior elements. As we move towards more eco-conscious architectural practices, combining modern technology with sustainable materials ensures we meet future standards without sacrificing cultural identity.",
        contentAr: "يشهد المشهد المعماري في دولة قطر تحولاً نوعياً نحو أسلوب \"الحداثة الدافئة\"، وهو التوجه الذي يتوقع أن يتصدر المشهد بحلول عام ٢٠٢٦. يمزج هذا الأسلوب بتناغم آسر بين الخطوط البسيطة للعمارة المعاصرة والعمق الثقافي والتراثي لمنطقتنا. ومن أبرز تجليات هذا التوجه هو الدمج المتبصر بين الرخام العماني الأصيل والأقواس العربية الكلاسيكية، مما ينتج عنه تحف معمارية تخطف الأبصار.\n\nلا يقتصر سحر هذا الدمج على البعد الجمالي الفاخر فحسب، بل يمتد ليرسي معايير جديدة للاستدامة. فاعتمادنا على الرخام العماني المستخرج إقليمياً يساهم في خفض البصمة الكربونية المرتبطة بعمليات النقل بشكل ملموس."
    },
    {
        id: "grc-vs-natural-stone-qatar",
        image: "/images/gallery/gallery-hero.webp",
        titleEn: "GRC vs. Natural Stone for Qatar Villas: The Complete 2026 Comparison",
        titleAr: "GRC مقابل الحجر الطبيعي للفلل القطرية: المقارنة الكاملة لعام 2026",
        excerptEn: "Architects and developers in Qatar face a critical choice: GRC panels or natural stone cladding? The definitive comparison covering cost, durability, weight and long-term performance in Gulf conditions.",
        excerptAr: "يواجه المعماريون والمطورون في قطر خياراً حاسماً: ألواح GRC أم كسوة الحجر الطبيعي؟ المقارنة الشاملة للتكلفة والمتانة والوزن والأداء طويل الأمد.",
        dateEn: "March 1, 2026",
        dateAr: "١ مارس ٢٠٢٦",
        authorEn: "Auckland Engineering",
        authorAr: "أوكلاند الهندسية",
        contentEn: "When specifying materials for a villa facade in Qatar, architects face a critical decision: GRC panels or natural stone cladding?\n\nGRC weighs 18 to 25 kg per m2 (70% lighter than stone) and excels at Islamic geometric patterns like mashrabiya screens. Natural stone panels (2 to 4cm at 60 to 80 kg per m2) wins on durability and prestige.\n\nCost: GRC installs at QAR 150 to 300 per m2. Syrian stone: QAR 250 to 400 per m2. Omani marble: up to QAR 500 per m2.\n\nDurability: Syrian stone compressive strength 120 to 160 MPa, water absorption less than 0.5%. GRC needs UV-coating renewal but quality GRC lasts 25+ years.\n\nVerdict: Natural stone for luxury villas and long-term value. GRC for high-rise, complex patterns, and tight budgets. Auckland specializes in both — contact us for expert guidance.",
        contentAr: "يواجه المعماريون في قطر قراراً حاسماً: ألواح GRC أم كسوة الحجر الطبيعي؟\n\nيزن الـGRC 18 إلى 25 كغم للمتر المربع (أخف بنسبة 70%) ويتميز بالأنماط الإسلامية المعقدة. الحجر الطبيعي (2–4 سم، 60–80 كغم للمتر المربع) يتفوق بالمتانة والرقي.\n\nالتكاليف: GRC بـ 150–300 ريال للمتر المربع. الحجر السوري 250–400 ريال. الرخام العماني حتى 500 ريال.\n\nالمتانة: قوة ضغط الحجر السوري 120–160 ميغاباسكال، امتصاص مائي أقل من 0.5%. الـGRC عالي الجودة يدوم أكثر من 25 سنة.\n\nالحكم: الحجر الطبيعي للفلل الفاخرة. الـGRC للأبراج والأنماط المعقدة. تتخصص أوكلاند في كليهما."
    },
    {
        id: "syrian-stone-facade-cost-doha",
        image: "/images/gallery/gallery-hero.webp",
        titleEn: "Syrian Stone Facade Cost in Doha: Full 2026 Price Guide",
        titleAr: "تكلفة واجهات الحجر السوري في الدوحة: دليل الأسعار الكامل لعام 2026",
        excerptEn: "Planning a stone facade in Qatar? This guide breaks down the real cost of Syrian stone cladding in Doha — material pricing, installation labour, and what affects your final quote.",
        excerptAr: "هل تخطط لواجهة حجرية في قطر؟ يوضح هذا الدليل التكلفة الحقيقية لكسوة الحجر السوري في الدوحة.",
        dateEn: "March 5, 2026",
        dateAr: "٥ مارس ٢٠٢٦",
        authorEn: "Auckland Construction",
        authorAr: "أوكلاند للبناء",
        contentEn: "Syrian stone is the most popular facade cladding material in Qatar. Here is the complete 2026 pricing breakdown.\n\nMaterial Cost: Premium Syrian stone (2cm, standard cream/golden) costs QAR 80 to 130 per m2 imported and delivered. Thicker panels (3cm to 4cm) carry a 20 to 40% premium. Bush-hammered or split-face finishes add 10 to 20%.\n\nInstallation Labour: QAR 120 to 200 per m2 by trained stonemasons, depending on facade height, pattern complexity (herringbone adds 25 to 30%), and site access.\n\nTotal Supply and Installation: QAR 250 to 350 per m2 for standard finishes. QAR 300 to 400 per m2 for premium cut-to-size panels.\n\nAdditional Costs: Sealing QAR 15 to 25 per m2. Expansion joints add 5 to 10%. Shop drawings provided free by Auckland on confirmed orders.\n\nTo maximize value: order consistent colour batches, finalize dimensions before CNC cutting, bundle facade and flooring orders. Contact Auckland for a free site visit.",
        contentAr: "الحجر السوري هو أكثر مواد كسوة الواجهات شيوعاً في قطر. إليك التسعير الكامل لعام 2026.\n\nتكلفة المواد: 80–130 ريال للمتر المربع للحجر السوري الفاخر (2 سم) مستورداً ومسلماً. الألواح الأسمك علاوة 20–40%. الإنهاءات الخاصة تضيف 10–20%.\n\nعمالة التركيب: 120–200 ريال للمتر المربع حسب ارتفاع الواجهة وتعقيد النمط وقيود الوصول.\n\nالإجمالي: 250–350 ريال للمتر المربع للإنهاءات القياسية. 300–400 ريال للقطع المخصصة.\n\nتكاليف إضافية: التلميع 15–25 ريال للمتر المربع. فواصل التمدد تضيف 5–10%. رسومات الورشة مجانية من أوكلاند عند تأكيد الطلبات.\n\nللحصول على أفضل قيمة: اطلب دفعات ألوان متسقة، أنهِ الأبعاد قبل القطع، اجمع الطلبات. تواصل مع أوكلاند للزيارة المجانية."
    }
];

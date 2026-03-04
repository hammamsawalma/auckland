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

// Placeholder data for SEO articles
export const articles: Article[] = [
    {
        id: "facade-heat-resolution",
        image: "/images/gallery/gallery-hero.jpg",
        titleEn: "Resolving Villa Facade Cracks: Why Syrian Stone Surpasses Alternatives in Gulf Heat",
        titleAr: "معالجة تشققات واجهات الفلل: لماذا يتفوق الحجر السوري في مواجهة حرارة الخليج العالية؟",
        excerptEn: "Discover how the structural density of Syrian and Omani stone prevents thermal expansion and humidity damage compared to GRC and Paint.",
        excerptAr: "اكتشف السر وراء القوة الهيكلية للحجر السوري والعماني في مقاومة التمدد الحراري والرطوبة، ليكون الخيار الأمثل والبديل الأذكى مقارنة بالجي آر سي والدهانات التقليدية.",
        dateEn: "March 15, 2024",
        dateAr: "١٥ مارس ٢٠٢٤",
        authorEn: "Auckland Engineering",
        authorAr: "أوكلاند الهندسية",
        contentEn: "Villa facades in the Gulf region face extreme weather conditions, from intense heat to high humidity. Traditional solutions like GRC (Glassfibre Reinforced Concrete) or simply using paint often suffer from thermal expansion, leading to cracks and structural damage over time. Syrian and Omani stone, however, provide a robust alternative. Their high structural density inherently resists thermal expansion, safeguarding buildings against humidity damage and minimizing maintenance costs. Natural stone acts as an excellent insulator, maintaining the interior temperature and reducing the reliance on air conditioning systems.\n\nIn addition to the structural benefits, natural stone elevates the aesthetics of any villa. The variations in texture and color convey an image of luxury and durability that synthetic materials struggle to replicate. Auckland Engineering has successfully utilized Syrian stone in numerous high-end residential projects, proving it is an investment that preserves both structure and value.",
        contentAr: "تواجه الواجهات المعمارية للفيلات والقصور في منطقة الخليج تحديات مناخية قاسية، تتراوح بين درجات الحرارة الحارقة والرطوبة العالية. وغالباً ما تعاني الحلول التقليدية كالخرسانة المسلحة بالألياف الزجاجية (GRC) أو الدهانات العادية من مشكلة التمدد الحراري، مما يؤدي بمرور الوقت إلى تشققات واضحة وتدهور في المظهر الهيكلي. هنا يبرز دور الحجر السوري والعماني كبديل عصري لا يضاهى؛ فبفضل كثافتهما الهيكلية الاستثنائية ومقاومتهما الفطرية للتمدد الحراري، يشكلان درعاً واقياً يحمي المباني من أضرار الرطوبة، ويقلل من تكاليف الصيانة الدورية. كما يمتاز الحجر الطبيعي بخصائص عزل فائقة، ما يسهم في استقرار درجات الحرارة الداخلية وتقليل الاعتماد المفرط على أنظمة التكييف.\n\nبعيداً عن المزايا الهيكلية، يضفي الحجر الطبيعي لمسة من الرقي المطلق على أي فيلا. فالتنوع الغني في الملمس واللون يعكس طابعاً من الفخامة العريقة والأصالة التي يصعب على المواد الصناعية محاكاتها. في أوكلاند الهندسية، نفخر بسجلنا الحافل في تنفيذ مشاريع سكنية فاخرة باستخدام الحجر السوري، لنثبت لعملائنا أنه الاستثمار الأمثل للحفاظ على متانة البنيان ورقي الواجهة في آن واحد."
    },
    {
        id: "modern-heritage-villas",
        image: "/images/gallery/gallery-hero.jpg",
        titleEn: "Modern Heritage: Blending Omani Marble with Arches in Qatari Villas",
        titleAr: "التراث برؤية معاصرة: دمج الرخام العماني مع تصميم الأقواس في الفلل القطرية",
        excerptEn: "Explore the 2026 trend of 'Warm Modernism' combining sustainable luxury interiors with traditional CNC carved stone.",
        excerptAr: "استكشف التوجه المعماري الأبرز لعام ٢٠٢٦ \"الحداثة الدافئة\"، حيث تتناغم فخامة التصاميم الداخلية المستدامة مع دقة الحجر المنحوت بتقنية CNC.",
        dateEn: "March 10, 2024",
        dateAr: "١٠ مارس ٢٠٢٤",
        authorEn: "Auckland Design",
        authorAr: "أوكلاند للتصميم",
        contentEn: "The architectural landscape in Qatar is witnessing a significant shift towards 'Warm Modernism,' a trend poised to dominate by 2026. This approach harmoniously blends the minimalist lines of contemporary architecture with the deep-rooted cultural heritage of the region. A hallmark of this trend is the integration of Omani marble with classic Arabian arches, creating visually stunning structural statements. Using advanced CNC carved stone, we can now achieve intricate geometric patterns that pay homage to traditional craftsmanship while maintaining precision and scale.\n\nThis fusion not only achieves a luxurious aesthetic but also emphasizes sustainability. Omani marble is sourced locally, significantly reducing the carbon footprint associated with transportation. Furthermore, the material's longevity ensures a sustainable lifecycle for the building's interior and exterior elements. As we move towards more eco-conscious architectural practices, combining modern technology with sustainable materials ensures we meet future standards without sacrificing cultural identity.",
        contentAr: "يشهد المشهد المعماري في دولة قطر تحولاً نوعياً نحو أسلوب \"الحداثة الدافئة\"، وهو التوجه الذي يتوقع أن يتصدر المشهد بحلول عام ٢٠٢٦. يمزج هذا الأسلوب بتناغم آسر بين الخطوط البسيطة للعمارة المعاصرة والعمق الثقافي والتراثي لمنطقتنا. ومن أبرز تجليات هذا التوجه هو الدمج المتبصر بين الرخام العماني الأصيل والأقواس العربية الكلاسيكية، مما ينتج عنه تحف معمارية تخطف الأبصار. وبفضل تقنيات النحت والقص الثلاثي الأبعاد (CNC) المتطورة، بات بإمكاننا تنفيذ أنماط هندسية وزخرفية بالغة التعقيد، تكرم الحرفية اليدوية العريقة وتجسدها بدقة متناهية وأبعاد مثالية.\n\nلا يقتصر سحر هذا الدمج على البعد الجمالي الفاخر فحسب، بل يمتد ليرسي معايير جديدة للاستدامة. فاعتمادنا على الرخام العماني المستخرج إقليمياً يساهم في خفض البصمة الكربونية المرتبطة بعمليات النقل بشكل ملموس. علاوة على ذلك، يضمن العمر الافتراضي الطويل لهذه الخامات الطبيعية دورة حياة مستدامة للعناصر المعمارية الداخلية والخارجية. وفي ظل سعينا الدؤوب لتبني ممارسات معمارية صديقة للبيئة، نجد أن التوظيف الذكي للتكنولوجيا الحديثة مع المواد المستدامة هو السبيل الأمثل لتلبية تطلعات المستقبل، مع الحفاظ على الهوية الثقافية والتراثية التي نعتز بها."
    }
];

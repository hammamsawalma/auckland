export type MaterialSpec = {
    label: string;
    labelAr: string;
    value: string;
    valueAr: string;
};

export type Material = {
    slug: string;
    nameEn: string;
    nameAr: string;
    taglineEn: string;
    taglineAr: string;
    excerptEn: string;
    excerptAr: string;
    descriptionEn: string;
    descriptionAr: string;
    heroImage: string;
    origin: string;
    originAr: string;
    idealFor: string[];
    idealForAr: string[];
    specs: MaterialSpec[];
    useCases: { titleEn: string; titleAr: string; descEn: string; descAr: string }[];
    climateBadge: string;
    climateBadgeAr: string;
    seoKeywordsEn: string;
    seoKeywordsAr: string;
};

export const materials: Material[] = [
    {
        slug: "syrian-stone",
        nameEn: "Syrian Stone",
        nameAr: "الحجر السوري",
        taglineEn: "Qatar's #1 Facade Cladding Material",
        taglineAr: "المادة الأولى لكسوة الواجهات في قطر",
        excerptEn: "The gold standard for villa and commercial facades in Qatar — Syrian stone's exceptional density makes it the top choice for Gulf architects.",
        excerptAr: "المعيار الذهبي لواجهات الفلل والمباني التجارية في قطر — كثافة الحجر السوري الاستثنائية تجعله الخيار الأول للمعماريين في الخليج.",
        descriptionEn: "Syrian stone has been the cornerstone of luxury construction in Qatar for decades. Quarried from the mountainous regions of Syria, this sedimentary stone is prized for its exceptional structural density, which naturally resists thermal expansion — the leading cause of facade cracks in the Gulf's extreme heat. Its warm, sand-colored palette of cream, beige, and golden hues perfectly complements the Gulf architectural style, making it the material of choice for high-end villas, royal palaces, and commercial towers across Doha.\n\nAuckland imports premium-grade Syrian stone directly from vetted suppliers, offering precise CNC cutting to any dimension, honed or bush-hammered finishes, and full installation by our specialist teams.",
        descriptionAr: "يُعدّ الحجر السوري الركيزة الأساسية للبناء الفاخر في قطر منذ عقود. يُستخرج من المناطق الجبلية في سوريا، وهو حجر رسوبي تشتهر بكثافته الهيكلية الاستثنائية التي تقاوم التمدد الحراري بشكل طبيعي — السبب الرئيسي لتشققات الواجهات في حرارة الخليج الشديدة. يتناغم لون القشرة الدافئ بدرجاته الكريمية والبيجية والذهبية تماماً مع الطراز المعماري الخليجي، مما يجعله المادة المُفضَّلة للفلل الفاخرة والقصور الملكية والأبراج التجارية في الدوحة.\n\nتستورد أوكلاند الحجر السوري عالي الجودة مباشرة من موردين معتمدين، مع توفير القطع الدقيق باستخدام تقنية CNC بأي أبعاد، وإنهاء مصنفر أو مطروق، وتركيب كامل بواسطة فرقنا المتخصصة.",
        heroImage: "/images/gallery/gallery-hero.webp",
        origin: "Syria (Homs & Palmyra regions)",
        originAr: "سوريا (مناطق حمص وتدمر)",
        idealFor: ["Villa Facades", "Palace Exteriors", "Commercial Towers", "Feature Walls"],
        idealForAr: ["واجهات الفلل", "الواجهات الخارجية للقصور", "الأبراج التجارية", "الجدران المميزة"],
        specs: [
            { label: "Heat Resistance", labelAr: "مقاومة الحرارة", value: "Excellent (up to 600°C)", valueAr: "ممتازة (حتى 600 درجة مئوية)" },
            { label: "Water Absorption", labelAr: "امتصاص الماء", value: "< 0.5% (Very Low)", valueAr: "أقل من 0.5% (منخفض جداً)" },
            { label: "Compressive Strength", labelAr: "قوة الضغط", value: "120–160 MPa", valueAr: "120–160 ميغاباسكال" },
            { label: "Finish Types", labelAr: "أنواع الإنهاء", value: "Honed, Bush-hammered, Split-faced, Polished", valueAr: "مصنفر، مطروق، وجه منشور، مصقول" },
            { label: "Standard Thickness", labelAr: "السماكة القياسية", value: "2cm, 3cm, 4cm", valueAr: "2 سم، 3 سم، 4 سم" },
            { label: "Origin", labelAr: "المصدر", value: "Syria (Homs region)", valueAr: "سوريا (منطقة حمص)" },
        ],
        useCases: [
            { titleEn: "Villa Cladding", titleAr: "كسوة الفلل", descEn: "The most popular cladding choice for luxury villas in Qatar, UAE, and Saudi Arabia. Withstands Gulf heat without cracking.", descAr: "الخيار الأكثر شيوعاً لكسوة الفلل الفاخرة في قطر والإمارات والسعودية. يتحمل حرارة الخليج دون تشققات." },
            { titleEn: "Commercial Facades", titleAr: "الواجهات التجارية", descEn: "Approved for use on commercial towers by Qatar's Ministry of Municipality. Provides a timeless, prestigious appearance.", descAr: "معتمد للاستخدام على الأبراج التجارية من قِبل وزارة البلدية القطرية. يمنح مظهراً راقياً خالداً." },
            { titleEn: "Landscape & Walls", titleAr: "المناظر الطبيعية والجدران", descEn: "Ideal for garden walls, pool coping, and outdoor feature walls — UV resistant and non-slip finishes available.", descAr: "مثالي لجدران الحدائق وحواف المسابح والجدران الخارجية المميزة — متوفر بأسطح مقاومة للأشعة فوق البنفسجية وغير زلقة." },
            { titleEn: "Feature Interiors", titleAr: "الداخليات المميزة", descEn: "Used for feature walls in majlis, hotel lobbies, and reception halls, creating a warm, natural luxury atmosphere.", descAr: "يُستخدم للجدران المميزة في المجالس وأبهاء الفنادق وقاعات الاستقبال، مما يخلق أجواءً فاخرة طبيعية ودافئة." },
        ],
        climateBadge: "Certified Gulf-Climate Ready",
        climateBadgeAr: "معتمد لمناخ الخليج",
        seoKeywordsEn: "Syrian stone Qatar, Syrian stone facade Doha, stone cladding Qatar, villa facade Qatar, natural stone supplier Qatar",
        seoKeywordsAr: "حجر سوري قطر، كسوة واجهات الدوحة، موردو الحجر الطبيعي قطر",
    },
    {
        slug: "omani-marble",
        nameEn: "Omani Marble",
        nameAr: "الرخام العماني",
        taglineEn: "Premium Locally-Sourced Luxury Marble",
        taglineAr: "رخام فاخر من مصدر إقليمي متميز",
        excerptEn: "Sustainably sourced from Oman, this premium marble elevates interiors with rich veining patterns. Favoured for majlis floors and feature staircases.",
        excerptAr: "يُستخرج بشكل مستدام من عُمان، هذا الرخام الفاخر يرفع من مستوى الداخليات بأنماط تعريق غنية. مفضل لأرضيات المجالس والسلالم المميزة.",
        descriptionEn: "Omani marble is among the most sought-after natural stones in the GCC, prized for its dramatic veining patterns, warm ivory and beige tones, and exceptional polishability. Being regionally sourced from Oman's Al Hajar mountains, it carries a significantly lower carbon footprint than Italian alternatives, making it the choice of sustainability-conscious developers. It delivers the same visual opulence as European marbles at a more competitive price point.\n\nAuckland supplies Omani marble in slabs and tiles of any dimension, CNC profiled for custom arches and columns, and offers full fabrication and installation services across Qatar.",
        descriptionAr: "يُعدّ الرخام العماني من أكثر الأحجار الطبيعية طلباً في منطقة الخليج، وهو مشهور بأنماط تعريقه الدرامية ونبراته العاجية والبيجية الدافئة وقابليته الاستثنائية للتلميع. بفضل استخراجه إقليمياً من جبال الحجر في عُمان، فإنه يُخلّف بصمة كربونية أقل بكثير من البدائل الإيطالية، مما يجعله خيار المطورين المهتمين بالاستدامة. يُقدّم نفس الفخامة البصرية للرخام الأوروبي بسعر تنافسي أكثر.\n\nتوفّر أوكلاند الرخام العماني في ألواح وبلاطات بأي أبعاد، منحوت بتقنية CNC للأقواس والأعمدة المخصصة، وتقدم خدمات تصنيع وتركيب كاملة في جميع أنحاء قطر.",
        heroImage: "/images/content/stone-texture.webp",
        origin: "Oman (Al Hajar Mountains)",
        originAr: "عُمان (جبال الحجر)",
        idealFor: ["Majlis Flooring", "Hotel Lobbies", "Staircases", "Feature Columns", "Bathroom Walls"],
        idealForAr: ["أرضيات المجالس", "أبهاء الفنادق", "السلالم", "الأعمدة المميزة", "جدران الحمامات"],
        specs: [
            { label: "Heat Resistance", labelAr: "مقاومة الحرارة", value: "High (up to 400°C)", valueAr: "عالية (حتى 400 درجة مئوية)" },
            { label: "Water Absorption", labelAr: "امتصاص الماء", value: "0.15–0.5%", valueAr: "0.15–0.5%" },
            { label: "Mohs Hardness", labelAr: "صلابة موس", value: "3–4 (Suitable for interiors)", valueAr: "3–4 (مناسب للداخليات)" },
            { label: "Finish Types", labelAr: "أنواع الإنهاء", value: "High-Gloss Polished, Honed, Leather", valueAr: "مصقول ببريق عالٍ، مصنفر، جلدي" },
            { label: "Standard Thickness", labelAr: "السماكة القياسية", value: "1.8cm, 2cm, 3cm", valueAr: "1.8 سم، 2 سم، 3 سم" },
            { label: "Origin", labelAr: "المصدر", value: "Oman (Al Hajar region)", valueAr: "عُمان (منطقة الحجر)" },
        ],
        useCases: [
            { titleEn: "Majlis & Reception", titleAr: "المجلس والاستقبال", descEn: "The classic choice for Qatari majlis floors — Omani marble's warm tones pair beautifully with traditional Arabic furnishings.", descAr: "الخيار الكلاسيكي لأرضيات المجالس القطرية — يتناسق الرخام العماني الدافئ بشكل جميل مع الأثاث العربي التقليدي." },
            { titleEn: "Hotel Lobbies", titleAr: "أبهاء الفنادق", descEn: "Used in several 5-star hotels across Qatar for its ability to convey timeless luxury to arriving guests.", descAr: "يُستخدم في عدة فنادق فاخرة في قطر لقدرته على إيصال الفخامة الخالدة للضيوف القادمين." },
            { titleEn: "Custom Staircases", titleAr: "السلالم المخصصة", descEn: "CNC-profiled marble treads and risers create statement staircases. We provide full design-to-installation service.", descAr: "تخلق درجات السلالم الرخامية المنحوتة بتقنية CNC سلالم بارزة. نقدم خدمة كاملة من التصميم إلى التركيب." },
            { titleEn: "Feature Columns", titleAr: "الأعمدة المميزة", descEn: "Carved and turned Omani marble columns are an iconic element of Qatari luxury — we specialize in full column fabrication.", descAr: "الأعمدة الرخامية العمانية المنحوتة عنصر أيقوني من عناصر الفخامة القطرية — نتخصص في تصنيع الأعمدة الكاملة." },
        ],
        climateBadge: "Gulf Interior Specialist",
        climateBadgeAr: "متخصص في الداخليات الخليجية",
        seoKeywordsEn: "Omani marble Qatar, marble supplier Doha, luxury marble Qatar, majlis flooring Qatar, marble installation Qatar",
        seoKeywordsAr: "رخام عماني قطر، موردو الرخام الدوحة، رخام فاخر قطر",
    },
    {
        slug: "limestone",
        nameEn: "Limestone",
        nameAr: "الحجر الجيري",
        taglineEn: "Versatile, Affordable, Gulf-Proven",
        taglineAr: "متعدد الاستخدامات، بأسعار مناسبة، مُجرَّب في الخليج",
        excerptEn: "Jordan's finest limestone — a budget-conscious choice for large-area cladding and pool surround that doesn't compromise on quality.",
        excerptAr: "أجود الحجر الجيري الأردني — خيار اقتصادي لكسوة المساحات الكبيرة ومحيط المسابح دون المساس بالجودة.",
        descriptionEn: "Jordanian limestone is one of the most widely used natural stones in Qatar and the broader Middle East, valued for its consistent cream-to-ivory tones, ease of cutting, and excellent value. Unlike marble, limestone's non-slip surface when honed makes it ideal for outdoor areas, pool surrounds, and garden pathways in Qatar's villas and compounds. Its relatively porous nature requires sealing for wet areas, which Auckland handles as part of every installation.\n\nWe source our limestone directly from Jordan's premier quarries, offering consistent color batches and the full range of finishes.",
        descriptionAr: "يُعدّ الحجر الجيري الأردني من أكثر الأحجار الطبيعية استخداماً في قطر وأوسع الشرق الأوسط، ويُقدَّر لدرجاته الكريمية والعاجية المتسقة وسهولة قطعه وقيمته الممتازة. على خلاف الرخام، يجعله سطحه غير الزلق عند التصنيف مثالياً للمناطق الخارجية ومحيط المسابح ومسارات الحدائق في فلل قطر ومجمعاتها السكنية. تستوجب طبيعته شبه المسامية التلميع للمناطق الرطبة، وهو ما تتولى أوكلاند تنفيذه كجزء من كل عملية تركيب.\n\nنستورد الحجر الجيري مباشرة من أفضل المحاجر الأردنية، ونقدم دفعات ألوان متسقة ومجموعة كاملة من الإنهاءات.",
        heroImage: "/images/gallery/gallery-hero.webp",
        origin: "Jordan",
        originAr: "الأردن",
        idealFor: ["Pool Surrounds", "Garden Paths", "Compound Walls", "Budget Facades", "Outdoor Flooring"],
        idealForAr: ["محيط المسابح", "مسارات الحدائق", "جدران المجمعات", "الواجهات الاقتصادية", "الأرضيات الخارجية"],
        specs: [
            { label: "Heat Resistance", labelAr: "مقاومة الحرارة", value: "Good (up to 300°C)", valueAr: "جيدة (حتى 300 درجة مئوية)" },
            { label: "Water Absorption", labelAr: "امتصاص الماء", value: "1–3% (Sealing Required)", valueAr: "1–3% (يتطلب تلميعاً)" },
            { label: "Slip Resistance", labelAr: "مقاومة الانزلاق", value: "Excellent (Honed finish)", valueAr: "ممتازة (إنهاء مصنفر)" },
            { label: "Finish Types", labelAr: "أنواع الإنهاء", value: "Honed, Brushed, Antiqued, Tumbled", valueAr: "مصنفر، مفروش، منقوش بالحمض، مُدوَّر" },
            { label: "Standard Thickness", labelAr: "السماكة القياسية", value: "2cm, 3cm", valueAr: "2 سم، 3 سم" },
            { label: "Origin", labelAr: "المصدر", value: "Jordan", valueAr: "الأردن" },
        ],
        useCases: [
            { titleEn: "Pool Surrounds", titleAr: "محيط المسابح", descEn: "Honed limestone's natural slip resistance makes it the safest choice for pool decks — used in hundreds of Qatari compounds.", descAr: "مقاومة الانزلاق الطبيعية للحجر الجيري المصنفر تجعله الخيار الأأمن لأسطح المسابح — مستخدم في مئات من المجمعات القطرية." },
            { titleEn: "Outdoor Flooring", titleAr: "الأرضيات الخارجية", descEn: "Durable under foot traffic and consistent color make limestone the go-to for villa gardens and outdoor entertainment areas.", descAr: "المتانة تحت حركة الأقدام واللون المتسق يجعلان الحجر الجيري الخيار المعتاد لحدائق الفلل ومناطق الترفيه الخارجية." },
            { titleEn: "Compound Walls", titleAr: "جدران المجمعات", descEn: "Cost-effective and visually appealing boundary walls and garden feature walls for residential compounds across Qatar.", descAr: "جدران حدودية اقتصادية وجذابة بصرياً وجدران مميزة للحدائق للمجمعات السكنية في جميع أنحاء قطر." },
            { titleEn: "Affordable Facades", titleAr: "الواجهات الاقتصادية", descEn: "For projects with tighter budgets, limestone delivers a natural stone facade aesthetic at a significantly lower cost.", descAr: "للمشاريع ذات الميزانيات المحدودة، يوفر الحجر الجيري جمالية واجهة حجر طبيعي بتكلفة أقل بكثير." },
        ],
        climateBadge: "Outdoor & Pool Specialist",
        climateBadgeAr: "متخصص خارجي ومسابح",
        seoKeywordsEn: "limestone Qatar, Jordanian limestone Doha, pool coping Qatar, outdoor stone Qatar, natural stone supplier Qatar",
        seoKeywordsAr: "حجر جيري قطر، حجر جيري أردني الدوحة، كسوة أرضيات خارجية قطر",
    },
    {
        slug: "grc",
        nameEn: "GRC Panels",
        nameAr: "ألواح الـ GRC",
        taglineEn: "Lightweight Precision for Complex Architectures",
        taglineAr: "خفة مع دقة لا مثيل لها للهياكل المعمارية المعقدة",
        excerptEn: "Glass Reinforced Concrete — engineered for intricate Islamic geometric patterns, lightweight structural cladding, and budget-conscious large-facade projects.",
        excerptAr: "الخرسانة المسلحة بالألياف الزجاجية — مهندسة للأنماط الهندسية الإسلامية المعقدة وكسوة هياكل خفيفة الوزن والمشاريع الكبيرة ذات الميزانيات المناسبة.",
        descriptionEn: "GRC (Glass Reinforced Concrete) is not a competitor to natural stone — it is a complementary engineering solution for specific architectural challenges. When a facade requires complex geometric latticework, deep-relief Islamic patterns, or lightweight cladding for structures that can't support stone's weight, GRC is the engineered answer. Auckland fabricates custom GRC panels in our factory using precision moulds, achieving intricate patterns that would cost 3–5x more in carved natural stone.\n\nGRC is particularly favored for mashrabiya screens, ornamental parapet elements, and lightweight infill panels on high-rise structures.",
        descriptionAr: "الـ GRC (الخرسانة المسلحة بالألياف الزجاجية) ليس منافساً للحجر الطبيعي — بل هو حل هندسي تكميلي لتحديات معمارية محددة. عندما تتطلب الواجهة شبكات هندسية معقدة أو أنماطاً إسلامية بارزة عميقة أو كسوة خفيفة الوزن لهياكل لا تتحمل ثقل الحجر، يكون الـ GRC هو الحل الهندسي المطلوب. تُصنّع أوكلاند ألواح GRC مخصصة في مصنعنا باستخدام قوالب دقيقة، محققةً أنماطاً معقدة تكلف 3-5 أضعاف ما لو طُفّذت في حجر طبيعي منحوت.\n\nيُفضَّل الـ GRC بشكل خاص لشاشات المشربية وعناصر الشرفة الزخرفية والألواح الخفيفة على المنشآت المرتفعة.",
        heroImage: "/images/gallery/gallery-hero.webp",
        origin: "Factory-Fabricated in Qatar",
        originAr: "مُصنَّع في قطر",
        idealFor: ["Mashrabiya Screens", "Islamic Geometric Patterns", "High-Rise Cladding", "Ornamental Parapets"],
        idealForAr: ["شاشات المشربية", "الأنماط الهندسية الإسلامية", "كسوة المباني المرتفعة", "الشرفات الزخرفية"],
        specs: [
            { label: "Weight", labelAr: "الوزن", value: "18–25 kg/m² (vs. 60+ for stone)", valueAr: "18–25 كغم/م² (مقابل 60+ للحجر)" },
            { label: "Thermal Resistance", labelAr: "مقاومة الحرارة", value: "Good (Requires UV-resistant coating)", valueAr: "جيدة (يتطلب طلاء مقاوم للأشعة فوق البنفسجية)" },
            { label: "Pattern Complexity", labelAr: "تعقيد النمط", value: "Unlimited (CNC moulds)", valueAr: "غير محدود (قوالب CNC)" },
            { label: "Finish Types", labelAr: "أنواع الإنهاء", value: "Painted, Stone-effect, Natural Finish", valueAr: "مطلي، بتأثير حجري، إنهاء طبيعي" },
            { label: "Panel Size", labelAr: "حجم اللوح", value: "Custom (up to 4m x 1.2m)", valueAr: "مخصص (حتى 4م × 1.2م)" },
            { label: "Lead Time", labelAr: "وقت التنفيذ", value: "4–8 weeks from mould approval", valueAr: "4–8 أسابيع من الموافقة على القوالب" },
        ],
        useCases: [
            { titleEn: "Mashrabiya Screens", titleAr: "شاشات المشربية", descEn: "Customized Islamic lattice screens for balconies, windows, and external shading — casting beautiful shadow patterns inside.", descAr: "شاشات شبكية إسلامية مخصصة للشرفات والنوافذ والتظليل الخارجي — تُلقي أنماط ظلال جميلة في الداخل." },
            { titleEn: "High-Rise Facade Panels", titleAr: "ألواح واجهات المباني المرتفعة", descEn: "Where structural load limits prevent natural stone use — GRC delivers the stone aesthetic at 70% less weight.", descAr: "حيث تمنع قيود الحمل الهيكلي استخدام الحجر الطبيعي — يُقدّم الـ GRC الجماليات الحجرية بوزن أقل بنسبة 70%." },
            { titleEn: "Ornamental Elements", titleAr: "العناصر الزخرفية", descEn: "Cornices, column capitals, arched details, and decorative parapets — fabricated to any drawing with precision.", descAr: "كرانيش وتيجان أعمدة وتفاصيل قوسية وشرفات زخرفية — مُصنَّعة وفق أي رسم بدقة متناهية." },
            { titleEn: "Budget Large Facades", titleAr: "الواجهات الكبيرة الاقتصادية", descEn: "When a full stone facade is cost-prohibitive, GRC panels achieve a similar premium look at a fraction of the cost.", descAr: "عندما تكون واجهة الحجر الكاملة مكلفة للغاية، تحقق ألواح GRC مظهراً مماثلاً بجزء من التكلفة." },
        ],
        climateBadge: "Complex Pattern Specialist",
        climateBadgeAr: "متخصص في الأنماط المعقدة",
        seoKeywordsEn: "GRC panels Qatar, GRC cladding Doha, mashrabiya Qatar, glass reinforced concrete Qatar, GRC manufacturer Qatar",
        seoKeywordsAr: "ألواح GRC قطر، كسوة GRC الدوحة، مشربية قطر، مصنع GRC قطر",
    },
];

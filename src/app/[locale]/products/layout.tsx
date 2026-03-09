import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr
            ? 'أحجار طبيعية وألواح GRC | أوكلاند للبناء والتطوير قطر'
            : 'Natural Stone & GRC Materials | Auckland Construction Qatar',
        description: isAr
            ? 'اكتشف مجموعتنا الكاملة من الأحجار الطبيعية الفاخرة: الحجر السوري، الرخام العماني، الحجر الجيري، وألواح GRC — نوردها ونركبها في جميع أنحاء قطر.'
            : 'Explore our full range of premium natural stones: Syrian Stone, Omani Marble, Limestone, and GRC panels — supplied and installed across Qatar.',
        keywords: isAr
            ? 'مورد حجر طبيعي قطر، حجر سوري، رخام عماني، ألواح GRC قطر، كسوة حجرية الدوحة'
            : 'natural stone supplier Qatar, Syrian stone, Omani marble, GRC panels Qatar, stone cladding Doha',
        alternates: {
            canonical: `${BASE_URL}/${locale}/products`,
            languages: {
                'en': `${BASE_URL}/en/products`,
                'ar': `${BASE_URL}/ar/products`,
            },
        },
        openGraph: {
            title: isAr
                ? 'مكتبة الأحجار الطبيعية وألواح GRC — أوكلاند للبناء والتطوير قطر'
                : 'Natural Stone & GRC Material Library — Auckland Construction Qatar',
            description: isAr
                ? 'حجر سوري فاخر، رخام عماني، حجر جيري وألواح GRC — مستوردة ومصنعة ومركبة في قطر.'
                : 'Premium Syrian Stone, Omani Marble, Limestone and GRC panels — imported, fabricated & installed in Qatar.',
            images: [{ url: `${BASE_URL}/v2_images/gallery/gallery-hero.webp`, width: 1200, height: 630 }],
        },
    };
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

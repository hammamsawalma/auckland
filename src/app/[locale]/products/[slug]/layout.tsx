import type { Metadata } from 'next';
import { materials } from '@/lib/materials-data';
import { notFound } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

type Props = {
    params: Promise<{ locale: string; slug: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const material = materials.find((m) => m.slug === slug);
    if (!material) return notFound();

    const isAr = locale === 'ar';
    const title = isAr
        ? `${material.nameAr} | أوكلاند للبناء والتطوير قطر`
        : `${material.nameEn} Supplier Qatar | Auckland Construction`;
    const description = isAr ? material.excerptAr : material.excerptEn;
    const keywords = isAr ? material.seoKeywordsAr : material.seoKeywordsEn;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `${BASE_URL}/${locale}/products/${slug}`,
            languages: {
                'en': `${BASE_URL}/en/products/${slug}`,
                'ar': `${BASE_URL}/ar/products/${slug}`,
            },
        },
        openGraph: {
            title,
            description,
            images: [{ url: `${BASE_URL}${material.heroImage}`, width: 1200, height: 630, alt: material.nameEn }],
        },
    };
}

export default function MaterialLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

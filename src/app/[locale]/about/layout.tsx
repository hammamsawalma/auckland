import { getTranslations } from "next-intl/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'About' });
    const url = `${BASE_URL}/${locale}/about`;
    return {
        title: t('title'),
        description: t('subtitle'),
        alternates: {
            canonical: url,
            languages: {
                'en': `${BASE_URL}/en/about`,
                'ar': `${BASE_URL}/ar/about`,
            },
        },
        openGraph: {
            title: t('title'),
            description: t('subtitle'),
            url,
            images: [{ url: '/images/gallery/gallery-hero.jpg', width: 1200, height: 630, alt: t('title') }],
        },
    };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

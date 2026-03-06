import { getTranslations } from "next-intl/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Calculator" });
    const url = `${BASE_URL}/${locale}/calculator`;
    return {
        title: t("title"),
        description: t("subtitle"),
        alternates: {
            canonical: url,
            languages: {
                'en': `${BASE_URL}/en/calculator`,
                'ar': `${BASE_URL}/ar/calculator`,
            },
        },
        openGraph: {
            title: t("title"),
            description: t("subtitle"),
            url,
            images: [{ url: '/v2_images/gallery/gallery-hero.webp', width: 1200, height: 630, alt: t("title") }],
        },
    };
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

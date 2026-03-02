import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Gallery' });
    return {
        title: `${t('title')} | Auckland Construction Development`,
        description: t('subtitle')
    };
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

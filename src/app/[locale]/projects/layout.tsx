import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });
    return {
        title: t('title'),
        description: t('subtitle')
    };
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Calculator" });
    return {
        title: t("title"),
        description: t("subtitle")
    };
}

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import { useTranslations } from "next-intl";
import { FacadeCalculator } from "@/components/ui/FacadeCalculator";

export default function CalculatorPage() {
    const t = useTranslations("Calculator");

    return (
        <main className="min-h-screen bg-app-dark pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">{t("title")}</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        {t("subtitle")}
                    </p>
                </div>

                <FacadeCalculator />
            </div>
        </main>
    );
}

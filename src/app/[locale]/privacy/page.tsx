import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: locale === "ar" ? "سياسة الخصوصية | أوكلاند" : "Privacy Policy | Auckland",
        description:
            locale === "ar"
                ? "سياسة الخصوصية وحماية البيانات لشركة أوكلاند للإنشاء."
                : "Privacy Policy and data protection information for Auckland Construction.",
    };
}

export default async function PrivacyPage({ params }: Props) {
    const { locale } = await params;
    const isAr = locale === "ar";

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 py-24 pt-40 bg-app-light">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black text-app-dark mb-10 uppercase tracking-tight">
                        {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
                    </h1>

                    <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-black/5 space-y-8 text-app-dark/80 font-light leading-relaxed text-base">

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "١. المعلومات التي نجمعها" : "1. Information We Collect"}
                            </h2>
                            <p>
                                {isAr
                                    ? "عند تواصلك معنا عبر نموذج الاتصال، نقوم بجمع اسمك وعنوان بريدك الإلكتروني وتفاصيل مشروعك. لا نجمع أي بيانات حساسة."
                                    : "When you contact us through our contact form, we collect your name, email address, and project details. We do not collect any sensitive personal data."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٢. كيف نستخدم معلوماتك" : "2. How We Use Your Information"}
                            </h2>
                            <p>
                                {isAr
                                    ? "تُستخدم المعلومات المُقدَّمة حصراً للرد على استفسارك وتقديم عروض الأسعار المناسبة. لن نشارك بياناتك مع أي طرف ثالث."
                                    : "Information you submit is used solely to respond to your enquiry and provide relevant quotations. We will never share your data with third parties."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٣. الاحتفاظ بالبيانات" : "3. Data Retention"}
                            </h2>
                            <p>
                                {isAr
                                    ? "نحتفظ بمعلوماتك فقط طالما كان ذلك ضرورياً للغرض الذي جُمعت من أجله، أو وفق ما يُقتضى قانوناً."
                                    : "We retain your information only for as long as necessary to fulfil the purpose it was collected for, or as required by law."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٤. حقوقك" : "4. Your Rights"}
                            </h2>
                            <p>
                                {isAr
                                    ? "يحق لك طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها في أي وقت. يُرجى التواصل معنا عبر: "
                                    : "You have the right to request access, correction, or deletion of your personal data at any time. Please contact us at: "}
                                <a href="mailto:info@aucklandcd.com" className="text-app-acc hover:underline font-medium">
                                    info@aucklandcd.com
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٥. اتصل بنا" : "5. Contact"}
                            </h2>
                            <p>
                                {isAr
                                    ? "لأي استفسارات تتعلق بهذه السياسة، يُرجى التواصل معنا عبر صفحة الاتصال."
                                    : "For any questions regarding this policy, please reach out via our Contact page."}
                            </p>
                        </section>

                        <p className="text-xs text-app-dark/40 pt-4 border-t border-black/5">
                            {isAr ? "آخر تحديث: مارس ٢٠٢٦" : "Last updated: March 2026"}
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

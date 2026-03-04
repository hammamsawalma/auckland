import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === "ar";
    return {
        title: isAr ? "شروط الخدمة | أوكلاند" : "Terms of Service | Auckland",
    };
}

export default async function TermsPage({ params }: Props) {
    const { locale } = await params;
    const isAr = locale === "ar";
    const t = await getTranslations({ locale, namespace: "Footer" });

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 bg-app-light pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-black text-app-dark mb-2 uppercase tracking-tight">
                        {t("terms")}
                    </h1>
                    <p className="text-app-dark/40 text-sm mb-10">
                        {isAr ? "آخر تحديث: مارس 2025" : "Last updated: March 2025"}
                    </p>

                    <div className="space-y-8 text-app-dark/80 leading-relaxed">

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "١. قبول الشروط" : "1. Acceptance of Terms"}
                            </h2>
                            <p>
                                {isAr
                                    ? "باستخدامك لموقع أوكلاند للمقاولات والتعمير، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، يُرجى عدم استخدام الموقع."
                                    : "By accessing or using the Auckland Construction & Development website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our site."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٢. استخدام الموقع" : "2. Use of the Website"}
                            </h2>
                            <p>
                                {isAr
                                    ? "يُتاح هذا الموقع لأغراض إعلامية وتجارية مشروعة فقط. يُحظر استخدامه لأي غرض غير قانوني أو لنشر محتوى مسيء أو مضلل."
                                    : "This website is provided for lawful informational and commercial purposes only. You may not use it for any unlawful purpose or to transmit harmful, misleading, or offensive content."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٣. الملكية الفكرية" : "3. Intellectual Property"}
                            </h2>
                            <p>
                                {isAr
                                    ? "جميع المحتويات الواردة في هذا الموقع — بما تشمل الصور والنصوص والشعارات والتصاميم — هي ملك حصري لشركة أوكلاند للمقاولات والتعمير ومحمية بموجب قوانين حقوق النشر المعمول بها."
                                    : "All content on this website — including images, text, logos, and designs — is the exclusive property of Auckland Construction & Development and is protected by applicable copyright laws."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٤. إخلاء المسؤولية" : "4. Disclaimer"}
                            </h2>
                            <p>
                                {isAr
                                    ? "تُقدَّم المعلومات الواردة في هذا الموقع 'كما هي' دون أي ضمانات صريحة أو ضمنية. لا تتحمل الشركة المسؤولية عن أي أضرار ناتجة عن استخدام الموقع أو الاعتماد على محتواه."
                                    : "The information on this website is provided 'as is' without warranties of any kind. Auckland Construction & Development is not liable for any damages arising from the use of, or reliance on, this site or its content."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٥. التغييرات على الشروط" : "5. Changes to Terms"}
                            </h2>
                            <p>
                                {isAr
                                    ? "تحتفظ الشركة بحق تعديل هذه الشروط في أي وقت. يُعدّ استمرارك في استخدام الموقع بعد أي تعديل قبولًا ضمنيًا للشروط المحدّثة."
                                    : "We reserve the right to modify these Terms of Service at any time. Continued use of the website after any changes constitutes your acceptance of the updated terms."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-app-dark mb-3">
                                {isAr ? "٦. التواصل معنا" : "6. Contact Us"}
                            </h2>
                            <p>
                                {isAr
                                    ? "لأي استفسارات تتعلق بهذه الشروط، يُرجى التواصل معنا عبر: "
                                    : "For any questions regarding these Terms of Service, please contact us at: "}
                                <a href="mailto:info@aucklandcd.com" className="text-app-acc hover:underline font-medium">
                                    info@aucklandcd.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

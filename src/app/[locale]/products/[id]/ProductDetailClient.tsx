"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Ruler } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function ProductDetailClient({ product }: { product: { name: string, type: string } }) {
    const t = useTranslations("ProductDetail");

    return (
        <div className="flex flex-col min-h-screen bg-app-light/30">
            <Navbar />

            <main className="flex-1 pb-24">
                <div className="container mx-auto px-4 max-w-6xl mt-8">
                    <Link href="/products" className="inline-flex items-center text-sm font-semibold text-app-dark/60 hover:text-app-acc transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2 rtl:hidden" />
                        <ArrowLeft className="w-4 h-4 ml-2 hidden rtl:block rotate-180" />
                        {t("back")}
                    </Link>

                    <div className="bg-white rounded-2xl shadow-sm border border-app-dark/5 overflow-hidden flex flex-col md:flex-row">

                        {/* Simulated Product Texture/Image Side */}
                        <div className="w-full md:w-1/2 h-[400px] md:h-auto bg-app-dark/5 relative flex items-center justify-center p-12">
                            <div className="absolute inset-0 opacity-20 bg-[url('/images/gallery/gallery-hero.jpg')] bg-cover mix-blend-overlay"></div>
                            <div className="text-center relative z-10 w-full aspect-square max-w-md rounded-full border-4 border-white/50 bg-app-dark/5 shadow-inner flex items-center justify-center backdrop-blur-sm">
                                <span className="text-2xl opacity-40 font-bold uppercase tracking-widest text-app-dark/50 text-center px-4">{t("visualizer")}</span>
                            </div>
                        </div>

                        {/* Product Details Side */}
                        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                            <div className="inline-block px-3 py-1 bg-app-acc/10 text-app-acc text-xs font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
                                {product.type === "granite" ? t("granite") : t("marble")}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-app-dark mb-4 capitalize">
                                {product.name}
                            </h1>

                            <p className="text-lg text-app-dark/60 leading-relaxed mb-8">
                                {product.type === "granite" ? t("descGranite") : t("descMarble")}
                            </p>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                                <div>
                                    <h4 className="text-sm font-bold text-app-dark/50 tracking-wider uppercase mb-2 flex items-center gap-2">
                                        <Ruler className="w-4 h-4" /> {t("thickness")}
                                    </h4>
                                    <p className="font-medium text-app-dark">20mm, 30mm</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-app-dark/50 tracking-wider uppercase mb-2 flex items-center gap-2">
                                        <Check className="w-4 h-4" /> {t("finishes")}
                                    </h4>
                                    <p className="font-medium text-app-dark">Polished, Honed</p>
                                </div>
                            </div>

                            <div className="mt-auto pt-8 border-t border-app-dark/10">
                                <Link href="/contact">
                                    <Button size="lg" className="w-full h-14 text-base bg-app-dark hover:bg-app-acc transition-colors">
                                        {t("inquire")}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

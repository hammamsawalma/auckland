"use client";

import { Link } from "@/i18n/routing";
import { MapPin, Mail, Phone } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export function Footer() {
    const tNav = useTranslations("Navigation");
    const tFoot = useTranslations("Footer");
    const activeLocale = useLocale();

    return (
        <footer className="relative bg-[#121212] text-white pt-20 pb-12 overflow-hidden">

            {/* Decorative Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-app-acc/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:pr-8">
                        <Link href="/" aria-label="Auckland Homepage" className="flex flex-col group inline-block gap-3">
                            <div className="relative w-14 h-14">
                                <Image
                                    src="/images/acd-icon.png"
                                    alt="Auckland Construction Logo"
                                    fill
                                    className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className={(activeLocale === 'ar' ? "font-arabic tracking-normal text-3xl " : "font-heading tracking-widest text-3xl ") + "font-black leading-none text-white group-hover:text-app-acc transition-colors"}>
                                    {tFoot("brandName")}
                                </span>
                                <span className={(activeLocale === 'ar' ? "font-arabic tracking-normal text-xs " : "font-sans tracking-[0.3em] uppercase text-[10px] ") + "text-white/70 mt-2"}>
                                    {tFoot("brandSub")}
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-white/70 leading-relaxed font-light">
                            {tFoot("description")}
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-lg text-white tracking-wider uppercase">{tFoot("quickLinks")}</h3>
                        <div className="flex flex-col gap-3">
                            {["home", "about", "projects", "products", "calculator", "blog", "contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "home" ? "/" : `/${item}`}
                                    className="text-sm text-white/70 hover:text-app-acc transition-colors w-fit flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-app-acc/0 group-hover:bg-app-acc transition-colors"></span>
                                    {tNav(item as Parameters<typeof tNav>[0])}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-lg text-white tracking-wider uppercase">{tFoot("contactInfo")}</h3>
                        <div className="flex flex-col gap-4 text-sm text-white/70">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-app-acc shrink-0" />
                                <span className="pt-0.5 leading-tight" dir="auto">
                                    {tFoot("address").split("\n").map((line: string, i: number, arr: string[]) => (
                                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                                    ))}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-app-acc shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+97466980665" className="hover:text-app-acc transition-colors" dir="ltr">+974 6698 0665</a>
                                    <a href="tel:+97433546826" className="hover:text-app-acc transition-colors" dir="ltr">+974 3354 6826</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-app-acc shrink-0" />
                                <a href="mailto:info@aucklandcd.com" className="hover:text-app-acc transition-colors">info@aucklandcd.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact / WhatsApp Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-lg text-white tracking-wider uppercase">{tFoot("followUs")}</h3>
                        <a
                            href="https://wa.me/97466980665"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm transition-colors w-fit"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.85L.057 23.571a.5.5 0 0 0 .61.666l5.953-1.56A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.371l-.36-.214-3.733.979.995-3.634-.234-.374A9.867 9.867 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
                            </svg>
                            WhatsApp
                        </a>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="text-xs text-white/70 text-center leading-relaxed">
                                {tFoot("partnerMsg")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust + Review Strip */}
            <div className="container mx-auto px-4 max-w-6xl relative z-20 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4 py-5 px-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50">
                        <span className="text-white/70 font-bold text-sm">{activeLocale === 'ar' ? 'مصادر الاستيراد:' : 'Sourced from:'}</span>
                        <span>🇸🇾 {activeLocale === 'ar' ? 'سوريا' : 'Syria'}</span>
                        <span>•</span>
                        <span>🇴🇲 {activeLocale === 'ar' ? 'عُمان' : 'Oman'}</span>
                        <span>•</span>
                        <span>🇯🇴 {activeLocale === 'ar' ? 'الأردن' : 'Jordan'}</span>
                        <span>•</span>
                        <span>🇮🇹 {activeLocale === 'ar' ? 'إيطاليا' : 'Italy'}</span>
                        <span>•</span>
                        <span>🇵🇹 {activeLocale === 'ar' ? 'البرتغال' : 'Portugal'}</span>
                    </div>
                    <Link href="/reviews" className="text-xs text-app-acc hover:text-white transition-colors font-bold flex items-center gap-1.5 shrink-0">
                        ⭐ {activeLocale === 'ar' ? 'قيّمنا على Google' : 'Rate us on Google'}
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 max-w-6xl relative z-20">
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/70 font-light flex items-center gap-1">
                        &copy; {new Date().getFullYear()} {tFoot("copyright")} {tFoot("rights")}
                    </p>
                    <div className="flex items-center gap-6 text-xs text-white/70 font-light">
                        <Link href="/privacy" className="hover:text-white transition-colors">{tFoot("privacy")}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{tFoot("terms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

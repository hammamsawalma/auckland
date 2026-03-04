"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Globe } from "lucide-react";

export function Navbar() {
    const t = useTranslations("Navigation");
    const tFoot = useTranslations("Footer");
    const activeLocale = useLocale();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex items-start justify-center transition-all duration-500 ${scrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}
        >
            <div
                className={`flex items-center justify-between lg:gap-2 xl:gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
                    ? 'w-full max-w-[72rem] h-16 bg-[#171717]/95 backdrop-blur-md rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] px-3 lg:px-4 xl:px-6 overflow-hidden'
                    : 'w-full w-full h-24 bg-gradient-to-b from-black/50 to-transparent px-5 lg:px-12'
                    }`}
            >
                {/* Logo Area */}
                <Link href="/" aria-label="Auckland Homepage" className="flex flex-row items-center lg:gap-2 xl:gap-3 group shrink-0">
                    <div className="relative w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 shrink-0">
                        <Image
                            src="/images/acd-icon.png"
                            alt="Auckland Construction Logo"
                            fill
                            className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>
                    <div className="flex flex-col border-s border-white/20 ps-2 xl:ps-3">
                        <span className={(activeLocale === 'ar' ? "font-arabic tracking-normal text-xl " : "font-heading lg:tracking-wider xl:tracking-widest lg:text-lg xl:text-xl ") + "font-bold leading-none text-white group-hover:text-app-acc transition-colors drop-shadow-md"}>
                            {tFoot("brandName")}
                        </span>
                        <span className={(activeLocale === 'ar' ? "font-arabic tracking-normal " : "font-sans lg:tracking-wider xl:tracking-widest uppercase ") + `text-[8px] md:text-[9px] xl:text-[10px] mt-1 text-white/70 drop-shadow-md transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 hidden md:block md:opacity-100 md:h-auto' : 'opacity-100 hidden md:block'}`}>
                            {tFoot("brandSub")}
                        </span>
                    </div>
                </Link>

                {/* Main Navigation */}
                <nav className="hidden lg:flex items-center justify-center lg:gap-2 xl:gap-6 whitespace-nowrap shrink-0">
                    {["home", "about", "projects", "calculator", "blog"].map((item) => (
                        <Link
                            key={item}
                            href={item === "home" ? "/" : `/${item}`}
                            className={(activeLocale === 'ar' ? "font-arabic tracking-normal text-sm lg:text-base " : "lg:text-[9px] xl:text-[13px] lg:tracking-wide xl:tracking-[0.15em] ") + `whitespace-nowrap font-bold uppercase transition-colors hover:text-app-acc ${scrolled ? 'text-white/90 hover:text-white' : 'text-white drop-shadow-md'
                                }`}
                        >
                            {t(item as Parameters<typeof t>[0])}
                        </Link>
                    ))}

                    {/* Line Separator */}
                    <div className="h-4 w-[1px] bg-white/20 mx-1 md:mx-2 shrink-0" />

                    {/* Dynamic Language Toggle */}
                    <div className="flex items-center shrink-0">
                        {activeLocale === 'en' ? (
                            <Link href="/" locale="ar" className={`flex items-center gap-1.5 hover:text-app-acc transition-colors ${scrolled ? 'text-white/90' : 'text-white drop-shadow-md'}`}>
                                <Globe className="w-3 h-3 xl:w-4 xl:h-4" />
                                <span className="lg:text-[9px] xl:text-xs font-bold font-arabic hidden md:inline-block">عربي</span>
                            </Link>
                        ) : (
                            <Link href="/" locale="en" className={`flex items-center gap-1.5 hover:text-app-acc transition-colors ${scrolled ? 'text-white/90' : 'text-white drop-shadow-md'}`}>
                                <Globe className="w-3 h-3 xl:w-4 xl:h-4" />
                                <span className="text-[9px] xl:text-[11px] font-bold lg:tracking-wide xl:tracking-widest hidden md:inline-block">EN</span>
                            </Link>
                        )}
                    </div>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center justify-end lg:gap-2 md:gap-4 shrink-0">
                    {/* Mobile Dynamic Language Toggle */}
                    <div className="flex lg:hidden items-center">
                        {activeLocale === 'en' ? (
                            <Link href="/" locale="ar" className={`flex items-center gap-1.5 hover:text-app-acc transition-colors ${scrolled ? 'text-white/90' : 'text-white drop-shadow-md'}`}>
                                <Globe className="w-4 h-4" />
                                <span className="text-xs font-bold font-arabic hidden md:inline-block">عربي</span>
                            </Link>
                        ) : (
                            <Link href="/" locale="en" className={`flex items-center gap-1.5 hover:text-app-acc transition-colors ${scrolled ? 'text-white/90' : 'text-white drop-shadow-md'}`}>
                                <Globe className="w-4 h-4" />
                                <span className="text-[10px] font-bold tracking-widest hidden md:inline-block">EN</span>
                            </Link>
                        )}
                    </div>
                    <Link
                        href="/contact"
                        className={(activeLocale === 'ar' ? "font-arabic tracking-normal text-sm lg:text-base " : "lg:tracking-wider xl:tracking-[0.15em] lg:text-[9px] xl:text-[12px] ") + `hidden lg:inline-flex items-center justify-center font-bold uppercase transition-all duration-300 hover:scale-105 shrink-0 ${scrolled
                            ? "bg-app-acc text-app-dark rounded-full shadow-[0_0_15px_rgba(202,176,120,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-white h-7 xl:h-9 px-3 xl:px-6 m-1"
                            : "bg-white text-app-dark rounded-full hover:bg-white/90 shadow-lg h-9 xl:h-11 px-4 xl:px-7"
                            }`}
                    >
                        {t("contact")}
                    </Link>
                </div>
            </div>
        </header>
    );
}

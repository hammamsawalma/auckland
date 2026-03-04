"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Globe } from "lucide-react";

export function Navbar() {
    const t = useTranslations("Navigation");
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
                className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${scrolled
                    ? 'w-full max-w-6xl h-16 bg-[#171717]/95 backdrop-blur-md rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] px-6'
                    : 'w-full w-full h-24 bg-gradient-to-b from-black/50 to-transparent px-6 lg:px-12'
                    }`}
            >
                {/* Logo Area */}
                <Link href="/" aria-label="Auckland Homepage" className="flex flex-row items-center gap-3 group shrink-0">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
                        <Image
                            src="/images/acd-icon.png"
                            alt="Auckland Construction Logo"
                            fill
                            className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>
                    <div className="flex flex-col border-l border-white/20 pl-3">
                        <span className="font-heading font-bold text-lg md:text-xl leading-none text-white group-hover:text-app-acc transition-colors drop-shadow-md tracking-wider">
                            AUCKLAND
                        </span>
                        <span className={`font-sans text-[8px] md:text-[10px] tracking-widest mt-1 uppercase text-white/70 drop-shadow-md transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 hidden md:block md:opacity-100 md:h-auto' : 'opacity-100 hidden md:block'}`}>
                            Construction Development
                        </span>
                    </div>
                </Link>

                {/* Main Navigation */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
                    {["home", "about", "projects", "calculator", "blog"].map((item) => (
                        <Link
                            key={item}
                            href={item === "home" ? "/" : `/${item}`}
                            className={`text-[13px] font-bold tracking-widest uppercase transition-colors hover:text-app-acc ${scrolled ? 'text-white/90 hover:text-white' : 'text-white drop-shadow-md'
                                }`}
                        >
                            {t(item as Parameters<typeof t>[0])}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3 md:gap-5">
                    {/* Dynamic Language Toggle */}
                    <div className="flex items-center border-r border-white/20 pr-3 md:pr-4">
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
                        className={`hidden lg:inline-flex h-10 px-6 items-center justify-center text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 ${scrolled
                            ? "bg-app-acc text-app-dark rounded-full shadow-[0_0_15px_rgba(202,176,120,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-white"
                            : "bg-white text-app-dark rounded-full hover:bg-white/90 shadow-lg"
                            }`}
                    >
                        {t("contact")}
                    </Link>
                </div>
            </div>
        </header>
    );
}

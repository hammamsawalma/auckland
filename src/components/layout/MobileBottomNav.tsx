"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Home, HardHat, Pickaxe, Image as ImageIcon, Phone } from "lucide-react";

export function MobileBottomNav() {
    const t = useTranslations("Navigation");
    const pathname = usePathname();
    const activeLocale = useLocale();

    const navItems = [
        { key: "home", href: "/", icon: Home },
        { key: "about", href: "/about", icon: HardHat },
        { key: "projects", href: "/projects", icon: Pickaxe },
        { key: "contact", href: "/contact", icon: Phone },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-xl border-t border-white/10 pb-safe">
            <div className="flex justify-around items-center h-16 sm:h-20 px-2 sm:px-6">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-300 ${isActive ? "text-app-acc scale-105" : "text-white/70 hover:text-white/90"
                                }`}
                        >
                            <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_8px_rgba(202,176,120,0.8)]' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={(activeLocale === 'ar' ? "font-arabic tracking-normal text-xs sm:text-sm " : "tracking-wide text-[9px] sm:text-xs ") + "font-bold uppercase whitespace-nowrap mt-1 drop-shadow-md"}>
                                {t(item.key as Parameters<typeof t>[0])}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
}

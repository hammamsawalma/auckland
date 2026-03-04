"use client";

import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
    const tNav = useTranslations("Navigation");
    const tFoot = useTranslations("Footer");

    return (
        <footer className="relative bg-[#121212] text-white pt-20 pb-12 overflow-hidden">
            {/* Top SVG Curve Overlay */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] transform -translate-y-px">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-[#FAFAFA]"></path>
                </svg>
            </div>

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
                                <span className="font-heading font-black text-3xl leading-none text-white tracking-widest group-hover:text-app-acc transition-colors">
                                    AUCKLAND
                                </span>
                                <span className="font-sans text-[10px] text-white/70 tracking-[0.3em] mt-2 uppercase">
                                    Construction Development
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-white/70 leading-relaxed font-light">
                            {tFoot("description")}
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-lg text-white tracking-wider uppercase">{tFoot("quickLinks")}</h4>
                        <div className="flex flex-col gap-3">
                            {["home", "about", "projects", "calculator", "blog", "contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item}`}
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
                        <h4 className="font-bold text-lg text-white tracking-wider uppercase">{tFoot("contactInfo")}</h4>
                        <div className="flex flex-col gap-4 text-sm text-white/70">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-app-acc shrink-0" />
                                <span className="pt-0.5 leading-tight">Mesaieed Industrial City,<br />Doha, Qatar</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-app-acc shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+97466980665" className="hover:text-app-acc transition-colors">+974 6698 0665</a>
                                    <a href="tel:+97433546826" className="hover:text-app-acc transition-colors">+974 3354 6826</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-app-acc shrink-0" />
                                <a href="mailto:info@auckland-qa.com" className="hover:text-app-acc transition-colors">info@auckland-qa.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Social Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-lg text-white tracking-wider uppercase">Follow Us</h4>
                        <div className="flex items-center gap-3">
                            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-app-acc hover:border-app-acc hover:text-app-dark transition-all text-white/80 group">
                                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-app-acc hover:border-app-acc hover:text-app-dark transition-all text-white/80 group">
                                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-app-acc hover:border-app-acc hover:text-app-dark transition-all text-white/80 group">
                                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="text-xs text-white/70 text-center leading-relaxed">
                                Partner with us to build environments that stand the test of time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 max-w-6xl relative z-20">
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/70 font-light">
                        © {new Date().getFullYear()} Auckland for Construction and Development. {tFoot("rights")}
                    </p>
                    <div className="flex items-center gap-6 text-xs text-white/70 font-light">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

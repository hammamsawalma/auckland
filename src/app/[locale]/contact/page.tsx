"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Contact() {
    const t = useTranslations("Contact");

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-app-dark/60 z-10"></div>
                    <Image
                        src="/images/contact/contact-hero.jpg"
                        alt={t("title")}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="relative z-20 container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight"
                        >
                            {t("title")}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-app-light max-w-2xl mx-auto font-light"
                        >
                            {t("subtitle")}
                        </motion.p>
                    </div>

                    {/* SVG Curve Divider Bottom */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-white"></path>
                        </svg>
                    </div>
                </section>

                <section className="py-24 bg-white relative">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-app-light rounded-r-[100px] opacity-30 pointer-events-none -z-10 transform -translate-x-16 hidden lg:block"></div>

                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl lg:text-4xl font-black text-app-dark mb-10 leading-tight">{t("heading")}</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 bg-app-light rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-app-dark transition-colors duration-300">
                                            <Phone className="w-6 h-6 text-app-acc" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-app-dark mb-1">{t("phone")}</h4>
                                            <p className="text-app-dark/70 font-light text-lg">+974 6698 0665</p>
                                            <p className="text-app-dark/70 font-light text-lg">+974 3354 6826</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 bg-app-light rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-app-dark transition-colors duration-300">
                                            <Mail className="w-6 h-6 text-app-acc" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-app-dark mb-1">{t("email")}</h4>
                                            <p className="text-app-dark/70 font-light text-lg">info@auckland-qa.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 bg-app-light rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-app-dark transition-colors duration-300">
                                            <MapPin className="w-6 h-6 text-app-acc" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-app-dark mb-1">{t("location")}</h4>
                                            <p className="text-app-dark/70 font-light text-lg max-w-xs">
                                                {t("address")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Optional WhatsApp CTA */}
                                <div className="mt-14 p-8 bg-gradient-to-br from-[#25D366]/10 to-transparent rounded-2xl border border-[#25D366]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
                                    <div>
                                        <h4 className="font-bold text-[#128C7E] mb-2 text-lg">{t("waTitle")}</h4>
                                        <p className="text-sm text-[#128C7E] opacity-80">{t("waSubtitle")}</p>
                                    </div>
                                    <a
                                        href="https://wa.me/97466980665"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold tracking-wide transition-colors h-12 px-8 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md hover:shadow-lg"
                                    >
                                        {t("waButton")}
                                    </a>
                                </div>

                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-app-dark/5"
                            >
                                <h3 className="text-2xl font-bold text-app-dark mb-8">{t("formTitle")}</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formFirstName")}</label>
                                            <input type="text" className="w-full h-14 px-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formLastName")}</label>
                                            <input type="text" className="w-full h-14 px-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formEmail")}</label>
                                        <input type="email" className="w-full h-14 px-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formDetails")}</label>
                                        <textarea className="w-full p-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all min-h-[150px] resize-y" placeholder={t("formPlaceholder")}></textarea>
                                    </div>
                                    <Button size="lg" className="w-full h-14 rounded-full font-bold uppercase tracking-widest mt-4">
                                        {t("formSubmit")}
                                    </Button>
                                </form>
                            </motion.div>

                        </div>
                    </div>
                </section>

                <div className="h-16 bg-white relative">
                    {/* Fake section to provide space for SVG Curve */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px rotate-180">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-app-dark"></path>
                        </svg>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}

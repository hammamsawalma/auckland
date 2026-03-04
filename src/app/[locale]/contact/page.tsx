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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const details = formData.get('details');

        const subject = encodeURIComponent(`Auckland Website Inquiry: ${firstName} ${lastName}`);
        const body = encodeURIComponent(`Client Name: ${firstName} ${lastName}\nContact Email: ${email}\n\nProject Details:\n${details}`);

        window.location.href = `mailto:info@auckland-qa.com?subject=${subject}&body=${body}`;
    };

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
                        sizes="100vw"
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

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
                                            <h3 className="font-bold text-app-dark mb-1">{t("phone")}</h3>
                                            <p className="text-app-dark/70 font-light text-lg">+974 6698 0665</p>
                                            <p className="text-app-dark/70 font-light text-lg">+974 3354 6826</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 bg-app-light rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-app-dark transition-colors duration-300">
                                            <Mail className="w-6 h-6 text-app-acc" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-app-dark mb-1">{t("email")}</h3>
                                            <p className="text-app-dark/70 font-light text-lg">info@auckland-qa.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-14 h-14 bg-app-light rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-app-dark transition-colors duration-300">
                                            <MapPin className="w-6 h-6 text-app-acc" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-app-dark mb-1">{t("location")}</h3>
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
                                className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-app-dark/5"
                            >
                                <h3 className="text-2xl font-bold text-app-dark mb-8">{t("formTitle")}</h3>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formFirstName")}</label>
                                            <input name="firstName" required type="text" className="w-full h-14 px-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formLastName")}</label>
                                            <input name="lastName" required type="text" className="w-full h-14 px-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formEmail")}</label>
                                        <input name="email" required type="email" className="w-full h-14 px-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-app-dark/70 uppercase tracking-wider">{t("formDetails")}</label>
                                        <textarea name="details" required className="w-full p-4 bg-app-light/30 rounded-xl border border-transparent focus:bg-white focus:outline-none focus:border-app-acc focus:ring-1 focus:ring-app-acc transition-all min-h-[150px] resize-y" placeholder={t("formPlaceholder")}></textarea>
                                    </div>
                                    <Button type="submit" size="lg" className="w-full h-14 rounded-full font-bold uppercase tracking-widest mt-4">
                                        {t("formSubmit")}
                                    </Button>
                                </form>
                            </motion.div>

                        </div>

                        {/* Interactive Location Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-20 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-app-dark/10 relative group bg-app-light"
                        >
                            {/* CSS filters approach to create a dark-themed map from standard Google Maps */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115598.8159196629!2d51.3533924!3d25.1213038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c4c114ec370b%3A0xc3cfbdc216fb9324!2sNew%20Industrial%20Area%2C%20Qatar!5e0!3m2!1sen!2sus!4v1714415822026!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%) hue-rotate(180deg)' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl z-10"></div>

                            {/* Overlay Label */}
                            <div className="absolute top-6 left-6 z-20 bg-app-dark/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/5 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                                <div className="w-10 h-10 rounded-full bg-app-acc/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-app-acc drop-shadow-md" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-0.5">{t("mapHqTitle")}</h4>
                                    <p className="text-white/60 text-xs font-light">{t("mapHqAddress")}</p>
                                </div>
                            </div>
                        </motion.div>

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

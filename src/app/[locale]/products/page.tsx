"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { materials } from '@/lib/materials-data';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
    const locale = useLocale();
    const isAr = locale === 'ar';

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative py-24 pt-32 lg:pt-40 bg-app-dark overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-app-acc/5 rounded-l-[200px] pointer-events-none -z-10 hidden lg:block" />
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-block px-4 py-2 bg-app-acc/20 border border-app-acc/30 rounded-full mb-6">
                                <span className="text-app-acc text-sm font-bold uppercase tracking-widest">
                                    {isAr ? 'مكتبة المواد' : 'Material Library'}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
                                {isAr ? 'أحجار طبيعية فاخرة' : 'Premium Natural Stone'}
                                <br />
                                <span className="text-app-acc">{isAr ? 'وألواح GRC' : '& GRC Panels'}</span>
                            </h1>
                            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                                {isAr
                                    ? 'موردون ومُركِّبون للأحجار الطبيعية المميزة وألواح GRC في قطر منذ أكثر من 10 سنوات'
                                    : 'Supplying and installing premium natural stones and GRC panels in Qatar for over 10 years'}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Materials Grid */}
                <section className="py-20 bg-app-light">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {materials.map((material, i) => {
                                const name = isAr ? material.nameAr : material.nameEn;
                                const tagline = isAr ? material.taglineAr : material.taglineEn;
                                const excerpt = isAr ? material.excerptAr : material.excerptEn;
                                const idealFor = isAr ? material.idealForAr : material.idealFor;
                                const badge = isAr ? material.climateBadgeAr : material.climateBadge;

                                return (
                                    <motion.article
                                        key={material.slug}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ delay: i * 0.1, duration: 0.6 }}
                                        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-app-dark/5 hover:border-app-acc/30 transition-all duration-500"
                                    >
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={material.heroImage}
                                                alt={name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-app-dark/80 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                                <h2 className="text-2xl font-black text-white uppercase tracking-tight">{name}</h2>
                                                <span className="text-xs bg-app-acc/20 border border-app-acc/40 text-app-acc font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                                                    {badge}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 md:p-8">
                                            <p className="text-app-acc text-sm font-bold uppercase tracking-widest mb-2">{tagline}</p>
                                            <p className="text-app-dark/70 font-light leading-relaxed mb-6 line-clamp-3">{excerpt}</p>

                                            {/* Use cases pills */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {idealFor.slice(0, 3).map((use, j) => (
                                                    <span key={j} className="flex items-center gap-1 text-xs text-app-dark/70 bg-app-light px-3 py-1 rounded-full">
                                                        <CheckCircle2 className="w-3 h-3 text-app-acc shrink-0" aria-hidden="true" />
                                                        {use}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link
                                                href={`/products/${material.slug}`}
                                                className="inline-flex items-center gap-2 font-bold text-app-dark uppercase tracking-wider text-sm hover:text-app-acc transition-colors group/link"
                                            >
                                                {isAr ? 'استعرض المواصفات' : 'View Full Specs'}
                                                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" aria-hidden="true" />
                                            </Link>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Source From Auckland */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-app-dark uppercase tracking-tight mb-4">
                                {isAr ? 'لماذا توريد من أوكلاند؟' : 'Why Source From Auckland?'}
                            </h2>
                            <p className="text-lg text-app-dark/70 font-light max-w-2xl mx-auto">
                                {isAr
                                    ? 'أكثر من عقد من الخبرة في توريد وتركيب الأحجار الطبيعية في قطر'
                                    : 'Over a decade of experience supplying and installing natural stone in Qatar'}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    en: { title: 'Direct Import', desc: 'We source directly from quarries in Syria, Oman, Jordan, Italy, and Portugal — no middlemen, consistent quality batching.' },
                                    ar: { title: 'استيراد مباشر', desc: 'نستورد مباشرة من المحاجر في سوريا وعُمان والأردن وإيطاليا والبرتغال — بلا وسطاء وجودة متسقة.' }
                                },
                                {
                                    en: { title: 'CNC Precision', desc: 'Our factory uses advanced CNC cutting technology for exact dimensions, custom profiles, arches, and geometric patterns.' },
                                    ar: { title: 'دقة CNC', desc: 'يستخدم مصنعنا تقنية القطع CNC المتقدمة لقياسات دقيقة وتشكيلات مخصصة وأقواس وأنماط هندسية.' }
                                },
                                {
                                    en: { title: 'Full Installation', desc: 'From delivery to final finishing — our specialist teams handle the complete installation with warranty on all works.' },
                                    ar: { title: 'تركيب كامل', desc: 'من التسليم إلى التشطيب النهائي — تتولى فرقنا المتخصصة التركيب الكامل مع ضمان على جميع الأعمال.' }
                                }
                            ].map((item, i) => (
                                <div key={i} className="text-center p-8 rounded-2xl bg-app-light border border-app-dark/5">
                                    <h3 className="text-xl font-bold text-app-dark mb-3">{isAr ? item.ar.title : item.en.title}</h3>
                                    <p className="text-app-dark/70 font-light leading-relaxed">{isAr ? item.ar.desc : item.en.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-app-dark text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                            {isAr ? 'لا تعرف أي مادة تختار؟' : "Not sure which material is right?"}
                        </h2>
                        <p className="text-white/70 mb-8 font-light">
                            {isAr
                                ? 'مهندسونا يقدمون استشارة مجانية ويساعدونك على الاختيار الأمثل لمشروعك.'
                                : 'Our engineers provide free consultation and help you choose the best option for your project and budget.'}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 h-14 px-8 bg-app-acc text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-app-dark transition-all duration-300 shadow-lg"
                        >
                            {isAr ? 'تواصل معنا مجاناً' : 'Free Consultation'}
                            <ArrowRight className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

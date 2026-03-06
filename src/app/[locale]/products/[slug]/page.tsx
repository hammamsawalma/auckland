"use client";

import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { materials } from '@/lib/materials-data';
import { useLocale } from 'next-intl';
import { CheckCircle2, ArrowRight, MapPin, Thermometer, Droplets, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MaterialPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const locale = useLocale();
    const isAr = locale === 'ar';

    const material = materials.find((m) => m.slug === slug);
    if (!material) notFound();

    const name = isAr ? material.nameAr : material.nameEn;
    const tagline = isAr ? material.taglineAr : material.taglineEn;
    const description = isAr ? material.descriptionAr : material.descriptionEn;
    const origin = isAr ? material.originAr : material.origin;
    const idealFor = isAr ? material.idealForAr : material.idealFor;
    const climateBadge = isAr ? material.climateBadgeAr : material.climateBadge;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">

                {/* Hero */}
                <section className="relative h-[55vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src={material.heroImage}
                            alt={name}
                            fill
                            priority
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-app-dark via-app-dark/60 to-app-dark/20" />
                    </div>

                    <div className="relative z-10 container mx-auto px-4 max-w-6xl pb-12">
                        <Link href="/products" className="inline-flex items-center gap-2 text-app-acc text-sm font-bold uppercase tracking-widest hover:text-white transition-colors mb-6">
                            {isAr ? <ArrowRight className="w-4 h-4" /> : null}
                            {isAr ? 'عودة إلى المواد' : '← All Materials'}
                        </Link>
                        <div className="inline-flex items-center gap-2 bg-app-acc/20 border border-app-acc/40 rounded-full px-4 py-1.5 mb-4">
                            <span className="text-app-acc text-xs font-bold uppercase tracking-widest">{climateBadge}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            {name}
                        </h1>
                        <p className="text-xl text-white/80 font-light max-w-2xl">{tagline}</p>
                    </div>
                </section>

                {/* Quick Facts Bar */}
                <section className="bg-app-dark border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-wrap gap-6 py-6 text-sm">
                            <div className="flex items-center gap-2 text-white/70">
                                <MapPin className="w-4 h-4 text-app-acc shrink-0" aria-hidden="true" />
                                <span className="font-medium text-white">{isAr ? 'المصدر:' : 'Origin:'}</span>
                                <span>{origin}</span>
                            </div>
                            {idealFor.map((use, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/70">
                                    <CheckCircle2 className="w-4 h-4 text-app-acc shrink-0" aria-hidden="true" />
                                    <span>{use}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Description + Specs */}
                <section className="py-20 bg-app-light">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-app-dark uppercase tracking-tight mb-6">
                                    {isAr ? 'نظرة عامة على المادة' : 'Material Overview'}
                                </h2>
                                <div className="prose prose-lg text-app-dark/80 font-light leading-relaxed whitespace-pre-line">
                                    {description}
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 mt-8 h-14 px-8 bg-app-acc text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-app-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {isAr ? 'طلب عينة' : 'Request a Sample'}
                                    <ArrowRight className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
                                </Link>
                            </motion.div>

                            {/* Specs Table */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <h2 className="text-2xl font-black text-app-dark uppercase tracking-tight mb-6">
                                    {isAr ? 'المواصفات الفنية' : 'Technical Specifications'}
                                </h2>
                                <div className="rounded-2xl overflow-hidden border border-app-dark/10 shadow-sm">
                                    {material.specs.map((spec, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-app-light/50'}`}
                                        >
                                            <span className="text-sm font-bold text-app-dark uppercase tracking-wider w-2/5 shrink-0">
                                                {isAr ? spec.labelAr : spec.label}
                                            </span>
                                            <span className="text-sm text-app-dark/70">
                                                {isAr ? spec.valueAr : spec.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-5xl font-black text-app-dark uppercase tracking-tight mb-12 text-center">
                            {isAr ? 'الاستخدامات الشائعة في قطر' : 'Common Applications in Qatar'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {material.useCases.map((uc, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="p-8 border border-app-dark/10 rounded-2xl hover:border-app-acc/50 hover:shadow-xl transition-all duration-500 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-app-light flex items-center justify-center mb-4 group-hover:bg-app-dark transition-colors duration-300">
                                        <Package className="w-6 h-6 text-app-acc" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-bold text-app-dark mb-3">
                                        {isAr ? uc.titleAr : uc.titleEn}
                                    </h3>
                                    <p className="text-app-dark/70 font-light leading-relaxed">
                                        {isAr ? uc.descAr : uc.descEn}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="py-20 bg-app-dark">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                            {isAr ? `هل تريد استخدام ${material.nameAr} في مشروعك؟` : `Ready to use ${material.nameEn} in your project?`}
                        </h2>
                        <p className="text-white/70 text-lg font-light mb-8 max-w-xl mx-auto">
                            {isAr
                                ? 'تواصل معنا للحصول على عرض أسعار مجاني، أو طلب عينة مادية.'
                                : 'Contact us for a free quote, or request a physical sample to see and feel the material before committing.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-app-acc text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-app-dark transition-all duration-300 shadow-lg"
                            >
                                {isAr ? 'احصل على عرض سعر' : 'Get a Free Quote'}
                                <ArrowRight className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 h-14 px-8 border border-white/30 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                {isAr ? 'استكشف المواد الأخرى' : 'Explore Other Materials'}
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

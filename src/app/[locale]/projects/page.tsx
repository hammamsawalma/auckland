"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function PortfolioHub() {
    const tProj = useTranslations("Projects");
    const tGal = useTranslations("Gallery");
    const tProd = useTranslations("Products");

    // Master Tab State
    const [mainTab, setMainTab] = useState<"Projects" | "Gallery" | "Materials">("Projects");

    // Projects Sub-Tab State & Lightbox
    const [projectTab, setProjectTab] = useState<"All" | "Wakrah" | "Al Khor">("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Projects Data
    const wakrahImages = Array.from({ length: 59 }, (_, i) => `/images/projects/wakrah/wakrah_${i + 1}.jpg`);
    const alKhorImages = Array.from({ length: 35 }, (_, i) => `/images/projects/alkhor/alkhor_${i + 1}.jpg`);

    const getAllProjectImages = () => {
        if (projectTab === "Wakrah") return wakrahImages;
        if (projectTab === "Al Khor") return alKhorImages;
        const interleaved = [];
        const maxLength = Math.max(wakrahImages.length, alKhorImages.length);
        for (let i = 0; i < maxLength; i++) {
            if (i < wakrahImages.length) interleaved.push(wakrahImages[i]);
            if (i < alKhorImages.length) interleaved.push(alKhorImages[i]);
        }
        return interleaved;
    };
    const currentProjectImages = getAllProjectImages();

    // Gallery Data
    const galleryImages = [
        "/images/gallery/1.jpg", "/images/gallery/2.jpg", "/images/gallery/3.jpg",
        "/images/gallery/4.jpg", "/images/gallery/5.jpg", "/images/gallery/6.jpg",
        "/images/gallery/7.jpg", "/images/gallery/8.jpg", "/images/gallery/9.jpg",
    ];

    // Materials Data
    const granites = [
        "Colonial white", "Colonial gold", "Shiva gold", "Alaska white", "Alaska gold",
        "Crystal yellow", "Moon white", "P-white", "Lavender blue", "Misty yellow",
        "Pink guarana", "Desert brown", "White galaxy", "Grey sardo", "Steel grey",
        "Santa sicilia", "Urban classic", "Black beauty", "Black galaxy", "Tan brown",
        "Kuppam green", "Black pearl", "Blue pearl", "Rosy pink", "Paradiso", "Jhansi red"
    ];

    const marbles = [
        "Crema marfil", "Crema uno", "Cappuccino", "Volakas white", "Carrara white",
        "Mugla white", "Omani beij", "Vietnam white", "Sunny gold", "Indian green",
        "Rosalia pink", "Indus gold", "Black and gold", "Armani grey", "Black marquina",
        "Maroon scuro", "Orchid jade", "Tundra grey", "Grey emperador", "Light emperador",
        "Dark emperador", "Travertine", "Perlato sicilia", "Afyun sugar", "Marmara white",
        "White wood", "Grey wood"
    ];

    // Reset lightbox when project tab changes
    useEffect(() => {
        setLightboxIndex(null);
    }, [projectTab, mainTab]);

    // Handle Keyboard Navigation for Lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! + 1) % currentProjectImages.length);
            if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! - 1 + currentProjectImages.length) % currentProjectImages.length);
            if (e.key === "Escape") setLightboxIndex(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, currentProjectImages.length]);

    // Disable background scroll when lightbox is open
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [lightboxIndex]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                {/* Unified Hero */}
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-app-dark/60 z-10"></div>
                    <Image
                        src="/images/gallery/gallery-hero.jpg"
                        alt="Portfolio Hub"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="relative z-20 container mx-auto px-4 text-center mt-12">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        >
                            Our Portfolio & Materials
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-app-light max-w-2xl mx-auto font-light"
                        >
                            Explore our finished projects, installation gallery, and premium raw stone collection.
                        </motion.p>
                    </div>

                    {/* Master Tab Bar Embedded in Hero Bottom */}
                    <div className="absolute bottom-0 left-0 w-full z-30 flex justify-center pb-2 px-4">
                        <div className="flex bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 gap-1 md:gap-2">
                            {(["Projects", "Gallery", "Materials"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setMainTab(tab)}
                                    className={`px-3 sm:px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase whitespace-nowrap tracking-wide md:tracking-widest transition-all duration-300 ${mainTab === tab
                                        ? "bg-app-acc text-app-dark shadow-[0_0_20px_rgba(202,176,120,0.4)]"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {tab === "Projects" ? tProj("title") : tab === "Gallery" ? tGal("title") : tProd("title")}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[#FAFAFA] min-h-[60vh]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <AnimatePresence mode="wait">
                            {/* --- TAB 1: PROJECTS (CASE STUDIES) --- */}
                            {mainTab === "Projects" && (
                                <motion.div
                                    key="projects-view"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                                        <div className="flex items-center gap-4 flex-1 w-full">
                                            <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{tProj("featuredWork")}</h2>
                                            <div className="h-[1px] flex-1 bg-app-dark/20 hidden md:block"></div>
                                        </div>

                                        {/* Sub-Filter Tabs */}
                                        <div className="flex items-center gap-2 bg-app-light/50 p-1.5 rounded-full border border-app-dark/10 overflow-x-auto no-scrollbar max-w-full w-full sm:w-auto">
                                            {(["All", "Wakrah", "Al Khor"] as const).map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setProjectTab(tab)}
                                                    className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${projectTab === tab
                                                        ? "bg-app-dark text-white shadow-md scale-105"
                                                        : "text-app-dark/60 hover:text-app-dark hover:bg-white"
                                                        }`}
                                                >
                                                    {tab === "Wakrah" ? "Wakrah Villa" : tab === "Al Khor" ? "Al Khor Residence" : "All Projects"}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.div
                                        key={projectTab}
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            visible: { transition: { staggerChildren: 0.05 } },
                                            hidden: {}
                                        }}
                                        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                                    >
                                        {currentProjectImages.map((src, idx) => {
                                            const isWakrah = src.includes("wakrah");
                                            const projectName = isWakrah ? "Wakrah Private Villa" : "Al Khor VIP Residence";

                                            return (
                                                <motion.div
                                                    key={`${projectTab}-${idx}`}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 40, scale: 0.95 },
                                                        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                                                    }}
                                                    className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group/item cursor-pointer mb-6 border border-app-dark/5 bg-app-dark/5 animate-pulse"
                                                    style={{ minHeight: "300px" }}
                                                    onClick={() => setLightboxIndex(idx)}
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={projectName}
                                                        width={600}
                                                        height={800}
                                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover/item:scale-105"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                        loading="lazy"
                                                        onLoad={(e) => {
                                                            (e.target as HTMLImageElement).parentElement?.classList.remove('animate-pulse', 'bg-app-dark/5');
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-app-dark/90 via-app-dark/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                                                            <span className="inline-block px-3 py-1 bg-app-acc text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-2 shadow-lg">
                                                                {isWakrah ? "Wakrah" : "Al Khor"}
                                                            </span>
                                                            <h3 className="text-white font-bold text-xl drop-shadow-md">{projectName}</h3>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* --- TAB 2: GALLERY (MASONRY GRID) --- */}
                            {mainTab === "Gallery" && (
                                <motion.div
                                    key="gallery-view"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                                        <div className="flex items-center gap-4 flex-1 w-full">
                                            <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{tGal("title")}</h2>
                                            <div className="h-[1px] flex-1 bg-app-dark/20 hidden md:block"></div>
                                        </div>
                                    </div>

                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            visible: { transition: { staggerChildren: 0.1 } },
                                            hidden: {}
                                        }}
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
                                    >
                                        {galleryImages.map((src, idx) => (
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                                                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                                                }}
                                                key={`gallery-${idx}`}
                                                className={`relative w-full h-full overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-500 group cursor-pointer border border-app-dark/5 ${idx === 0 || idx === 3 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                                            >
                                                <Image
                                                    src={src}
                                                    alt={`Auckland Project ${idx + 1}`}
                                                    fill
                                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-app-dark/90 via-app-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                                        <h3 className="text-white font-bold text-xl md:text-2xl mb-2">{tGal("viewLabel")}</h3>
                                                        <div className="w-12 h-1 bg-app-acc transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* --- TAB 3: MATERIALS (GRANITES / MARBLES) --- */}
                            {mainTab === "Materials" && (
                                <motion.div
                                    key="materials-view"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Granites */}
                                    <div className="mb-24">
                                        <div className="flex items-center gap-4 mb-10">
                                            <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{tProd("granitesTitle")} <span className="text-app-acc opacity-50 text-xl tracking-normal">({granites.length})</span></h2>
                                            <div className="h-px flex-1 bg-app-dark/10"></div>
                                        </div>
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                visible: { transition: { staggerChildren: 0.03 } },
                                                hidden: {}
                                            }}
                                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                        >
                                            {granites.map((item, idx) => (
                                                <Link key={`g-${idx}`} href={`/projects`}> {/* Using standard routing to not break linking if pages deleted */}
                                                    <motion.div
                                                        variants={{
                                                            hidden: { opacity: 0, y: 20 },
                                                            visible: { opacity: 1, y: 0 }
                                                        }}
                                                        className="group relative h-20 border border-app-dark/10 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                                                    >
                                                        <div className="absolute inset-0 bg-app-light/30 group-hover:bg-app-dark transition-colors duration-300 z-10"></div>
                                                        <span className="relative z-20 font-medium text-sm md:text-base capitalize text-app-dark group-hover:text-white transition-colors duration-300 px-4 text-center">
                                                            {item}
                                                        </span>
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </div>

                                    {/* Marbles */}
                                    <div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <h2 className="text-3xl font-bold text-app-dark uppercase tracking-wider">{tProd("marblesTitle")} <span className="text-app-acc opacity-50 text-xl tracking-normal">({marbles.length})</span></h2>
                                            <div className="h-px flex-1 bg-app-dark/10"></div>
                                        </div>
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                visible: { transition: { staggerChildren: 0.03 } },
                                                hidden: {}
                                            }}
                                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                        >
                                            {marbles.map((item, idx) => (
                                                <Link key={`m-${idx}`} href={`/projects`}>
                                                    <motion.div
                                                        variants={{
                                                            hidden: { opacity: 0, y: 20 },
                                                            visible: { opacity: 1, y: 0 }
                                                        }}
                                                        className="group relative h-20 border border-app-dark/10 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                                                    >
                                                        <div className="absolute inset-0 bg-app-light/30 group-hover:bg-app-dark transition-colors duration-300 z-10"></div>
                                                        <span className="relative z-20 font-medium text-sm md:text-base capitalize text-app-dark group-hover:text-white transition-colors duration-300 px-4 text-center">
                                                            {item}
                                                        </span>
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                <div className="h-4 bg-[#FAFAFA]" />

                {/* Lightbox Modal (For Projects Tab) */}
                <AnimatePresence>
                    {mainTab === "Projects" && lightboxIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-app-dark/95 backdrop-blur-md"
                            onClick={() => setLightboxIndex(null)}
                        >
                            <button
                                className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors z-[110] bg-app-dark/50 hover:bg-app-dark/80 p-2 rounded-full"
                                onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                            >
                                <X className="w-8 h-8" />
                            </button>

                            <button
                                className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-app-dark/50 hover:bg-app-dark/80 p-3 rounded-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((prev) => (prev! - 1 + currentProjectImages.length) % currentProjectImages.length);
                                }}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                            <button
                                className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-app-dark/50 hover:bg-app-dark/80 p-3 rounded-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((prev) => (prev! + 1) % currentProjectImages.length);
                                }}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>

                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative w-full max-w-5xl max-h-[85vh] h-full mx-4 lg:mx-20"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={currentProjectImages[lightboxIndex]}
                                    alt="Project Full View"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                    priority
                                />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-app-dark/80 backdrop-blur-md text-white/80 px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase">
                                    {lightboxIndex + 1} / {currentProjectImages.length}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
            <Footer />
        </div>
    );
}

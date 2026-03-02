"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle } from "lucide-react";

export function ProjectShowcase() {
    const t = useTranslations("About");
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    // Array of indices matching our 14 factory videos configured in the dictionaries
    const videos = Array.from({ length: 14 }, (_, i) => i + 1);

    return (
        <section className="py-32 bg-app-dark text-white relative" id="showcase">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">{t("facilitiesTitle", { defaultMessage: "Project Showcase" })}</h2>
                    <p className="text-xl text-white/60 font-light max-w-3xl mx-auto">
                        {t("facilitiesText", { defaultMessage: "Explore our specialized commercial and residential villa projects in various stages of construction." })}
                    </p>
                </motion.div>

                {/* Dense Media Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
                    {videos.map((vNum) => (
                        <motion.div
                            key={vNum}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden bg-black/50 aspect-video shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
                            onClick={() => setActiveVideo(vNum)}
                        >
                            <video
                                className="w-full h-full object-cover transform scale-[1.01] group-hover:scale-105 transition-transform duration-700 blur-[1px] brightness-75 group-hover:blur-0 group-hover:brightness-100"
                                preload="metadata"
                                muted
                                playsInline
                                onMouseOver={e => (e.target as HTMLVideoElement).play()}
                                onMouseOut={e => {
                                    const vid = e.target as HTMLVideoElement;
                                    vid.pause();
                                    vid.currentTime = 0;
                                }}
                            >
                                <source src={`/videos/factory_raw/factory_raw_${vNum}.mp4`} type="video/mp4" />
                            </video>

                            {/* Minimal Text Overlay (Visible on Hover) */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1 drop-shadow-md">
                                    {t(`fv${vNum}Title` as any)}
                                </h3>
                                <p className="text-sm font-light text-white/80 line-clamp-2 drop-shadow-sm">
                                    {t(`fv${vNum}Desc` as any)}
                                </p>
                            </div>

                            {/* Play Icon Graphic */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                <PlayCircle className="w-5 h-5 text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Theater Mode */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl"
                    >
                        {/* Huge Invisible Background Button to Close Lightbox */}
                        <button className="absolute inset-0 w-full h-full cursor-default" onClick={() => setActiveVideo(null)} aria-label="Close lightbox"></button>

                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-colors border border-white/20 text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="relative z-[105] w-full max-w-6xl max-h-[90vh] flex flex-col bg-app-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <div className="w-full bg-black flex-1 relative flex items-center justify-center max-h-[75vh]">
                                <video
                                    className="w-full h-full max-h-[75vh] object-contain"
                                    controls
                                    autoPlay
                                    playsInline
                                    src={`/videos/factory_raw/factory_raw_${activeVideo}.mp4`}
                                />
                            </div>

                            {/* Cinematic Description Bar */}
                            <div className="p-6 md:p-8 bg-app-dark/95 backdrop-blur-md border-t border-white/10 shrink-0">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="px-3 py-1 bg-white/10 text-white/50 text-xs font-bold rounded-full uppercase tracking-widest border border-white/5">
                                        Clip {activeVideo}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{t(`fv${activeVideo}Title` as any)}</h3>
                                </div>
                                <p className="text-lg text-white/70 font-light leading-relaxed">
                                    {t(`fv${activeVideo}Desc` as any)}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* SVG Curve Divider Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px pointer-events-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-app-light"></path>
                </svg>
            </div>
        </section>
    );
}

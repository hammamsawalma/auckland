"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export const SocialFeed = () => {
    const t = useTranslations("Navigation"); // We can leverage the Navigation dict or just hardcode visually

    // Map 15 social images
    const images = Array.from({ length: 15 }, (_, i) => `/images/home/social/social_${i + 1}.jpg`);

    // Duplicate the array so the marquee loops infinitely without breaking visually
    const marqueeImages = [...images, ...images];

    return (
        <section className="py-20 bg-app-dark overflow-hidden relative">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight font-heading">
                    Auckland <span className="text-app-acc">Social</span>
                </h2>
                <p className="text-app-light/60 mt-4 text-lg font-light tracking-wide">
                    Connect with our latest developments and architectural inspirations.
                </p>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full flex overflow-hidden group">
                {/* Left Gradient Mask */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-app-dark to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-6 px-3"
                    animate={{
                        x: [0, -10350], // Adjust based on (width + gap) * 15
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 100,
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl group/card shadow-2xl"
                        >
                            <Image
                                src={src}
                                alt={`Auckland Social Update ${index}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                sizes="(max-width: 768px) 300px, 400px"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-app-dark/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold tracking-wider uppercase flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    View Post
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Right Gradient Mask */}
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-app-dark to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

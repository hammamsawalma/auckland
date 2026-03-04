"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { HighlightsMarquee } from "@/components/home/HighlightsMarquee";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-app-dark/40 z-10 transition-opacity duration-1000"></div>

          {/* Background Background Video (Desktop Only) */}
          <div className="absolute inset-0 w-full h-full bg-app-dark overflow-hidden hidden md:block">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover object-center scale-[1.05]"
            >
              <source src="/videos/hero-drone.mp4" type="video/mp4" />
              <track kind="captions" src="/captions/empty.vtt" label="English" default={false} />
            </video>
          </div>

          {/* Background Fallback Image (Mobile Only) */}
          <div className="absolute inset-0 w-full h-full bg-app-dark overflow-hidden md:hidden">
            <Image
              src="/images/hero-fallback.jpg"
              alt="Auckland Hero Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-20 container mx-auto px-4 text-center mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-lg"
            >
              {t("title")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-acc to-yellow-300 drop-shadow-sm">{t("subtitle")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-3xl text-white mb-12 max-w-2xl mx-auto font-light drop-shadow-md"
            >
              {t("tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="h-14 px-8 text-base bg-app-acc hover:bg-app-acc/90 text-app-dark font-bold shadow-xl shadow-app-acc/20">
                {t("getStarted")}
                <ArrowRight className="ml-2 w-5 h-5 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-app-dark shadow-xl">
                {t("viewWork")}
              </Button>
            </motion.div>
          </div>

          {/* SVG Curve Divider Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-px">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,193.36,104.7,237.4,94.04,281.33,70.97,321.39,56.44Z" className="fill-app-light"></path>
            </svg>
          </div>
        </section>

        <section className="relative pt-32 sm:pt-40 pb-24 md:pb-32 bg-app-light">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center max-w-4xl relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-black text-app-dark mb-8 uppercase tracking-tight">{t("whoWeAre")}</h1>
            <p className="text-xl md:text-2xl text-app-dark/80 leading-relaxed font-light">
              {t("description")}
            </p>
          </motion.div>

          {/* Top decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-app-acc/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>

        <HighlightsMarquee />
      </main>

      <Footer />
    </div>
  );
}

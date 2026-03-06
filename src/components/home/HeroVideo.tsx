"use client";

import { useEffect, useState } from "react";

/**
 * HeroVideo — only renders the <video> element on desktop (≥768px).
 * This prevents browsers from downloading the 15MB drone video on mobile,
 * which was the #1 cause of the massive network payload on mobile PageSpeed.
 */
export function HeroVideo({ poster }: { poster: string }) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        setIsDesktop(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    if (!isDesktop) return null;

    return (
        <div className="absolute inset-0 w-full h-full bg-app-dark overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster={poster}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover object-center scale-[1.05]"
            >
                <source src="/videos/hero-drone.mp4#t=0.001" type="video/mp4" />
                <track kind="captions" src="/captions/empty.vtt" label="English" default={false} />
            </video>
        </div>
    );
}

"use client";

import { Play } from "lucide-react";
import { useState } from "react";

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
}

export function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={`relative group overflow-hidden rounded-xl bg-app-dark/10 ${className}`}>
            <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster={poster}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={src} type="video/mp4" />
                <track kind="captions" src="/captions/empty.vtt" label="English" default={false} />
            </video>

            {/* Custom Play Overlay - Visible when not playing to explicitly denote a video element */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isPlaying ? 'bg-transparent opacity-0 scale-110' : 'bg-app-dark/30 opacity-100 scale-100'}`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1.5 drop-shadow-md" />
                </div>
            </div>
        </div>
    );
}

import { Play } from "lucide-react";

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
}

export function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
    return (
        <div className={`relative group overflow-hidden rounded-xl bg-app-dark/10 ${className}`}>
            <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster={poster}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Custom Play Overlay (Optional visual enhancement before interaction) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-app-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-8 h-8 text-white fill-white ml-1.5" />
                </div>
            </div>
        </div>
    );
}

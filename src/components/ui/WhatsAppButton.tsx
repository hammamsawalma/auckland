"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function WhatsAppButton() {
    const tContact = useTranslations("Contact");
    const [isVisible, setIsVisible] = useState(false);

    // Only show button after user has scrolled down a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Format the number for WhatsApp API
    const phoneNumber = "97466980665";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I am interested in Auckland's services.")}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tContact("waButton")}
            className={`
                fixed bottom-24 lg:bottom-6 right-6 z-50 
                flex items-center justify-center 
                w-14 h-14 
                bg-[#25D366] text-white 
                rounded-full shadow-lg 
                hover:scale-110 hover:shadow-xl hover:bg-[#1ebd5a]
                transition-all duration-300 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
            `}
        >
            {/* The pulsing ring animation behind the icon */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>
            <MessageCircle className="w-8 h-8 relative z-10" />
        </a>
    );
}

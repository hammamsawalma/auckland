type JsonLdProps = {
    data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Auckland Construction & Development",
    alternateName: "Auckland CD",
    url: "https://www.aucklandcd.com",
    logo: "https://www.aucklandcd.com/images/acd-icon.png",
    image: "https://www.aucklandcd.com/images/gallery/gallery-hero.webp",
    description:
        "Leading natural stone contractors in Qatar and the GCC. Specialists in Syrian stone, Omani marble, architectural facades, and luxury interior fit-out services.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Street 101, New Industrial Area",
        addressLocality: "Doha",
        addressCountry: "QA",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2854,
        longitude: 51.531,
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+974",
        contactType: "customer service",
        availableLanguage: ["English", "Arabic"],
    },
    areaServed: [
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Kuwait" },
        { "@type": "Country", name: "Bahrain" },
    ],
    knowsAbout: [
        "Natural Stone Installation",
        "Syrian Stone",
        "Omani Marble",
        "Stone Facades",
        "Luxury Interior Fit-out",
        "Granite Supply",
        "Marble Supply",
    ],
};

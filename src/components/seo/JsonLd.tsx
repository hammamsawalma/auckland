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
        "Leading natural stone contractors in Qatar and the GCC. Specialists in Syrian stone, Omani marble, limestone, GRC cladding, architectural facades, and luxury interior fit-out services in Doha.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Street 101, New Industrial Area",
        addressLocality: "Doha",
        addressRegion: "Doha",
        postalCode: "00000",
        addressCountry: "QA",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2854,
        longitude: 51.531,
    },
    hasMap: "https://maps.google.com/?q=Auckland+Construction+Development+Doha+Qatar",
    telephone: ["+97466980665", "+97433546826"],
    email: "info@aucklandcd.com",
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+97466980665",
            contactType: "customer service",
            contactOption: "TollFree",
            availableLanguage: ["English", "Arabic"],
        },
        {
            "@type": "ContactPoint",
            telephone: "+97433546826",
            contactType: "sales",
            availableLanguage: ["English", "Arabic"],
        },
    ],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "08:00",
            closes: "18:00",
        },
    ],
    priceRange: "QAR QAR QAR",
    currenciesAccepted: "QAR",
    paymentAccepted: "Cash, Bank Transfer",
    sameAs: [
        "https://www.aucklandcd.com",
        // Add Google Business Profile URL here once created:
        // "https://maps.google.com/?cid=YOUR_CID",
    ],
    areaServed: [
        { "@type": "City", name: "Doha", containedIn: "Qatar" },
        { "@type": "City", name: "Al Wakrah", containedIn: "Qatar" },
        { "@type": "City", name: "Al Khor", containedIn: "Qatar" },
        { "@type": "City", name: "Lusail", containedIn: "Qatar" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
    ],
    knowsAbout: [
        "Natural Stone Installation",
        "Syrian Stone Cladding",
        "Omani Marble",
        "Jordanian Limestone",
        "GRC Panels",
        "Mashrabiya Screens",
        "Stone Facades Qatar",
        "Villa Cladding Qatar",
        "Luxury Interior Fit-out",
        "Granite Supply",
        "Marble Supply Doha",
        "CNC Stone Fabrication",
    ],
    foundingDate: "2010",
};

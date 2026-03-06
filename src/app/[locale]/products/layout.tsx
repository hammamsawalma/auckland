import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export const metadata: Metadata = {
    title: 'Natural Stone & GRC Materials | Auckland Construction Qatar',
    description: 'Explore our full range of premium natural stones: Syrian Stone, Omani Marble, Limestone, and GRC panels — supplied and installed across Qatar.',
    keywords: 'natural stone supplier Qatar, Syrian stone, Omani marble, GRC panels Qatar, stone cladding Doha',
    alternates: {
        canonical: `${BASE_URL}/en/products`,
        languages: {
            'en': `${BASE_URL}/en/products`,
            'ar': `${BASE_URL}/ar/products`,
        },
    },
    openGraph: {
        title: 'Natural Stone & GRC Material Library — Auckland Construction Qatar',
        description: 'Premium Syrian Stone, Omani Marble, Limestone and GRC panels — imported, fabricated & installed in Qatar.',
        images: [{ url: `${BASE_URL}/v2_images/gallery/gallery-hero.webp`, width: 1200, height: 630 }],
    },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

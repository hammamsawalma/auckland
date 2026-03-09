import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr ? 'الشروط والأحكام' : 'Terms & Conditions',
        description: isAr
            ? 'الشروط والأحكام لشركة أوكلاند للبناء والتطوير قطر.'
            : 'Terms & Conditions for Auckland Construction & Development Qatar.',
        alternates: {
            canonical: `${BASE_URL}/${locale}/terms`,
            languages: {
                'en': `${BASE_URL}/en/terms`,
                'ar': `${BASE_URL}/ar/terms`,
            },
        },
    };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

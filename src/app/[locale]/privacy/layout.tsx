import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr ? 'سياسة الخصوصية' : 'Privacy Policy',
        description: isAr
            ? 'سياسة الخصوصية لشركة أوكلاند للبناء والتطوير قطر — كيف نحمي بياناتك الشخصية.'
            : 'Privacy Policy for Auckland Construction & Development Qatar — how we protect your personal data.',
        alternates: {
            canonical: `${BASE_URL}/${locale}/privacy`,
            languages: {
                'en': `${BASE_URL}/en/privacy`,
                'ar': `${BASE_URL}/ar/privacy`,
            },
        },
    };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

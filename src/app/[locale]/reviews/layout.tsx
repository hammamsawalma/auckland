import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr
            ? 'تقييمات أوكلاند للبناء والتطوير | اترك تقييماً على Google'
            : 'Review Auckland Construction | Leave a Google Review',
        description: isAr
            ? 'شاركنا تجربتك مع أوكلاند للبناء والتطوير في قطر. تقييمك يساعد المعماريين والمطورين الآخرين.'
            : 'Share your experience with Auckland Construction & Development Qatar. Your review helps other architects and developers in Qatar.',
        robots: { index: false, follow: true }, // don't index the review page itself
        alternates: {
            canonical: `${BASE_URL}/${locale}/reviews`,
            languages: {
                'en': `${BASE_URL}/en/reviews`,
                'ar': `${BASE_URL}/ar/reviews`,
            },
        },
    };
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

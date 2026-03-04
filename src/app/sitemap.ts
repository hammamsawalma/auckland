import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const defaultLastMod = new Date();

    // Only include routes that actually exist in the app
    const staticPages = [
        '',           // home
        '/about',
        '/projects',
        '/calculator',
        '/blog',
        '/contact',
        '/privacy',
    ].flatMap((route) => [
        {
            url: `${BASE_URL}/en${route}`,
            lastModified: defaultLastMod,
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8,
        },
        {
            url: `${BASE_URL}/ar${route}`,
            lastModified: defaultLastMod,
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8,
        }
    ]);

    return [...staticPages];
}


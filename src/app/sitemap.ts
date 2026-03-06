import { MetadataRoute } from 'next';
import { articles } from '@/lib/blog-data';

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
        '/terms',
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

    const blogPages = articles.flatMap((article) => [
        {
            url: `${BASE_URL}/en/blog/${article.id}`,
            lastModified: defaultLastMod,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/ar/blog/${article.id}`,
            lastModified: defaultLastMod,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
    ]);

    return [...staticPages, ...blogPages];
}

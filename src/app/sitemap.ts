import { MetadataRoute } from 'next';
import { articles } from '@/lib/blog-data';
import { materials } from '@/lib/materials-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const defaultLastMod = new Date();

    const staticPages = [
        '',           // home
        '/about',
        '/projects',
        '/products',
        '/calculator',
        '/blog',
        '/contact',
        '/privacy',
        '/terms',
        // /reviews is intentionally excluded — it has noindex and is a client-facing tool only
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

    // Material library pages — high priority for targeting SEO keywords
    const materialPages = materials.flatMap((material) => [
        {
            url: `${BASE_URL}/en/products/${material.slug}`,
            lastModified: defaultLastMod,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/ar/products/${material.slug}`,
            lastModified: defaultLastMod,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
    ]);

    return [...staticPages, ...blogPages, ...materialPages];
}

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://auckland-qa.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/'], // Add any private routes here if needed in the future
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}

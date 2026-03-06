import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Auckland Construction',
        short_name: 'Auckland',
        description: 'High-end stone finishing and construction development spaces that embody sophistication.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0c0c0c',
        theme_color: '#0c0c0c',
        icons: [
            {
                src: '/v2_images/acd-icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}

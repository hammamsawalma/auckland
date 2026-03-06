import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async headers() {
    return [
      // ─── Security Headers (applied globally) ────────────────────────────────
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "media-src 'self' blob:",
              "frame-src https://www.google.com",
              "connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
              "worker-src 'self' blob:",
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      // ─── Static Asset Caching ────────────────────────────────────────────────
      {
        source: '/videos/:all*(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // Videos are large and rarely change — keep immutable
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:all*(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // Fonts never change — keep them immutable
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/v2_images/:all*(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // Images may be updated under the same filename — revalidate after 1 day
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  outputFileTracingExcludes: {
    '*': [
      'public/videos/**/*',
      'public/v2_images/**/*'
    ]
  }
};

export default withNextIntl(nextConfig);

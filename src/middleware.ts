import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
    /*
     * Match all paths EXCEPT:
     * - _next/static  (Next.js static files)
     * - _next/image   (Next.js image optimization)
     * - favicon.ico
     * - Public folders served directly (images, videos, fonts, captions)
     * - Well-known files (manifest.json, robots.txt, sitemap.xml)
     */
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|images|videos|fonts|captions|manifest.json|robots.txt|sitemap.xml).*)',
    ],
};

// Phase 2: Batch image compression script
// Converts all hero/content images to WebP with aggressive compression
// Run with: node scripts/optimize-images.mjs

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');

// Quality settings per image type
const HERO_QUALITY = 75;    // Hero/large background images - max compression
const CONTENT_QUALITY = 80; // Content images - balanced
const GALLERY_QUALITY = 78; // Gallery images - balanced
const PROJECT_QUALITY = 75; // Project images - many files, compress hard

const TARGETS = [
    // Critical LCP images - highest priority
    { src: 'hero-fallback.jpg', dest: 'hero-fallback.webp', quality: HERO_QUALITY, width: 1920 },
    { src: 'whatsapp-hero.jpeg', dest: 'whatsapp-hero.webp', quality: CONTENT_QUALITY, width: 1200 },
    // About
    { src: 'about/about-hero.jpg', dest: 'about/about-hero.webp', quality: HERO_QUALITY, width: 1920 },
    { src: 'about/about-hero 2.jpg', dest: 'about/about-hero 2.webp', quality: HERO_QUALITY, width: 1920 },
    // Contact
    { src: 'contact/contact-hero.jpg', dest: 'contact/contact-hero.webp', quality: HERO_QUALITY, width: 1920 },
    { src: 'contact/contact-hero 2.jpg', dest: 'contact/contact-hero 2.webp', quality: HERO_QUALITY, width: 1920 },
    // Products
    { src: 'products/products-hero.jpg', dest: 'products/products-hero.webp', quality: HERO_QUALITY, width: 1920 },
    { src: 'products/products-hero 2.jpg', dest: 'products/products-hero 2.webp', quality: HERO_QUALITY, width: 1920 },
    // Services
    { src: 'services/services-hero.jpg', dest: 'services/services-hero.webp', quality: HERO_QUALITY, width: 1920 },
    { src: 'services/services-hero 2.jpg', dest: 'services/services-hero 2.webp', quality: HERO_QUALITY, width: 1920 },
    // Content
    { src: 'content/stone-bg-1.jpg', dest: 'content/stone-bg-1.webp', quality: CONTENT_QUALITY, width: 1920 },
    { src: 'content/stone-bg-1 2.jpg', dest: 'content/stone-bg-1 2.webp', quality: CONTENT_QUALITY, width: 1920 },
    { src: 'content/stone-bg-2.jpg', dest: 'content/stone-bg-2.webp', quality: CONTENT_QUALITY, width: 1920 },
    { src: 'content/stone-bg-2 2.jpg', dest: 'content/stone-bg-2 2.webp', quality: CONTENT_QUALITY, width: 1920 },
    { src: 'content/stone-texture.jpg', dest: 'content/stone-texture.webp', quality: CONTENT_QUALITY, width: 1200 },
    { src: 'content/stone-texture 2.jpg', dest: 'content/stone-texture 2.webp', quality: CONTENT_QUALITY, width: 1200 },
    { src: 'content/project-feature.jpg', dest: 'content/project-feature.webp', quality: CONTENT_QUALITY, width: 1200 },
    { src: 'content/project-feature 2.jpg', dest: 'content/project-feature 2.webp', quality: CONTENT_QUALITY, width: 1200 },
    // Gallery
    { src: 'gallery/gallery-hero.jpg', dest: 'gallery/gallery-hero.webp', quality: GALLERY_QUALITY, width: 1920 },
];

async function getFileSizeKB(filePath) {
    try {
        const s = await stat(filePath);
        return Math.round(s.size / 1024);
    } catch { return 0; }
}

async function processImage({ src, dest, quality, width }) {
    const srcPath = path.join(PUBLIC_DIR, src);
    const destPath = path.join(PUBLIC_DIR, dest);

    try {
        const beforeKB = await getFileSizeKB(srcPath);
        await sharp(srcPath)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality, effort: 6 })
            .toFile(destPath);
        const afterKB = await getFileSizeKB(destPath);
        const saved = Math.round((1 - afterKB / beforeKB) * 100);
        console.log(`✅ ${src.padEnd(45)} ${String(beforeKB + 'KB').padEnd(10)} → ${String(afterKB + 'KB').padEnd(10)} (saved ${saved}%)`);
    } catch (err) {
        console.log(`⚠️  Skipped: ${src} — ${err.message}`);
    }
}

// Also batch-compress all project images
async function processProjectImages(dir) {
    try {
        const files = await readdir(dir);
        for (const file of files) {
            if (/\.(jpg|jpeg|png)$/i.test(file) && !file.includes(' 2.')) {
                const srcPath = path.join(dir, file);
                const destPath = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
                const beforeKB = await getFileSizeKB(srcPath);
                await sharp(srcPath)
                    .resize({ width: 1200, withoutEnlargement: true })
                    .webp({ quality: PROJECT_QUALITY, effort: 6 })
                    .toFile(destPath);
                const afterKB = await getFileSizeKB(destPath);
                process.stdout.write(`✅ ${path.relative(PUBLIC_DIR, destPath).padEnd(60)} ${beforeKB}KB → ${afterKB}KB\n`);
            }
        }
    } catch (err) {
        console.log(`Could not process ${dir}: ${err.message}`);
    }
}

async function main() {
    console.log('\n📦 Starting image optimization...\n');
    console.log('File'.padEnd(45), 'Before'.padEnd(10), '  After'.padEnd(10), '  Reduction');
    console.log('─'.repeat(80));

    // Process targeted hero/content images
    for (const target of TARGETS) {
        await processImage(target);
    }

    // Process all project images
    console.log('\n📂 Processing project galleries...');
    await processProjectImages(path.join(PUBLIC_DIR, 'projects', 'wakrah'));
    await processProjectImages(path.join(PUBLIC_DIR, 'projects', 'alkhor'));

    console.log('\n✨ Optimization complete! Next: update src attributes in code to use .webp files.\n');
}

main().catch(console.error);

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { JsonLd, localBusinessSchema } from "@/components/seo/JsonLd";
import Script from "next/script";

const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton").then(mod => mod.WhatsAppButton));
import "../font-test.css";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO" });

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.aucklandcd.com';
  const canonicalUrl = `${BASE_URL}/${locale}`;
  const altLocale = locale === 'ar' ? 'en' : 'ar';

  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(BASE_URL),
    manifest: '/manifest.json',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${BASE_URL}/en`,
        'ar': `${BASE_URL}/ar`,
        'x-default': BASE_URL,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_QA" : "en_QA",
      alternateLocale: locale === "ar" ? "en_QA" : "ar_QA",
      url: canonicalUrl,
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.webp"],
    },
    icons: {
      icon: [
        { url: '/favicon.png', type: 'image/png' },
      ],
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'Auckland',
    },
  };
}

export const viewport = {
  themeColor: '#0c0c0c',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-app-light text-app-dark`}
      >
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-8T79SE4PC1`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8T79SE4PC1');
          `}
        </Script>

        {/* LocalBusiness JSON-LD */}
        <JsonLd data={localBusinessSchema} />

        <NextIntlClientProvider messages={messages}>
          <LazyMotion features={domAnimation}>
            <div className="pb-16 sm:pb-20 lg:pb-0 flex flex-col min-h-screen">
              {children}
            </div>
            <MobileBottomNav />
            <WhatsAppButton />
          </LazyMotion>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

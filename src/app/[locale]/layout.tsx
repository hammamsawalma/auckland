import type { Metadata } from "next";
import { Inter, Tajawal, Outfit } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Auckland for Construction and Development",
  description: "Specialists in high-end stone finishes.",
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0c0c0c' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0c0c' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Auckland',
  },
};

export const viewport = {
  themeColor: '#0c0c0c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents zooming to sustain native app feel
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
        className={`${inter.variable} ${tajawal.variable} ${outfit.variable} antialiased bg-app-light text-app-dark`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="pb-16 sm:pb-20 lg:pb-0 flex flex-col min-h-screen">
            {children}
          </div>
          <MobileBottomNav />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

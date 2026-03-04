import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  outputFileTracingExcludes: {
    '*': [
      'public/videos/**/*',
      'public/images/**/*'
    ]
  }
};

export default withNextIntl(nextConfig);

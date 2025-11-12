const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is stable in Next.js 14 - no experimental flag needed
};

module.exports = withNextIntl(nextConfig);

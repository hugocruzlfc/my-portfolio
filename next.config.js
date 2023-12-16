/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = withNextIntl({
  // Other Next.js configuration ...
});

module.exports = nextConfig;

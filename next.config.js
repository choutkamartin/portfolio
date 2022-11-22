const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["plus.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;

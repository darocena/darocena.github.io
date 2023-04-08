/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "assets.example.com",
      "static.vecteezy.com",
      "cdn.pixabay.com",
      "m.media-amazon.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;

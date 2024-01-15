/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "aceternity.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "images.pexels.com" },
      { hostname: "pbs.twimg.com" },
    ],
  },
};

module.exports = nextConfig;

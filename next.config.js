/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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

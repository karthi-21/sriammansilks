import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sri Amman Silks and Traders",
    short_name: "Sri Amman Silks",
    description:
      "Looking for style, quality, and affordability? You've found the right place. Shopping is now easier than ever - visit Sri Ammans Silks and Traders, Minnampalli",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#2fd4d5",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Amman Silks and Traders — Minnampalli, Salem",
  description:
    "Sri Amman Silks and Traders — your trusted family textile shop in Minnampalli, Salem since 2010. Quality sarees, shirts, chudidhars and more from top brands at honest prices.",
  keywords: [
    "Sri Amman Silks and Traders",
    "textile shop Salem",
    "sarees Minnampalli",
    "shirts Salem",
    "chudidhars Salem",
    "Ramraj vivegam",
    "Jockey",
    "Poomer",
    "online shopping Salem",
    "dhoti Salem",
    "silk sarees",
    "cotton sarees",
    "branded clothing Salem",
  ],
  metadataBase: new URL("https://sriammansilks.com/"),
  openGraph: {
    title: "Sri Amman Silks and Traders",
    description:
      "Trusted family textile shop in Minnampalli, Salem since 2010.",
    images: "/logo.png",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-stone-800 antialiased">
        {children}
      </body>
    </html>
  );
}

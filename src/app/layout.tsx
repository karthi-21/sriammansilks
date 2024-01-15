import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sri Amman Silks",
  description:
    "Looking for style, quality, and affordability? You've found the right place. Shopping is now easier than ever - visit Sri Ammans Silks and Traders, Minnampalli",
  keywords: [
    "Sri Amman Silks and Traders",
    "SAS",
    "SAS Online Shopping",
    "Online Shopping",
    "Clothing",
    "Suiting",
    "Dressing",
    "Cloths Online",
    "Online Dress Shop",
    "vesti",
    "vesti online",
    "Shirts Online",
    "Dhoti Online",
    "Saree Online",
    "Sarees Online",
    "Inner wears",
    "Inner wears online",
    "sarees",
    "shirts",
    "pants",
    "jeans",
    "dhoti",
    "shirt",
    "34th pants",
    "half pants",
    "trouser",
    "lower",
    "night pant",
    "cotton pant",
    "jean cotton",
    "cotton shirts",
    "sriammansiks",
    "sir amman silks",
    "online shopping salem",
    "sarees near salem",
    "online shopping near salem",
    "online shopping near me",
  ],
  metadataBase: new URL("https://sriammansilks.com/"),
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen text-gray-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

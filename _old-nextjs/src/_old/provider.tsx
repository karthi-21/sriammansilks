"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ParallaxProvider>{children}</ParallaxProvider>
    </ThemeProvider>
  );
}

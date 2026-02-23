import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold:           "#C9A84C",
        "gold-light":   "#E8D5A3",
        "gold-dark":    "#9A7A2E",
        maroon:         "#6B0F1A",
        "maroon-dark":  "#4A0A12",
        "maroon-light": "#9B2335",
        cream:          "#FAF7F2",
        "cream-dark":   "#F0EAE0",
        "cream-border": "#E4D9C8",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

export default config;

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const plugin = require("tailwindcss/plugin");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "3xl": "1980px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {
        primary: "#2fd4d5",
        secondary: "#09c6ed",
        tertiary: "#7df3a5",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        DEFAULT: "1px 1px 1px white",
        primary: "1px 1px 1px #2fd4d5",
        "primary-lg": "4px 4px 1px #2fd4d5",
        "glow-primary": "0px 2px 16px #2fd4d5",
        secondary: "1px 1px 1px #09c6ed",
        "secondary-lg": "4px 4px 1px #09c6ed",
        "glow-secondary": "0px 2px 16px #09c6ed",
        tertiary: "1px 1px 1px #7df3a5",
        "tertiary-lg": "4px 4px 1px #7df3a5",
        "glow-tertiary": "0px 2px 16px #7df3a5",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;

export default config;

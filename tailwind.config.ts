import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d1b4b",
          light: "#1a2d6b",
          dark: "#080f2a",
        },
        crimson: "#e8273a",
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0d1b4b 60%, #8b1a2a 100%)",
        "card-gradient":
          "linear-gradient(145deg, #1a2d6b 0%, #0d1b4b 100%)",
      },
      keyframes: {
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "floatUp 4s ease-in-out infinite",
        "fade-slide": "fadeSlideIn 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
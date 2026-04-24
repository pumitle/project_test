import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        brand: {
          navy: "#0c1f52",
          "navy-dark": "#091744",
          "navy-mid": "#0f2860",
          red: "#c0392b",
          "red-dark": "#962d22",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(120deg, #0c1f52 45%, #5c1a1a 100%)",
        "card-red":
          "linear-gradient(135deg, #c0392b 0%, #962d22 100%)",
      },
      animation: {
        "float": "float 3.5s ease-in-out infinite",
        "pulse-slow": "pulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

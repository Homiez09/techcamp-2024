import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "primary-texture": "linear-gradient(to bottom, transparent, #06011F)",
        "secondary-texture": "linear-gradient(to top, transparent, #06011F), url('/assets/background/loop-pixel-bg.gif')",
      },
      colors: {
        primary: "#06011F",
        secondary: "#EC1C24",
      },
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      }
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-shadow")],
};
export default config;
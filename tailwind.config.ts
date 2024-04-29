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
        "primary-texture":  "linear-gradient(to bottom, transparent, #06011F), url('/assets/background/loop-bg-small.gif')",
        "secondary-texture":  "linear-gradient(to top, transparent, #06011F), url('/assets/background/loop-pixel-bg.gif')",
      },
      colors: {
        primary: "#06011F",
        secondary: "#EC1C24",
      },
    },
  },
  plugins: [],
};
export default config;

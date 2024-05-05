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
        navbarUp: 'hiddenNavbarUp 0.3s ease-in-out',
        navbarDown: 'hiddenNavbarDown 0.3s ease-in-out',
        navbarMobileMenu: 'showMobileMenu 0.3s ease-in-out',
        navbarMobileMenuHidden: 'hiddenMobileMenu 0.3s ease-in-out'
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
        hiddenNavbarUp: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },
        hiddenNavbarDown: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        showMobileMenu: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        hiddenMobileMenu: {
          '0%': {
            transform: 'translateY(0)',
            height: '100vh',
            background: '#06011F',
          },
          '100%': {
            transform: 'translateY(-40%)',
            height: '20vh',
            background: 'transparent'
          },
        },
      }
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-shadow")],
};
export default config;
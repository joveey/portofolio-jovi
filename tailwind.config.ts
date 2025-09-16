// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#050816',
        'secondary': '#aaa6c3',
        'tertiary': '#151030',
        'accent': '#915eff',
      },
      boxShadow: {
        'card': '0px 35px 120px -15px #211e35',
        'glow': '0 0 20px rgba(145, 94, 255, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
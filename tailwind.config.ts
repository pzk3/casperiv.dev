import { Config } from "tailwindcss";

const tailwindConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      poppins: ["var(--font-poppins)", "sans-serif"],
      sans: ["var(--font-inter)", "var(--font-poppins)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F5F0E8",
        secondary: "#101010",
        gray: {
          dark: "#343233",
          light: "#5A5658",
          extralight: "#E0E0E0",
        },
        accent: "#fedc08",
      },
      screens: {
        md: "1050px",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default tailwindConfig;

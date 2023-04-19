import { Config } from "tailwindcss";
import { fontFamily, spacing } from "tailwindcss/defaultTheme";

const tailwindConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", ...fontFamily.sans],
      poppins: ["var(--font-poppins)", ...fontFamily.sans],
      "fira-code": ["var(--font-fira-code)", ...fontFamily.mono],
      sans: ["var(--font-inter)", "var(--font-poppins)", ...fontFamily.sans],
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
        tall: { raw: "(min-height: 1000px)" },
      },
      typography: (theme: (str: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme("colors.secondary"),
            code: {
              backgroundColor: theme("colors.gray.300"),
              color: theme("colors.secondary"),
            },
            "[data-info]": {
              a: {
                color: theme("colors.secondary"),
              },
            },
            "a,figcaption": {
              color: theme("colors.neutral.600"),
            },
            "h2,h3,h4": {
              color: theme("colors.secondary"),
              "scroll-margin-top": spacing[32],
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default tailwindConfig;

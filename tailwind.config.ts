import type { Config } from "tailwindcss";
import { fontFamily, spacing } from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

const tailwindConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", ...fontFamily.sans],
      poppins: ["var(--font-poppins)", ...fontFamily.sans],
      "fira-code": ["var(--font-fira-code)", ...fontFamily.mono],
      sans: ["var(--font-inter)", "var(--font-poppins)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        accent: "#FF7b00",
        primary: "#F5F0E8",
        secondary: "#101010",
        gray: {
          dark: "#343233",
          light: "#5A5658",
          extralight: "#E0E0E0",
        },
      },
      screens: {
        md: "1050px",
        tall: { raw: "(min-height: 1000px)" },
      },
      typography: (theme: (str: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.dark"),
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
} satisfies Config;

export default tailwindConfig;

const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-cascadia-mono)", ...fontFamily.mono],
        title: ["var(--font-unbounded)", ...fontFamily.sans],
        sans: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["PlayfairDisplay", ...fontFamily.serif],
      },
      maxWidth: {
        layout: "60rem",
      },
      borderWidth: {
        DEFAULT: "1.75px",
      },
      height: {
        1.75: "1.75px",
      },
      colors: {
        primary: "#ffffff",
        secondary: {
          DEFAULT: "#343233",
          light: "#707070",
          dark: "#D5D5D5",
          "dark-accent": "#B5B5B5",
        },
        accent: {
          DEFAULT: "#366CA2",
          light: "#e4ebf2",
        },

        // primary: "#F9FBFC",
        // "primary-dark": "#eaeaea",
        // secondary: "#343233",
        // "secondary-light": "#535052",
      },
      screens: {
        xs: "400px",
      },
      // thanks to https://github.com/leerob/leerob.io/blob/main/tailwind.config.js
      typography: (theme) => ({
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
};

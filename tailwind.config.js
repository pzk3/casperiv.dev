const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  content: ["./src/**/*.tsx", "./src/**/*.mdx"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-cascadia-mono)", ...fontFamily.mono],
        sans: ["var(--font-rubik)", ...fontFamily.sans],
        serif: ["PlayfairDisplay", ...fontFamily.serif],
      },
      borderWidth: {
        DEFAULT: "1.75px",
      },
      colors: {
        primary: "#F9FBFC",
        "primary-dark": "#eaeaea",
        secondary: "#343233",
        "secondary-light": "#535052",
        /**
         * blues:
         * - #2b303a
         * - #2c213d
         * - #504773
         * - #144b46
         * - #2c3a3a
         */
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

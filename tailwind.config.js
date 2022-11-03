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
        // dark: {
        //   css: {
        //     color: theme("colors.gray.300"),
        //     code: {
        //       backgroundColor: "#343a40",
        //       color: theme("colors.gray.200"),
        //     },
        //     a: {
        //       color: theme("colors.gray.300"),
        //     },
        //     figcaption: {
        //       color: theme("colors.gray.400"),
        //     },
        //     "h2,h3,h4": {
        //       color: theme("colors.gray.200"),
        //       "scroll-margin-top": spacing[32],
        //     },
        //     hr: { borderColor: theme("colors.neutral.700") },
        //     ol: {
        //       li: {
        //         "&:before": { color: theme("colors.gray.500") },
        //       },
        //     },
        //     ul: {
        //       li: {
        //         "&:before": { backgroundColor: theme("colors.gray.500") },
        //       },
        //     },
        //     strong: { color: theme("colors.gray.200") },
        //   },
        // },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};

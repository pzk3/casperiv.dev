const { spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: "#1F252E",
        "blue-1": "#242C38",
        "blue-2": "#171E29",
      },
      screens: {
        xs: "400px",
      },
      // thanks to https://github.com/leerob/leerob.io/blob/main/tailwind.config.js
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.800"),
            code: {
              backgroundColor: theme("colors.gray.300"),
              color: theme("colors.neutral.800"),
            },
            a: {
              color: theme("colors.neutral.900"),
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            code: {
              backgroundColor: "rgb(36 44 56)",
              color: theme("colors.gray.200"),
            },
            a: {
              color: theme("colors.gray.200"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.200"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.neutral.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.200") },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};

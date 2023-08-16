import type { Metadata } from "next";

const title = {
  default: "Casper Iversen - Web Developer",
  template: "%s - Casper Iversen",
};
const description =
  // todo: update this
  "I am a highly motivated web developer specializing in React.js, TypeScript, JavaScript, CSS, HTML and other frontend focused libraries and frameworks. Furthermore, I love open-source and fast-pace development.";

export const DEFAULT_KEYWORDS = [
  "dev-caspertheghost",
  "casper iversen",
  "ghostybot",
  "snaily cad",
  "belgium",
  "snailycad",
  "web developer",
  "developer",
  "SnailyCADv4",
];

export const SEO: Metadata = {
  title,
  creator: "Casper Iversen",
  colorScheme: "light",
  themeColor: "#161b22",
  openGraph: {
    type: "website",
    locale: "en-US",
    url: "https://casperiv.dev",
    siteName: "casperiv.dev",
    description,
    title,
    images: [{ url: "https://casperiv.dev/og-image.png", width: 1200, height: 675 }],
  },
  twitter: {
    creator: "@casperiv",
    card: "summary_large_image",
    description,
    title,
    images: ["https://casperiv.dev/og-image.png"],
  },
  alternates: {
    canonical: "https://casperiv.dev",
    types: {
      rss: "https://casperiv.dev/rss.xml",
    },
  },
  description,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "Casper Iversen", url: "https://casperiv.dev" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      "https://casperiv.dev/icons/icon-512.png",
      "https://casperiv.dev/icons/icon-144.png",
      "https://casperiv.dev/icons/icon-128.png",
      "https://casperiv.dev/favicons/favicon-32x32.png",
    ],
    shortcut: "https://casperiv.dev/icons/icon-512.png",
    apple: [
      {
        url: "https://casperiv.dev/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [{ rel: "mask-icon", url: "https://casperiv.dev/favicons/safari-pinned-tab.svg" }],
  },
};

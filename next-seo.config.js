// @ts-check

const title = {
  default: "Casper Iversen - Web Developer",
  template: "%s - Casper Iversen",
};
const description =
  "I'm a young and motivated web developer specializing in React.js, TypeScript, JavaScript, CSS, HTML and other frontend focused libraries and frameworks.";

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

/** @type {import("next").Metadata} */
export const SEO = {
  title,
  openGraph: {
    locale: "en_US",
    url: "https://caspertheghost.me",
    siteName: "caspertheghost.me",
    description,
    title,
    images: [{ url: "https://caspertheghost.me/icons/icon-128.png", height: 128, width: 128 }],
  },
  twitter: {
    creatorId: "",
    creator: "@casper124578",
    site: "@site",
    card: "summary",
    description,
    title,
  },
  alternates: {
    canonical: "https://caspertheghost.me",
  },
  description,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "Casper Iversen" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      "https://caspertheghost.me/icons/icon-512.png",
      "https://caspertheghost.me/icons/icon-144.png",
      "https://caspertheghost.me/icons/icon-128.png",
      "https://caspertheghost.me/favicons/favicon-32x32.png",
    ],
    shortcut: "https://caspertheghost.me/icons/icon-512.png",
    apple: [
      {
        url: "https://caspertheghost.me/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [{ rel: "mask-icon", url: "https://caspertheghost.me/favicons/safari-pinned-tab.svg" }],
  },
};

// @ts-check

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
  title: {
    default: "Web Developer",
    template: "%s - Casper Iversen",
  },
  openGraph: {
    locale: "en_US",
    url: "https://caspertheghost.me",
    siteName: "caspertheghost.me",
    description,
    title: { default: "Web Developer", template: "%s - Casper Iversen" },
    images: [{ url: "https://caspertheghost.me/icons/icon-128.png", height: 128, width: 128 }],
  },
  twitter: {
    creatorId: "",
    creator: "@casper124578",
    site: "@site",
    card: "summary",
    description,
    title: { default: "Web Developer", template: "%s - Casper Iversen" },
  },
  alternates: {
    canonical: "https://caspertheghost.me",
  },
  description,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "Casper Iversen" }],
  manifest: "/manifest.json",
  icons: {
    icon: ["/favicons/favicon-32x32.png", "/favicons/favicon-16x16.png"],
    shortcut: "/favicons/favicon-32x32.png",
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/favicons/safari-pinned-tab.svg" }],
  },
};

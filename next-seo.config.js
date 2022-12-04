// @ts-check

const description =
  "I'm a young and motivated web developer specializing in React.js, TypeScript, JavaScript, CSS, HTML and other frontend focused libraries and frameworks.";
const title = "Casper Iversen - Web Developer";

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

/** @type {import("next-seo").DefaultSeoProps} */
export const SEO = {
  title,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caspertheghost.me",
    site_name: "caspertheghost.me",
    description,
    title,
    images: [{ url: "https://caspertheghost.me/icons/icon-128.png", height: 128, width: 128 }],
  },
  twitter: {
    handle: "@casper124578",
    site: "@site",
    cardType: "summary",
  },
  canonical: "https://caspertheghost.me",
  defaultTitle: title,
  description,
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width" },
    { name: "keywords", content: DEFAULT_KEYWORDS.join(", ") },
    { name: "msapplication-TileColor", content: "#f9fbfc" },
    { name: "author", content: "Casper Iversen" },
  ],
  additionalLinkTags: [
    { rel: "manifest", href: "/manifest.json" },
    { rel: "apple-touch-icon", href: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#161b22" },
    { rel: "icon", type: "image/png", href: "/favicons/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", type: "image/png", href: "/favicons/favicon-16x16.png", sizes: "16x16" },
  ],
};

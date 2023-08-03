/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://casperiv.dev",
  generateRobotsTxt: true,
  sitemapBaseFileName: "sitemap",
  changefreq: "weekly",
  transform(config, path) {
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0 };
    }

    if (["/blog", "/about", "/projects"].includes(path)) {
      return {
        loc: path,
        priority: 0.8,
        changefreq: "daily",
      };
    }

    if (["/snippets", "/gallery", "/thanks"].includes(path)) {
      return {
        loc: path,
        priority: 0.7,
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: 0.3,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

export default config;

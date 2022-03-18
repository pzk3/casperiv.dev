import { SSRProvider } from "@react-aria/ssr";
import "styles/globals.scss";
import type { AppProps } from "next/app";
import { Nav } from "components/Nav";
import { Footer } from "components/Footer";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import { SEO } from "../../next-seo.config.js";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <ThemeProvider storageKey="caspertheghost.me_theme" attribute="class">
        <DefaultSeo {...SEO} />
        <Nav />
        <Component {...pageProps} />
        <Footer />
        {process.env.NODE_ENV === "production" ? (
          <script
            async
            defer
            data-website-id={process.env.UMAMI_SITE_ID}
            src={process.env.UMAMI_URL}
          />
        ) : null}
      </ThemeProvider>
    </SSRProvider>
  );
}

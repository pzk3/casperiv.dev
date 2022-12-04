"use client";

import { SSRProvider } from "@react-aria/ssr";
import "styles/globals.scss";
import { Nav } from "components/nav";
import { Footer } from "components/footer";
import { Rubik } from "@next/font/google";
import localFont from "@next/font/local";
import Script from "next/script";
import { Layout } from "components/layout";
import { NextSeo } from "next-seo";
import { SEO } from "next-seo.config";
import clsx from "clsx";

const rubikFont = Rubik({ variable: "--font-rubik", subsets: ["latin"] });
const cascadiaMonoFont = localFont({
  src: "../../public/fonts/CascadiaMono.woff2",
  display: "optional",
  variable: "--font-cascadia-mono",
  fallback: ["Courier New", "monospace"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={clsx(rubikFont.variable, cascadiaMonoFont.variable)} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <NextSeo useAppDir {...SEO} />
      </head>

      <body className="bg-primary text-secondary min-h-screen">
        <SSRProvider>
          <Nav />

          <Layout>{children}</Layout>

          <Footer />
        </SSRProvider>
      </body>
      {process.env.NODE_ENV === "production" ? (
        <Script
          async
          defer
          data-website-id={process.env.UMAMI_SITE_ID}
          src={process.env.UMAMI_URL}
        />
      ) : null}
    </html>
  );
}

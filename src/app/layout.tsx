import "styles/globals.scss";
import { Nav } from "components/nav";
import { Footer } from "components/footer";
import { Layout } from "components/layout";
import clsx from "clsx";
import { AnalyticsWrapper } from "components/analytics";
import { Providers } from "./providers";
import { SEO } from "next-seo.config";
import { unboundedFont, interFont, cascadiaMonoFont } from "lib/fonts";

export const metadata = SEO;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={clsx(unboundedFont.variable, interFont.variable, cascadiaMonoFont.variable)}
      lang="en"
    >
      <body className="bg-primary text-secondary min-h-screen">
        <Providers>
          <Nav />

          <Layout>{children}</Layout>

          <Footer />
          <AnalyticsWrapper />
        </Providers>
      </body>
    </html>
  );
}

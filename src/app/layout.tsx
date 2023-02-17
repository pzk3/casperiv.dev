import "styles/globals.scss";
import { Nav } from "components/nav";
import { Footer } from "components/footer";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { Layout } from "components/layout";
import clsx from "clsx";
import { AnalyticsWrapper } from "components/analytics";
import { Providers } from "./providers";
import { SEO } from "next-seo.config";

export const metadata = SEO;

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

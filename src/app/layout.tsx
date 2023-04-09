import "styles/globals.scss";
import clsx from "clsx";
import { AnalyticsWrapper } from "components/analytics";
import { Providers } from "./providers";
import { SEO } from "next-seo.config";
import { unboundedFont, interFont, cascadiaMonoFont } from "lib/fonts";
import { Sidebar } from "components/sidebar";
import { Nav } from "components/nav";

export const metadata = SEO;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html
      className={clsx(unboundedFont.variable, interFont.variable, cascadiaMonoFont.variable)}
      lang="en"
    >
      <body className="bg-white grid grid-cols-1 lg:grid-cols-[15rem_auto] min-h-screen">
        <Providers>
          <div>
            <Sidebar />
          </div>

          <div>
            <Nav />
            <main className="w-full max-w-layout mx-auto px-4 lg:px-0 pb-7">{props.children}</main>
          </div>

          <AnalyticsWrapper />
        </Providers>
      </body>
    </html>
  );
}

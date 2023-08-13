import classNames from "classnames";
import "~/styles/globals.css";
import { mergeSeo } from "~/lib/merge-seo";
import { Providers } from "./providers";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { firaCodeFont, interFont, poppinsFont } from "~/lib/fonts";

export const metadata = mergeSeo({});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={classNames(
        "scroll-smooth",
        poppinsFont.variable,
        interFont.variable,
        firaCodeFont.variable,
      )}
    >
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

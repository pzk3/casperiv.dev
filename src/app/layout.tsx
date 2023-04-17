import classNames from "classnames";
import "~/styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import { mergeSeo } from "~/utils/merge-seo";
import { Providers } from "./providers";

export const metadata = mergeSeo({});

interface RootLayoutProps {
  children: React.ReactNode;
}

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={classNames(poppinsFont.variable, interFont.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

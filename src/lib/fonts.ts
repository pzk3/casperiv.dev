import localFont from "next/font/local";
import { Inter, Unbounded } from "next/font/google";

export const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const unboundedFont = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const cascadiaMonoFont = localFont({
  src: "../../public/fonts/CascadiaMono.woff2",
  display: "optional",
  variable: "--font-cascadia-mono",
  fallback: ["Courier New", "monospace"],
});

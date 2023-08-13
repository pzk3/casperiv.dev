import { Fira_Code, Inter, Poppins } from "next/font/google";

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const firaCodeFont = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

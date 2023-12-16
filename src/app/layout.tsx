import { ReactNode } from "react";
import "../styles/globals.css";
//import type { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://my-portfolio-hugocruzlfc.vercel.app"),
//   title: {
//     template: "%s | Hugo's Portfolio",
//     default: "Hugo's Portfolio",
//   },
//   description: "Hugo's Portfolio Website",
//   openGraph: {
//     title: "Hugo's Portfolio",
//     description: "Hugo's Portfolio Website",
//     url: "https://my-portfolio-hugocruzlfc.vercel.app",
//     siteName: "Hugo's Portfolio",
//     locale: "en_US",
//     type: "website",
//   },
// };

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}

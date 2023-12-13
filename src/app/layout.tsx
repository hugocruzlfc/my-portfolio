import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-hugocruzlfc.vercel.app"),
  title: {
    template: "%s | Hugo's Portfolio",
    default: "Hugo's Portfolio",
  },
  description: "Hugo's Portfolio Website",
  openGraph: {
    title: "Hugo's Portfolio",
    description: "Hugo's Portfolio Website",
    url: "https://my-portfolio-hugocruzlfc.vercel.app",
    siteName: "Hugo's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../styles/globals.css";
import { Providers } from "@/providers";
import { NavBar } from "@/components";

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

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          "text-black bg-white dark:text-white dark:bg-[#111010]",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <main
            className="relative"
            data-lenis-prevent
          >
            <div className="gradient-circle"></div>
            <div className="gradient-circle-bottom"></div>
            <div className="container mx-auto mb-10">
              <NavBar />
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}

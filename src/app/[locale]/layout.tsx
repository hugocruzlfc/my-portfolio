import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "@/providers";
import { Footer, NavBar } from "@/components";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "MainLayout" });

  return {
    title: {
      template: `%s | ${t("template")}`,
      default: t("default"),
    },
    description: t("description"),
    openGraph: {
      title: t("default"),
      description: t("description"),
      type: "website",
      siteName: t("default"),
      locale: "en_US",
      images: [
        {
          url: "https://my-portfolio-hugocruzlfc.vercel.app/api/og",
          alt: "Hugo Cruz's Portfolio",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={clsx(
          "bg-gray-50 text-gray-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <main
              className="relative"
              data-lenis-prevent
            >
              <div className="gradient-circle"></div>
              <div className="gradient-circle-bottom"></div>
              <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
              <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
              <div className="container mx-auto mb-10">
                <NavBar />
                {children}
                <Footer />
                <Toaster position="top-right" />
              </div>
            </main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

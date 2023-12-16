import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "@/providers";
import { NavBar } from "@/components";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

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
          "text-black bg-white dark:text-white dark:bg-[#111010]",
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
              <div className="container mx-auto mb-10">
                <NavBar />
                {children}
              </div>
            </main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/utils";
import { useTheme } from "next-themes";
import clsx from "clsx";

export const LocaleSwitcher: React.FC = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "es" : "en";
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className={clsx(
        "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300  hover:scale-105 active:scale-100  tablet:first:ml-0  link",
        theme === "dark"
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100"
      )}
    >
      {t("locale", { locale: otherLocale })}
    </Link>
  );
};

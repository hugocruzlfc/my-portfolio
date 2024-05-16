import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "es"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/resume": {
    en: "/resume",
    es: "/curriculo",
  },
  "/contact": {
    en: "/contact",
    es: "/contacto",
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;

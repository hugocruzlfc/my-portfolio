"use client";

import React from "react";
import { useTranslations } from "next-intl";

export const Footer: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-20">
      <small className="mb-2 block text-xs">
        &copy; 2023 Hugo Cruz de la Torres. {t("rights")}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("about")}</span> {t("built")} React &
        Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer
        Motion, React Email & Resend, {t("hosting")}.
      </p>
    </footer>
  );
};

"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { SectionHeading } from "../SectionHeading";

export const Education: React.FC = () => {
  const t = useTranslations("Education");

  return (
    <div className="mt-10">
      <SectionHeading>{t("title")}</SectionHeading>
      <div className="mt-2 text-center">
        <h2 className="text-lg">{t("universityName")}</h2>
        <h3 className="text-sm opacity-75">{t("universityDate")}</h3>
        <p className="text-sm mt-2 opacity-50">{t("universityPara")}</p>
      </div>
    </div>
  );
};

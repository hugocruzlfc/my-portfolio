"use client";

import React from "react";
import { SectionHeading } from "../SectionHeading";
import { languagesData, frameworksData, othersData } from "@/data";
import { SkillSection } from "../SkillSection";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <SkillSection
        name={t("languages")}
        sectionData={languagesData}
      />
      <SkillSection
        name={t("frameworks")}
        sectionData={frameworksData}
      />
      <SkillSection
        name={t("others")}
        sectionData={othersData}
      />
    </section>
  );
}

"use client";

import React from "react";
import { projectsData } from "@/data";
import { SectionHeading } from "../SectionHeading";
import { Project } from "../Project";
import { useTranslations } from "next-intl";

export const Projects: React.FC = ({}) => {
  const t = useTranslations("Projects");
  return (
    <section
      id="workId"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { SectionHeading } from "../SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/data";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export const Experience: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations("Works");

  return (
    <section
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={t(item.date)}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(17, 24, 39)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{t(item.position)}</h3>
              <p className="font-normal !mt-0">{t(item.type)}</p>
              <p className="font-normal !mt-0">{t(item.location)}</p>
              <p className="!my-2 !font-normal text-gray-700 dark:text-white/75">
                {t(item.description)}
              </p>
              <p className="font-normal !mt-0">{t(item.company)}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

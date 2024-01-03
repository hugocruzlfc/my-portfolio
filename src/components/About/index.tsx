"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

export const About: React.FC = () => {
  const t = useTranslations("AboutSection");

  return (
    <motion.section
      className="laptop:mb-28 max-w-[45rem] text-center leading-8 tablet:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="aboutId"
    >
      <SectionHeading> {t("title")}</SectionHeading>
      <p className="mb-3">{t("paragraphOne")}</p>
      <p className="mb-3">{t("paragraphTwo")}</p>
      <p className="italic">{t("paragraphThree")}</p>
    </motion.section>
  );
};

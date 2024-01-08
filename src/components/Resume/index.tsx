"use client";
import React from "react";
import { Education, Experience, Socials } from "@/components";
import { useTranslations } from "next-intl";

export const Resume = () => {
  const t = useTranslations("Resume");

  return (
    <>
      <div className="mt-10 w-full flex flex-col items-center px-4">
        <div className="text-center laptopl:px-40">
          <h2 className="text-xl mt-5">👋 {t("tagline")}</h2>
          <h2 className="text-md laptopl:text-xl mt-10 opacity-50">
            {t("description")}
          </h2>
        </div>
        <div className="mt-2 mb-20">
          <Socials />
        </div>
        <div className="mt-5">
          <Experience />
        </div>
        <Education />
      </div>
    </>
  );
};

"use client";
import React from "react";

import { ProjectResume, Socials } from "@/components";
import { useTheme } from "next-themes";
// Data
import data from "../../data/portfolio.json";
import { useThemeContext } from "@/context";

export const Resume = () => {
  const { name, resume } = data;
  const { resolvedTheme } = useThemeContext();

  return (
    <>
      <div className="mt-10 w-full flex flex-col items-center">
        <div
          className={`w-full ${
            resolvedTheme === "dark" ? "bg-slate-800" : "bg-gray-50"
          } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
        >
          <h1 className="text-3xl font-bold">{name}</h1>
          <h2 className="text-xl mt-5">{resume.tagline}</h2>
          <h2 className="w-4/5 text-xl mt-5 opacity-50">
            {resume.description}
          </h2>
          <div className="mt-2">
            <Socials />
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-bold">Experience</h1>

            {resume.experiences.map(
              ({ id, dates, type, position, bullets }) => (
                <ProjectResume
                  key={id}
                  dates={dates}
                  type={type}
                  position={position}
                  bullets={bullets}
                ></ProjectResume>
              )
            )}
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-bold">Education</h1>
            <div className="mt-2">
              <h2 className="text-lg">{resume.education.universityName}</h2>
              <h3 className="text-sm opacity-75">
                {resume.education.universityDate}
              </h3>
              <p className="text-sm mt-2 opacity-50">
                {resume.education.universityPara}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex mob:flex-col desktop:flex-row justify-between">
              {resume.languages && (
                <div className="mt-2 mob:mt-5">
                  <h2 className="text-lg">Languages</h2>
                  <ul className="list-disc">
                    {resume.languages.map((language, index) => (
                      <li
                        key={index}
                        className="ml-5 py-2"
                      >
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {resume.frameworks && (
                <div className="mt-2 mob:mt-5">
                  <h2 className="text-lg">Frameworks</h2>
                  <ul className="list-disc">
                    {resume.frameworks.map((framework, index) => (
                      <li
                        key={index}
                        className="ml-5 py-2"
                      >
                        {framework}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {resume.others && (
                <div className="mt-2 mob:mt-5">
                  <h2 className="text-lg">Others</h2>
                  <ul className="list-disc">
                    {resume.others.map((other, index) => (
                      <li
                        key={index}
                        className="ml-5 py-2"
                      >
                        {other}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

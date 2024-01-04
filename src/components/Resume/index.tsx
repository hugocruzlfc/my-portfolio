import React from "react";
import { ProjectResume, Socials } from "@/components";

// Data
import data from "../../data/portfolio.json";

export const Resume = () => {
  const { name, resume } = data;

  return (
    <>
      <div className="mt-10 w-full flex flex-col items-center px-4">
        <div className={`w-full max-w-4xl p-20 mob:p-5 desktop:p-20`}>
          <div className="text-center">
            <h2 className="text-xl mt-5">{resume.tagline}</h2>
            <h2 className="text-xl mt-5 opacity-50">{resume.description}</h2>
          </div>
          <div className="mt-2 mb-20">
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
          <div className="mt-10">
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
        </div>
      </div>
    </>
  );
};

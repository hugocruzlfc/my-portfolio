"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  ServiceCard,
  Socials,
  WorkCard,
  About,
  SectionDivider,
  Skills,
  Projects,
} from "@/components";
import { stagger } from "@/animations";

export const Home: React.FC = () => {
  // Translations
  const t = useTranslations("IndexPage");

  // Ref
  const textOne = useRef<HTMLHeadingElement | null>(null);
  const textTwo = useRef<HTMLHeadingElement | null>(null);
  const textThree = useRef<HTMLHeadingElement | null>(null);
  const textFour = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    stagger(
      [
        textOne?.current,
        textTwo?.current,
        textThree?.current,
        textFour?.current,
      ],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
      <div className="laptop:mt-20 mt-10">
        <div className="mt-5">
          <h2
            ref={textOne}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold "
          >
            {t("headerTaglineOne")}
          </h2>
          <h2
            ref={textTwo}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold"
          >
            {t("headerTaglineTwo")}
          </h2>
          <h2
            ref={textThree}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold"
          >
            {t("headerTaglineThree")}
          </h2>
          <h2
            ref={textFour}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold "
          >
            {t("headerTaglineFour")}
          </h2>
        </div>
      </div>
      <Socials />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      {/* <div
        className="mt-10 laptop:mt-30 p-2 laptop:p-0"
        id="workId"
      >
        <h1 className="text-2xl text-bold">Work.</h1>
        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {data.projects.map((project) => (
            <WorkCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          ))}
        </div>
        Skills
      Projects</div>
      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
        <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
          {data.services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

"use client";
import { useEffect, useRef } from "react";
import { Header, ServiceCard, Socials, WorkCard, Footer } from "@/components";
import { stagger } from "@/animations";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef<HTMLDivElement | HTMLHeadingElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | HTMLHeadingElement | null>(null);
  const textOne = useRef<HTMLHeadingElement | null>(null);
  const textTwo = useRef<HTMLHeadingElement | null>(null);
  const textThree = useRef<HTMLHeadingElement | null>(null);
  const textFour = useRef<HTMLHeadingElement | null>(null);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

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
    <>
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="laptop:mt-20 mt-10">
        <div className="mt-5">
          <h1
            ref={textOne}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
          >
            {data.headerTaglineOne}
          </h1>
          <h1
            ref={textTwo}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
          >
            {data.headerTaglineTwo}
          </h1>
          <h1
            ref={textThree}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
          >
            {data.headerTaglineThree}
          </h1>
          <h1
            ref={textFour}
            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
          >
            {data.headerTaglineFour}
          </h1>
        </div>

        <Socials className="mt-2 laptop:mt-5" />
      </div>
      <div
        className="mt-10 laptop:mt-30 p-2 laptop:p-0"
        ref={workRef}
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
      </div>
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
      </div>
      <div
        className="mt-10 laptop:mt-40 p-2 laptop:p-0"
        ref={aboutRef}
      >
        <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
        <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
          {data.aboutpara}
        </p>
      </div>
      <Footer />
    </>
  );
}

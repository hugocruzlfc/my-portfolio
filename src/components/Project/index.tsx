"use client";

import { useRef } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

type ProjectProps = (typeof projectsData)[number];

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
}) => {
  const t = useTranslations("Projects");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 laptop:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden laptop:pr-8 relative laptop:h-[22rem] hover:bg-gray-200 transition laptop:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 laptop:pl-10 laptop:pr-2 laptop:pt-10 laptop:max-w-[50%] flex flex-col h-full laptop:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{t(`${title}`)}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {t(`${description}`)}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 laptop:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden laptop:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

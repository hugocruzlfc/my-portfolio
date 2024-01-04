"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export interface SkillSectionProps {
  name: string;
  sectionData: readonly string[];
}

export const SkillSection: React.FC<SkillSectionProps> = ({
  name,
  sectionData,
}) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-medium capitalize mb-8 text-center">
        {name}
      </h3>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {sectionData.map((currentSection, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {currentSection}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";

export const SectionDivider: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden laptop:block tablet:block dark:bg-opacity-20 "
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
};

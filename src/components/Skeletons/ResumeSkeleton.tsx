"use client";
import React from "react";
import style from "@/styles/skeleton.module.css";

export const ResumeSkeleton: React.FC = () => {
  return (
    <div className=" w-full flex flex-col items-center mt-48 animate-pulse">
      <div
        className={`w-full max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm ${style.resume__skeleton}`}
      >
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

const Block = () => (
  <>
    <div className={`${style.skeleton__line} w-3/4`}></div>
    <div className={`${style.skeleton__line} w-1/2`}></div>
    <div className={`${style.skeleton__line} w-4/5`}></div>
    <div className={`${style.skeleton__block} w-1/2`}></div>
    <div className={style.skeleton__line}></div>
  </>
);

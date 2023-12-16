"use client";
import React from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  onClick?: () => void;
  classes?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  classes,
}) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={clsx(
          "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link",
          theme === "dark" ? "bg-white text-black" : "bg-black text-white",
          { classes }
        )}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        "text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:scale-105 active:scale-100 tablet:first:ml-0 link",
        theme === "dark"
          ? "hover:bg-slate-600 text-white"
          : "hover:bg-slate-100",
        { classes }
      )}
    >
      {children}
    </button>
  );
};

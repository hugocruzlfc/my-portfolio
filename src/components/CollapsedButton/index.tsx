"use client";
import React from "react";
import Image from "next/image";

export interface CollapsedButtonProps {
  theme?: string;
  open: boolean;
}

export const CollapsedButton: React.FC<CollapsedButtonProps> = ({
  theme,
  open,
}) => {
  return (
    <Image
      className="h-5 ml-2"
      src={`/icons/${
        !open
          ? theme === "dark"
            ? "menu-white.svg"
            : "menu.svg"
          : theme === "light"
          ? "cancel.svg"
          : "cancel-white.svg"
      }`}
      alt="Collapsed button"
      width={24}
      height={24}
    />
  );
};

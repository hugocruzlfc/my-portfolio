import React from "react";
import Image from "next/image";

export interface ThemeSwitcherProps {
  theme?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme }) => {
  return (
    <Image
      className="h-6"
      src={`/icons/${theme === "dark" ? "sun.svg" : "moon.svg"}`}
      alt="Theme switcher"
      width={24}
      height={24}
    />
  );
};

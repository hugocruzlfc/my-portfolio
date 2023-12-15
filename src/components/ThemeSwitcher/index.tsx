"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Spinner } from "../Loaders";

export interface ThemeSwitcherProps {
  theme?: string;
  open?: boolean;
  isMenuButton?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  theme,
  isMenuButton,
  open,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Spinner />;
  }
  return (
    <>
      {isMenuButton ? (
        <Image
          className="h-5"
          src={`/icons/${
            !open
              ? theme === "dark"
                ? "menu-white.svg"
                : "menu.svg"
              : theme === "light"
              ? "cancel.svg"
              : "cancel-white.svg"
          }`}
          alt="Menu button"
          width={24}
          height={24}
        />
      ) : (
        <Image
          className="h-6"
          src={`/icons/${theme === "dark" ? "sun.svg" : "moon.svg"}`}
          alt="Theme switcher"
          width={24}
          height={24}
        />
      )}
    </>
  );
};

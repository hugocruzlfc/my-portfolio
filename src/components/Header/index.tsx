"use client";
import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "../Button";
import Image from "next/image";
import data from "../../data/portfolio.json";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";

interface HeaderProps {
  handleWorkScroll?: () => void;
  handleAboutScroll?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  handleWorkScroll,
  handleAboutScroll,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isResume = pathname === "/resume";

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                <Button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                >
                  <ThemeSwitcher theme={resolvedTheme} />
                </Button>

                <Popover.Button>
                  <Image
                    className="h-5"
                    src={`/icons/${
                      !open
                        ? resolvedTheme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : resolvedTheme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu button"
                    width={24}
                    height={24}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                resolvedTheme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                {!isResume ? (
                  <>
                    <Button onClick={handleWorkScroll}>Work</Button>
                    <Button onClick={handleAboutScroll}>About</Button>
                  </>
                ) : (
                  <Link href="/">
                    <Button>Home</Button>
                  </Link>
                )}

                <Button>Resume</Button>

                <Button
                  onClick={() => window.open("mailto:hello@chetanverma.com")}
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          resolvedTheme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <Link href="/">
          <h1 className="font-medium cursor-pointer mob:p-2 laptop:p-0">
            {name}
          </h1>
        </Link>

        <div className="flex">
          {!isResume ? (
            <>
              <Button onClick={handleWorkScroll}>Work</Button>
              <Button onClick={handleAboutScroll}>About</Button>
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            </>
          ) : (
            <Link href="/">
              <Button>Home</Button>
            </Link>
          )}

          <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
            Contact
          </Button>

          <Button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <ThemeSwitcher theme={resolvedTheme} />
          </Button>
        </div>
      </div>
    </>
  );
};

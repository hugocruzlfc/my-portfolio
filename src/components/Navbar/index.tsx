"use client";
import React from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";
import { Button } from "../Button";
import data from "../../data/portfolio.json";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const lenis = useLenis();

  const isResume = pathname === "/resume";

  const { name } = data;

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
                  <ThemeSwitcher
                    theme={resolvedTheme}
                    isMenuButton
                    open={open}
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
                    <Button
                      onClick={() =>
                        lenis.scrollTo("#workId", {
                          duration: 2,
                          easing: (t) =>
                            t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
                        })
                      }
                    >
                      Work
                    </Button>
                    <Button
                      onClick={() =>
                        lenis?.scrollTo("#aboutId", {
                          duration: 2,
                          easing: (t) =>
                            t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
                        })
                      }
                    >
                      About
                    </Button>
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

                <Button>Contact</Button>
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
        <Link
          href="/"
          className="flex items-center justify-center cursor-pointer gap-2"
        >
          <Image
            src="/personal.png"
            alt="Arrow"
            width={65}
            height={65}
          />
          <h1 className="font-medium cursor-pointer mob:p-2 laptop:p-0">
            {name}
          </h1>
        </Link>

        <div className="flex">
          {!isResume ? (
            <>
              <Button
                onClick={() =>
                  lenis.scrollTo("#workId", {
                    duration: 2,
                    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
                  })
                }
              >
                Work
              </Button>
              <Button
                onClick={() =>
                  lenis?.scrollTo("#aboutId", {
                    duration: 2,
                    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
                  })
                }
              >
                About
              </Button>
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
          <Button>Contact</Button>
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
"use client";
import React from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";
import { Button } from "../Button";
import data from "../../data/portfolio.json";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { usePathname } from "@/utils";
import { CollapsedButton } from "../CollapsedButton";
import { Profile } from "../Profile";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const lenis = useLenis();

  const t = useTranslations("NavLinks");

  const isResume = pathname === "/resume";

  const { name } = data;

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <Profile
                name={name}
                collapsed
              />
              <div className="flex items-center">
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <ThemeSwitcher theme={theme} />
                </Button>
                <LocaleSwitcher />

                <Popover.Button>
                  <CollapsedButton
                    theme={theme}
                    open={open}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
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
                      {t("work")}
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
                      {t("about")}
                    </Button>
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      {t("resume")}
                    </Button>
                  </>
                ) : (
                  <Link href="/">
                    <Button>{t("home")}</Button>
                  </Link>
                )}

                <Button>{t("contact")}</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky  dark:text-white top-0 z-10 tablet:flex`}
      >
        <Profile name={name} />

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
                {t("work")}
              </Button>
              <Button
                onClick={() =>
                  lenis?.scrollTo("#aboutId", {
                    duration: 2,
                    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
                  })
                }
              >
                {t("about")}
              </Button>
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                {t("resume")}
              </Button>
            </>
          ) : (
            <Link href="/">
              <Button>{t("home")}</Button>
            </Link>
          )}
          <Button> {t("contact")}</Button>
          <LocaleSwitcher />
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <ThemeSwitcher theme={theme} />
          </Button>
        </div>
      </div>
    </>
  );
};

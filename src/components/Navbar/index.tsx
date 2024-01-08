"use client";
import React from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";
import { Button } from "../Button";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../LocaleSwitcher";
import { usePathname } from "@/utils";
import { CollapsedButton } from "../CollapsedButton";
import { Profile } from "../Profile";
import { pathnames } from "@/utils";

const NAME = "Hugo Cruz de la Torres";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const lenis = useLenis();

  const pathRoutes = Object.keys(pathnames);

  const t = useTranslations("NavLinks");

  const isResume = pathname === "/resume";
  const isContact = pathname === "/contact";
  const isHome = pathname === "/";

  const handleNavigatePage = () => {
    if (isResume) {
      router.push("/contact");
    } else if (isContact) {
      router.push("/resume");
    }
  };

  const renderNavigateLabels = () => {
    if (isResume) {
      return t("contact");
    } else if (isContact) {
      return t("resume");
    }
  };

  const renderButtons = () => {
    return (
      <>
        {isHome ? (
          <>
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
                lenis.scrollTo("#skillId", {
                  duration: 2,
                  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
                })
              }
            >
              {t("skills")}
            </Button>
            <Button
              onClick={() => router.push("/resume")}
              classes="first:ml-1"
            >
              {t("resume")}
            </Button>
            <Button onClick={() => router.push("/contact")}>
              {t("contact")}
            </Button>
          </>
        ) : (
          <>
            <Link href="/">
              <Button>{t("home")}</Button>
            </Link>
            {pathRoutes.includes(pathname) && (
              <Button onClick={handleNavigatePage}>
                {renderNavigateLabels()}
              </Button>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <Profile
                name={NAME}
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
              <div className="grid grid-cols-1">{renderButtons()}</div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky  dark:text-white top-0 z-10 tablet:flex`}
      >
        <Profile name={NAME} />

        <div className="flex">
          {renderButtons()}
          <LocaleSwitcher />
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <ThemeSwitcher theme={theme} />
          </Button>
        </div>
      </div>
    </>
  );
};

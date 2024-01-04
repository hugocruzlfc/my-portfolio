"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SubmitBtn } from "../SubmitBtn";
import { SectionHeading } from "../SectionHeading";
import { sendEmail } from "@/actions";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("ContactForm");

  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t("title")}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t("descriptionOne")}{" "}
        <a
          className="underline"
          href="mailto:hugocruzlfc@gmail.com"
        >
          hugocruzlfc@gmail.com
        </a>{" "}
        {t("descriptionTwo")}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(t("toast"));
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("emailPlaceHolder")}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t("textAreaPlaceHolder")}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

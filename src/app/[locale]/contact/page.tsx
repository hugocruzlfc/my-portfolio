import { NextPage } from "next";
import { Contact } from "@/components";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "ContactLayout" });

  return {
    title: t("title"),
  };
}

const Page: NextPage = () => {
  return (
    <section className="flex flex-col items-center mt-32 mb-32">
      <Contact />
    </section>
  );
};

export default Page;

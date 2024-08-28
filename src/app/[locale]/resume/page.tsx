import { NextPage } from "next";
import { Resume } from "@/components";
import { getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "ResumeLayout" });

  return {
    title: t("title"),
  };
}

const Page: NextPage = () => {
  return (
    <>
      <Resume />
    </>
  );
};

export default Page;

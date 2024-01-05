import { SectionHeading } from "@/components";
import { useTranslations } from "next-intl";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className=" flex flex-col items-center min-h-[73vh] pt-32">
      <SectionHeading> {t("title")}</SectionHeading>
      <p className="max-w-[460px] text-center mt-10">{t("description")}</p>
    </div>
  );
}

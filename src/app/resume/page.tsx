import { Resume } from "@/components";
import { NextPage } from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

const Page: NextPage = () => {
  return (
    <>
      <Resume />
    </>
  );
};

export default Page;

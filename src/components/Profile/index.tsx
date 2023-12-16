import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ProfileProps {
  name: string;
  collapsed?: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ name, collapsed }) => {
  const currentWidth = collapsed ? 50 : 65;
  const currentHeight = collapsed ? 50 : 65;
  return (
    <Link
      href="/"
      className="flex items-center justify-center cursor-pointer mob:gap-1 laptop:gap-4"
    >
      <Image
        src="/personal.png"
        alt="User profile picture"
        width={currentWidth}
        height={currentHeight}
      />
      <h1 className="font-medium cursor-pointer mob:p-2 laptop:p-0 ">
        {name}.
      </h1>
    </Link>
  );
};

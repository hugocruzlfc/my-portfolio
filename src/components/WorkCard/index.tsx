import React from "react";
import Image from "next/image";

interface WorkCardProps {
  img: string;
  name?: string;
  description?: string;
  onClick?: () => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  img,
  name,
  description,
  onClick,
}) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        {/* <Image
          alt={name ?? "Project Name"}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
          width={24}
          height={24}
        /> */}
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

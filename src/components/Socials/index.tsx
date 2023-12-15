import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import { MailIcon } from "../Icons";
import yourData from "../../data/portfolio.json";

interface SocialsProps {
  className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => window.open(social.link)}
        >
          {social.title === "Email Icon" ? (
            <MailIcon />
          ) : (
            <Image
              src={`/icons/${social.url}`}
              alt={social.title}
              width={24}
              height={24}
            />
          )}
        </Button>
      ))}
    </div>
  );
};

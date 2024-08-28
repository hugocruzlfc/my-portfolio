import aclProjectImg from "../../public/projects/acl-project.png";
import achsProjectImg from "../../public/projects/achs-project.png";
import sitaProjectImg from "../../public/projects/sita-project.png";
import svdProjectImg from "../../public/projects/svd-project.png";
import iberiaProjectImg from "../../public/projects/iberia-project.png";
import cmrcProjectImg from "../../public/projects/cmrc-project.png";

export const projectsData = [
  {
    title: "aclName",
    description: "aclDescription",
    tags: ["Angular", "RxJS", "NgRx", "Firebase", "Material UI", "Google Maps"],
    imageUrl: aclProjectImg,
  },
  {
    title: "achsName",
    description: "achsDescription",
    tags: [
      "React",
      "TypeScript",
      "Postgres",
      "Redux",
      "Styled Components",
      "Express",
    ],
    imageUrl: achsProjectImg,
  },
  {
    title: "sitaName",
    description: "sitaDescription",
    tags: ["React", "Fluent UI", "TypeScript", "Express", "MongoDB", "Docker"],
    imageUrl: sitaProjectImg,
  },
  {
    title: "svdName",
    description: "svdDescription",
    tags: ["React", "Next.js", "Tailwind", "SQL", "Zustand", "GraphQL"],
    imageUrl: svdProjectImg,
  },
  {
    title: "iberiaName",
    description: "iberiaDescription",
    tags: ["React", "React-Query", "Nest.js", "Postgres", "Tailwind", "CQRS"],
    imageUrl: iberiaProjectImg,
  },
  {
    title: "cmrcName",
    description: "cmrcDescription",
    tags: ["React", "Nextjs", "Prisma", "Postgres", "Shadcn", "Stripe"],
    imageUrl: cmrcProjectImg,
  },
] as const;

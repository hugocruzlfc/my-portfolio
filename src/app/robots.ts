import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://my-portfolio-hugocruzlfc.vercel.app/sitemap.xml",
    host: "https://my-portfolio-hugocruzlfc.vercel.app/",
  };
}

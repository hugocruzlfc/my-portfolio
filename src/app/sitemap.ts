export default async function sitemap() {
  let routes = ["/", "/resume", "/contact"].map((route) => ({
    url: `https://my-portfolio-hugocruzlfc.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}

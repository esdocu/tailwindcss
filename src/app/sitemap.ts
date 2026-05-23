import { MetadataRoute } from "next";
import { getDocPageSlugs } from "@/app/(docs)/docs/api";
import { getBlogPostSlugs } from "@/app/blog/api";
import { loadGuides } from "@/app/(docs)/docs/installation/framework-guides";

export const revalidate = 86400; // Revalidate daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tailwindcss.esdocu.com";

  // Static site-wide routes
  const staticRoutes = ["", "/blog", "/showcase", "/partners", "/brand", "/course"];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Static installation routes
  const installationRoutes = [
    "/docs/installation/using-vite",
    "/docs/installation/using-postcss",
    "/docs/installation/tailwind-cli",
    "/docs/installation/play-cdn",
    "/docs/installation/framework-guides",
  ];

  for (const route of installationRoutes) {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Dynamic documentation page routes
  try {
    const docSlugs = await getDocPageSlugs();
    for (const slug of docSlugs) {
      sitemapEntries.push({
        url: `${baseUrl}/docs/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  } catch (error) {
    console.error("Error generating docs sitemap entries:", error);
  }

  // Dynamic framework guide routes
  try {
    const guides = await loadGuides();
    for (const guide of guides) {
      // Add framework guide index route (e.g. /docs/installation/framework-guides/nextjs)
      sitemapEntries.push({
        url: `${baseUrl}/docs/installation/framework-guides/${guide.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });

      // Add tabs if any exist (e.g. /docs/installation/framework-guides/laravel/vite)
      if (guide.tabs) {
        for (const tab of guide.tabs) {
          sitemapEntries.push({
            url: `${baseUrl}/docs/installation/framework-guides/${guide.slug}/${tab.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.6,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error generating framework guides sitemap entries:", error);
  }

  // Dynamic blog post routes
  try {
    const blogSlugs = await getBlogPostSlugs();
    for (const slug of blogSlugs) {
      sitemapEntries.push({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  } catch (error) {
    console.error("Error generating blog sitemap entries:", error);
  }

  return sitemapEntries;
}

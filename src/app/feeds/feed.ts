import { getBlogPostBySlug, getBlogPostSlugs, nonNullable } from "@/app/blog/api";
import { Feed } from "feed";

const BASE_URL = "https://tailwindcss.com";
const BLOG_URL = `${BASE_URL}/blog`;

export async function generateFeed() {
  const feed = new Feed({
    title: "Blog de Tailwind CSS",
    description: "Todas las últimas noticias de Tailwind CSS, directamente del equipo.",
    id: BLOG_URL,
    link: BLOG_URL,
    language: "es",
    image: `${BASE_URL}/favicons/favicon-32x32.png?v=3`,
    favicon: `${BASE_URL}/favicons/favicon.ico?v=3`,
    copyright: `Todos los derechos reservados ${new Date().getFullYear()}, Tailwind Labs`,
    feedLinks: {
      rss: `${BASE_URL}/feeds/feed.xml`,
      json: `${BASE_URL}/feeds/feed.json`,
      atom: `${BASE_URL}/feeds/atom.xml`,
    },
    author: {
      name: "Adam Wathan",
      link: "https://twitter.com/@adamwathan",
    },
  });

  let slugs = await getBlogPostSlugs();
  let posts = (await Promise.all(slugs.map(getBlogPostBySlug)))
    .filter(nonNullable)
    .filter((post) => !post.meta.private);

  for (let { slug, meta } of posts) {
    feed.addItem({
      title: meta.title,
      id: meta.title,
      link: `${BLOG_URL}/${slug}`,
      description: meta.description,
      author: meta.authors.map(({ name, twitter }) => ({
        name,
        link: `https://twitter.com/${twitter}`,
      })),
      date: new Date(meta.date),
      image: meta.image ? `${BASE_URL}${meta.image.src}` : `${BASE_URL}/api/og?path=/blog/${slug}`,
    });
  }

  return feed;
}

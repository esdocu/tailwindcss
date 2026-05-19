export const dynamic = "force-static";
import { generateFeed } from "../feed";

export async function GET() {
  const feed = await generateFeed();
  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

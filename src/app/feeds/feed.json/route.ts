export const dynamic = "force-static";
import { generateFeed } from "../feed";

export async function GET() {
  const feed = await generateFeed();
  return new Response(feed.json1(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

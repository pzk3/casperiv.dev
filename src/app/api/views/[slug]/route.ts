import { redisClient } from "~/lib/redis";

export const revalidate = 0;

export async function POST(_request: Request, { params }: { params: { slug: string } }) {
  if (process.env.NODE_ENV === "development") return;

  const slug = params.slug;
  const view = await redisClient.incr(slug);

  return new Response(view.toString(10));
}

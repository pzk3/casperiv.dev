import { redisClient } from "lib/redis";

export async function POST(_request: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const view = await redisClient.incr(slug);

  return new Response(view.toString(10));
}

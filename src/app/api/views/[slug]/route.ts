import { env } from "~/env.mjs";
import { redisClient } from "~/lib/redis";

export const revalidate = 0;
export const runtime = "edge";

export async function POST(_request: Request, { params }: { params: { slug: string } }) {
  if (env.NODE_ENV === "development") {
    const count = (await redisClient.get<string>(params.slug)) ?? 0;
    return new Response(count.toString());
  }

  const slug = params.slug;
  const view = await redisClient.incr(slug);

  return new Response(view.toString(10));
}

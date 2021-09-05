import * as f from "faunadb";
import { client } from "@lib/faunadb";
import rateLimit from "express-rate-limit";
import { NextApiRequest, NextApiResponse } from "next";
import { Query, Views } from "types/Fauna";
import { middleWare } from "../mail";

// max 100 tries per 10 minutes
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

async function getViewsBySlug(slug: string): Promise<Query<Views> | null> {
  return client
    .query<Query<Views>>(f.Get(f.Match(f.Index("views_by_slug"), slug)))
    .catch(() => null);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const method = req.method as keyof typeof handlers;
  const slug = query.slug as string;

  const handlers = {
    POST: async () => {
      await middleWare(req, res, limiter);

      const data = await getViewsBySlug(slug);

      if (!data) {
        await client.query(
          f.Create(f.Collection("views"), {
            data: { slug, views: 1 },
          }),
        );

        return res.json({ data: { views: 1, slug } });
      }

      const updated = await client.query<Query<Views>>(
        f.Update(data.ref, {
          data: {
            views: data.data.views + 1,
            slug: data.data.slug,
          },
        }),
      );

      return res.json({ data: updated.data });
    },
    GET: async () => {
      const data = await getViewsBySlug(slug).catch(() => null);

      if (!data) {
        return res.status(404).end();
      }

      return res.json({ data: data.data });
    },
  };

  const handler = handlers[method];
  if (!handler) {
    return res.status(405).send("Method not allowed");
  }

  return handler();
}

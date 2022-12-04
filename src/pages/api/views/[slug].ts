import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug as string;
  const method = req.method as string;

  const view = await prisma.view.findUnique({ where: { slug } });

  const handlers = {
    GET: async () => {
      if (!view) {
        // create the db entry if it hasn't been created yet.
        return handlers.POST();
      }
      return view;
    },
    POST: async () => {
      return prisma.view.upsert({
        where: { slug },
        update: { count: { increment: 1 } },
        create: { slug, count: 1 },
      });
    },
  };

  if (doesMethodHaveHandler(method, handlers)) {
    const handler = handlers[method];

    const json = await handler();
    return res.status(200).json(json);
  }

  return res.status(405).send("Method Not Allowed");
}

function doesMethodHaveHandler<Handlers extends object>(
  method: string | number | symbol,
  handlers: Handlers,
): method is keyof Handlers {
  return method in handlers;
}

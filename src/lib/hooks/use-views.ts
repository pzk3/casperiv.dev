"use client";

import { View } from "@prisma/client";
import * as React from "react";

export async function updateViews(slug: string): Promise<View | null> {
  try {
    const res = await fetch(`/api/views/${slug}`, { method: "POST", credentials: "omit" });
    const json = await res.json();

    return json;
  } catch {
    return null;
  }
}

export function useViews(slug: string): number | null {
  const [views, setViews] = React.useState<number | null>(null);

  async function handleViews() {
    const data = await updateViews(slug);
    data && setViews(data.count);
  }

  React.useEffect(() => {
    handleViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return views;
}

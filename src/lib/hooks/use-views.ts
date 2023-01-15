"use client";

import * as React from "react";

export async function updateViews(slug: string): Promise<string | null> {
  try {
    const res = await fetch(`/api/views/${slug}`, { method: "POST", credentials: "omit" });
    const json = await res.json();

    return json;
  } catch {
    return null;
  }
}

let fetched: string | null = null;

export function useViews(slug: string): number | null {
  const [views, setViews] = React.useState<number | null>(null);

  async function handleViews() {
    fetched = slug;

    const data = await updateViews(slug);
    data && setViews(parseInt(data, 10));
  }

  React.useEffect(() => {
    if (fetched === slug) return;
    handleViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return views;
}

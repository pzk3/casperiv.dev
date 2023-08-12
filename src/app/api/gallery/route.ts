import { NextResponse } from "next/server";
import { GetGalleryImagesQuery, getGalleryImagesServer } from "./utils";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;

  const rawAfter = searchParams.get("after");
  const after = rawAfter !== null ? parseInt(rawAfter, 10) : undefined;

  const data = await getGalleryImagesServer(after ?? 0);
  return NextResponse.json<GetGalleryImagesQuery>(data);
}

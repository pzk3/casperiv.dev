import { NextResponse } from "next/server";
import { GetGalleryImagesQuery, getGalleryImagesServer } from "./utils";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const after = searchParams.get("after");

  const data = await getGalleryImagesServer(after);
  return NextResponse.json<GetGalleryImagesQuery>(data);
}

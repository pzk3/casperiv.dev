import { ImageResponse, NextRequest } from "next/server";
import tailwindConfig from "tailwind.config";

export const runtime = "edge";

const colors = tailwindConfig.theme.extend.colors;
const size = {
  width: 1512,
  height: 900,
} as const;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title");

  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          ...size,
          padding: "6rem 4rem",
          backgroundColor: colors.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <header style={{ display: "flex", flexDirection: "column-reverse" }}>
          <h1
            style={{
              margin: 0,
              marginTop: 6,
              fontFamily: "inter-bold",
              fontSize: 84,
              fontWeight: "bold",
              maxWidth: 1234,
              color: "black",
            }}
          >
            {title}
          </h1>

          <h2
            style={{
              margin: 0,
              fontSize: 36,
              fontFamily: "poppins-medium",
              color: colors.gray.light,
            }}
          >
            Take a look at this article
          </h2>
        </header>

        <footer
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3
              style={{
                margin: 0,
                color: colors.secondary,
                fontSize: 48,
                fontFamily: "poppins-bold",
              }}
            >
              Casper Iversen
            </h3>
            <h4
              style={{
                margin: 0,
                color: colors.gray.dark,
                fontSize: 40,
                fontFamily: "poppins-medium",
              }}
            >
              Web Developer
            </h4>
          </div>

          <h4 style={{ fontSize: 40, margin: 0, color: colors.gray.dark }}>
            casperiv<span style={{ color: colors.accent }}>.dev</span>
          </h4>
        </footer>
      </div>
    ),
    {
      fonts,
      ...size,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
      },
    },
  );
}

const USED_FONTS = ["inter-bold.ttf", "poppins-bold.ttf", "poppins-medium.ttf"];

async function loadFonts() {
  const loadedFonts = [];

  for (const font of USED_FONTS) {
    const fontBuffer = await fetch(`https://casperiv.dev/fonts/${font}`).then((res) =>
      res.arrayBuffer(),
    );

    loadedFonts.push({
      name: font.replace(".ttf", ""),
      data: fontBuffer,
    });
  }

  return loadedFonts;
}

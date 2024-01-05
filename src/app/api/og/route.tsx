import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  try {
    const fontData = await fetch(
      new URL("/public/fonts/MonaspaceArgon-Bold.woff", import.meta.url)
    ).then((r) => r.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundImage:
              "linear-gradient(to right bottom, rgb(94, 93, 99), rgb(35, 34, 39), rgb(0, 0, 0))",
          }}
        >
          <div tw=" flex w-full">
            <div tw="flex flex-row w-full py-12 px-10 items-center  justify-end p-8">
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-300 mr-20 ml-5">
                <span style={{ fontFamily: "Monaspace Argon Bold" }}>
                  Hugo Cruz&apos;s Portfolio
                </span>
              </h2>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Monaspace Argon Bold",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}

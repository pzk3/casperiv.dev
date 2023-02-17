import { SEO } from "next-seo.config";

export const metadata = {
  ...SEO,
  title: "404 - Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 style={{ fontWeight: 200 }} className="mb-3 text-7xl md:text-8xl lg:text-9xl">
        404
      </h1>
      <h2 className="text-4xl font-semibold md:text-6xl">Page not found</h2>
    </div>
  );
}

import { Layout } from "components/Layout";

export default function FourOhFour() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 style={{ fontWeight: 200 }} className="mb-3 text-7xl md:text-8xl lg:text-9xl">
          404
        </h1>
        <h2 className="text-4xl font-semibold md:text-6xl">Page not found</h2>
      </div>
    </Layout>
  );
}

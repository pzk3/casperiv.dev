import { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found • 404 - Casper Iversen</title>
        <meta property="og:title" content="Page Not Found - Casper Iversen" />
        <link rel="canonical" href="https://caspertheghost.me/404" />
      </Head>
      <div className="container__404">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </>
  );
};

export default Custom404;

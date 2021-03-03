import { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found • 404 - Casper Iversen</title>
      </Head>
      <div className="container__404">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </>
  );
};

export default Custom404;

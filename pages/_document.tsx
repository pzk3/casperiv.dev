/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Hi I'm Casper Iversen! A web developer." />
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/zenscroll/4.0.2/zenscroll-min.js"
          ></script>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#2a2e33" />
          <link rel="shortcut icon" href="/icons/icon-128.png" type="image/x-icon" />
          <link sizes="128x128" rel="apple-touch-icon" href="/icons/icon-128.png" />
          <link sizes="144x144" rel="apple-touch-icon" href="/icons/icon-144.png" />
          <link sizes="250x250" rel="apple-touch-icon" href="/icons/icon-250.png" />
          <link sizes="512x512" rel="apple-touch-icon" href="/icons/icon-512.png" />
          <link sizes="1080x1080" rel="apple-touch-icon" href="/icons/icon-1080.png" />
          <meta
            property="og:image"
            content="https://caspertheghost.me/assets/img/icons/icon-128.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

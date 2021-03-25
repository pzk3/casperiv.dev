/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class CasperTheGhostDotMe extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Hi I'm Casper Iversen! A Frontend Web Developer." />
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/zenscroll/4.0.2/zenscroll-min.js"
          ></script>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="mask-icon" href="/favicons//safari-pinned-tab.svg" color="#161b22" />
          <meta name="msapplication-TileColor" content="#161b22" />
          <meta name="theme-color" content="#161b22" />
          <meta property="og:color" content="#161b22" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://caspertheghost.me" />
          <meta property="og:title" content="Casper Iversen" />
          <meta property="og:image" content="https://caspertheghost.me/icons/icon-128.png" />
          <meta
            property="og:description"
            content="Hi I'm Casper Iversen! A Frontend Web Developer."
          />
          <meta property="og:site_name" content="Casper Iversen" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@casper124578" />
          <meta
            name="twitter:description"
            content="Hi I'm Casper Iversen! A Frontend Web Developer."
          />
          <meta name="twitter:title" content="Casper Iversen" />
          <meta
            name="keywords"
            content="dev-caspertheghost, caspertheghost, casper iversen, ghostybot"
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

export default CasperTheGhostDotMe;

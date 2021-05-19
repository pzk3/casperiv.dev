import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "zenscroll/zenscroll-min";
import Nav from "@components/Nav";
import Menu from "@components/Menu";
import Footer from "@components/Footer";
import "css/globals.scss";
import "css/nprogress.css";
import "css/fonts.scss";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Menu />
      <div id="container" className="container">
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

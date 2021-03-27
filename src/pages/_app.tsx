/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppProps } from "next/app";
import Nav from "@components/Nav";
import Menu from "@components/Menu";
import Footer from "@components/Footer";
import "css/globals.css";
import "css/nav.css";
import "css/main.css";
import "css/contact.css";
import "css/skills.css";
import "css/timeline.css";
import "css/footer.css";
import "css/projects.css";
import "css/modal.css";
import "css/experience.css";
import "css/blog.css";

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

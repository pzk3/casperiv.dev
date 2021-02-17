/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppProps } from "next/app";
import Nav from "../components/Nav";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/main.css";
import "../styles/contact.css";
import "../styles/skills.css";
import "../styles/timeline.css";
import "../styles/footer.css";
import "../styles/projects.css";
import "../styles/modal.css";
import "../styles/experience.css";

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

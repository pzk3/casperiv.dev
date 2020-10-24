import { AppProps } from "next/app";
import Nav from "../components/Nav";
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/main.css"
import "../styles/contact.css"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div id="container" className="container">
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default App;

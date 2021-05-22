import * as React from "react";
import { Converter } from "showdown";
import styles from "css/utils/md-html.module.scss";
import Head from "next/head";
import Seo from "@components/Seo";

const converter = new Converter({
  strikethrough: true,
  smartIndentationFix: true,
  smoothLivePreview: true,
  underline: true,
  tables: true,
});
type Types = "html-to-markdown" | "markdown-to-html";

const MdHtml = () => {
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const [type, setType] = React.useState<Types>("markdown-to-html");
  const [btnText, setBtnText] = React.useState("Copy");
  const valueRef = React.useRef<HTMLTextAreaElement>(null);

  const placeholder = type === "html-to-markdown" ? "HTML" : "Markdown";

  function copyResult() {
    if (window.navigator?.clipboard) {
      navigator.clipboard.writeText(result);

      setBtnText("Copied!");
      setTimeout(() => setBtnText("Copy"), 1000);
    }
  }
  React.useEffect(() => {
    valueRef.current.focus();
  }, []);

  React.useEffect(() => {
    if (type === "html-to-markdown") {
      return setResult(converter.makeMarkdown(value));
    }

    if (type === "markdown-to-html") {
      return setResult(converter.makeHtml(value));
    }
  }, [value, type]);

  return (
    <div className={styles.mdHtmlContainer}>
      <Seo title="Markdown to HTML/HTML to markdown converter - Casper Iversen" />
      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <div className={styles.mdHtmlHeader}>
        <h1>{type === "html-to-markdown" ? "HTML to Markdown" : "Markdown to HTML"}</h1>

        <select
          className={styles.mdHtmlSelect}
          value={type}
          onChange={(e) => setType(e.target.value as Types)}
        >
          <option value="markdown-to-html">Markdown to HTML</option>
          <option value="html-to-markdown">HTML to Markdown</option>
        </select>
      </div>

      <div className={styles.mdHtmlInputs}>
        <textarea
          ref={valueRef}
          className={styles.mdHtmlTextArea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Enter your ${placeholder} here`}
        />

        <textarea disabled className={styles.mdHtmlTextArea} value={result} />

        {result ? (
          <button onClick={copyResult} className={styles.copyBtn}>
            {btnText}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MdHtml;

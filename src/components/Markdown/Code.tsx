import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import styles from "css/blog.module.scss";
import { Toast } from "@components/index";

interface Props {
  children: React.ReactNode;
  inline: boolean;
  className: string;
}

const MDCode = (props: Props) => {
  const { inline, className, children } = props;
  const match = /language-(\w+)/.exec(className || "");
  const text = String(children).replace(/\n$/, "");
  const [btnText, setBtnText] = React.useState("Copy");
  const [toast, setToast] = React.useState({ active: false, message: "" });
  const [clicked, setClicked] = React.useState(0);

  React.useEffect(() => {
    if (clicked === 10) {
      // minor easter egg 😄
      setToast({ active: true, message: "Woah there! Calm down!" });

      setTimeout(() => {
        resetToast();
      }, 3000);
    }
  }, [clicked]);

  function resetToast() {
    setClicked(0);
    setToast({ active: false, message: "" });
  }

  function handleCopy() {
    if (typeof window !== "undefined" && window.navigator?.clipboard) {
      navigator.clipboard.writeText(text);

      setClicked((p) => p + 1);
      setBtnText("Copied!");
      setTimeout(() => setBtnText("Copy"), 1000);
    }
  }

  return !inline && match ? (
    <div>
      <Toast
        closeAfterMs={2000}
        active={toast.active}
        message={toast.message}
        onClose={resetToast}
      />

      <button onClick={handleCopy} className={styles.copyBtn}>
        {btnText}
      </button>

      <SyntaxHighlighter style={Theme} language={match[1]} {...props}>
        {text}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className}>{props.children}</code>
  );
};

export default MDCode;

"use client";

import * as React from "react";
import { onlyText } from "react-children-utilities";

interface Props {
  "data-language": string;
  children: React.ReactNode;
}

export function PreCode({ children, ...rest }: Props) {
  const copyCodeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const language = rest["data-language"];

  function handleCopyCode() {
    navigator.clipboard.writeText(onlyText(children));

    copyCodeButtonRef.current!.innerText = "Copied!";
    setTimeout(() => {
      copyCodeButtonRef.current!.innerText = "Copy";
    }, 2000);
  }

  return (
    <div data-code-pre>
      <pre {...rest}>{children}</pre>

      <div className="w-full flex justify-end -mt-6 bg-secondary rounded-b-md">
        <span
          data-language-tag
          className="text-sm text-accent bg-secondary px-2 inline-block max-w-fit cursor-default font-mono"
        >
          {language}
        </span>

        <button
          onClick={handleCopyCode}
          ref={copyCodeButtonRef}
          data-language-tag
          className="text-sm text-white bg-secondary px-2 inline-block rounded max-w-fit hover:bg-accent hover:text-secondary transition-colors duration-200 ease-in-out"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

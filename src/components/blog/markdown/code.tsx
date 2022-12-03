"use client";

import clsx from "clsx";
import { Button } from "components/button";
import * as React from "react";
import { Clipboard, ClipboardCheck } from "react-bootstrap-icons";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/vs";

interface Props {
  children: React.ReactNode;
  inline: boolean;
  className: string;
  command?: "true" | "false";
}

export function MDCode(props: Props) {
  const [copied, setCopied] = React.useState(false);

  const copyId = React.useId();

  function handleCopy() {
    if (typeof window !== "undefined" && "navigator" in window) {
      navigator.clipboard.writeText(text);

      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  }

  const isCommand = props.command === "true";
  const isParent = typeof props.children === "object";
  const classNameToParse = isParent
    ? (props.children as React.ReactElement).props?.className
    : props.className;
  const codeText = isParent
    ? (props.children as React.ReactElement).props?.children
    : props.children;

  const match = /language-(\w+)/.exec(classNameToParse || "");
  const text = String(codeText).replace(/\n$/, "");

  if ((props.inline || !match) && !isParent) {
    return <code className={props.className}>{props.children}</code>;
  }

  return (
    <div
      data-code-group
      className={clsx(
        isCommand && "flex items-center",
        "group relative w-full border -mt-2 border-secondary-light/50 shadow-sm bg-primary rounded-md overflow-x-auto p-1 px-2 overflow-y-hidden",
      )}
    >
      <Button
        title="Copy code"
        aria-label="Copy code"
        onClick={handleCopy}
        id={copyId}
        className="absolute z-20 transition-all opacity-0 top-1 right-1 focus:opacity-100 group-hover:opacity-100 border bg-white border-secondary-light/50 shadow-sm hover:brightness-100 focus:brightness-100"
      >
        {copied ? (
          <ClipboardCheck
            className="fill-secondary"
            aria-labelledby={copyId}
            width={20}
            height={20}
          />
        ) : (
          <Clipboard className="fill-secondary" aria-labelledby={copyId} width={20} height={20} />
        )}
      </Button>

      {isCommand ? <span className="!py-0 select-none opacity-70 text-sm">$</span> : null}

      <SyntaxHighlighter style={Theme} language={match?.[1]}>
        {text}
      </SyntaxHighlighter>
    </div>
  );
}

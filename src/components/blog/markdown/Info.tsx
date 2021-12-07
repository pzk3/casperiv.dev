import type * as React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Info({ children, title, ...rest }: Props) {
  return (
    <div
      {...rest}
      className="p-2 px-4 my-3 mb-5 text-lg border-l-[3px] rounded-md rounded-l-none shadow border-[#60A5FA] bg-blue-1/60"
    >
      {title ? (
        <h1
          style={{
            fontSize: "1.45rem",
            lineHeight: "1.75rem",
          }}
        >
          {title}
        </h1>
      ) : null}

      <span>{children}</span>
    </div>
  );
}

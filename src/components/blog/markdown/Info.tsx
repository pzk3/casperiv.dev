import type * as React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
  color?: string;
}

export function Info({ children, title, color, ...rest }: Props) {
  const borderColor = color || "#60A5FA";

  return (
    <div
      {...rest}
      style={{ borderColor }}
      className="p-2 px-4 my-3 mb-5 text-lg border-l-[3px] rounded-md rounded-l-none shadow bg-blue-1/60"
    >
      {title ? (
        <h1
          style={{
            fontSize: "1.45rem",
            lineHeight: "1.75rem",
            margin: "10px 0",
          }}
        >
          {title}
        </h1>
      ) : null}

      <span>{children}</span>
    </div>
  );
}

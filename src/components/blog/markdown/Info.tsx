import type * as React from "react";

type DivProps = JSX.IntrinsicElements["div"];

interface Props extends DivProps {
  title?: string;
  color?: string;
}

export function Info({ children, title, color, ...rest }: Props) {
  const borderColor = color || "#84a07c";

  return (
    <div
      {...rest}
      data-info
      style={{ borderColor, ...rest.style }}
      className="p-2 px-4 my-3 mb-5 text-lg border-l-[3px] rounded-md rounded-l-none shadow bg-secondary"
    >
      {title ? (
        <h3
          style={{
            fontSize: "1.35rem",
            lineHeight: "1.75rem",
            margin: "10px 0",
            fontWeight: 700,
          }}
          className="text-white"
        >
          {title}
        </h3>
      ) : null}

      <span className="text-gray-200">{children}</span>
    </div>
  );
}

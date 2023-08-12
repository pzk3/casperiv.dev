import * as React from "react";

export function useViewport() {
  const [width, setWidth] = React.useState(
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    (typeof window !== "undefined" && window.innerWidth) || 0,
  );

  React.useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
}

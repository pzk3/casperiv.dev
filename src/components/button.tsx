import * as React from "react";
import classNames from "clsx";

export const Button = React.forwardRef<HTMLButtonElement, JSX.IntrinsicElements["button"]>(
  (props, ref) => (
    <button
      {...props}
      className={classNames(
        "bg-secondary text-white hover:brightness-125 focus:brightness-125",
        "p-2 px-3.5 duration-200 transition-all rounded-md",
        "disabled:cursor-not-allowed disabled:opacity-80",
        props.className,
      )}
      ref={ref}
    />
  ),
);

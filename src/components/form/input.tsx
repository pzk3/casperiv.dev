import * as React from "react";
import classNames from "clsx";

type Props = JSX.IntrinsicElements["input"] & {
  hasError?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, Props>(({ hasError, ...rest }, ref) => (
  <input
    ref={ref}
    {...rest}
    className={classNames(
      `bg-white
      w-full p-1.5 px-2 rounded-md border
      disabled:cursor-not-allowed disabled:opacity-80
      transition-colors`,
      hasError
        ? "border-red-500 focus:border-red-700"
        : "border-secondary-light focus:border-secondary",
      rest.className,
    )}
  />
));

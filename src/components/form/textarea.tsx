import * as React from "react";
import classNames from "clsx";

type Props = JSX.IntrinsicElements["textarea"] & {
  hasError?: boolean | string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ hasError, ...rest }, ref) => (
    <textarea
      ref={ref}
      {...rest}
      className={classNames(
        `
        bg-white
        w-full p-1.5 px-2 rounded-md border-[1.75px]
        disabled:cursor-not-allowed disabled:opacity-80
        transition-colors resize-y`,
        hasError
          ? "border-red-500 focus:border-red-700"
          : "border-secondary-light focus:border-secondary",
        rest.className,
      )}
    />
  ),
);

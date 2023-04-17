import * as React from "react";
import { InputProps, input } from "./input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ errorMessage, ...rest }, ref) => (
    <textarea
      ref={ref}
      {...rest}
      className={input({
        state: errorMessage ? "invalid" : "valid",
        intent: rest.intent,
        size: rest.size,
        className: rest.className,
      })}
    />
  ),
);

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

export type InputProps = VariantProps<typeof input> & {
  errorMessage?: string;
  className?: string;
};

export const input = cva(["border-2 outline-none transition-colors w-full"], {
  variants: {
    intent: {
      primary: "bg-gray-dark ",
    },
    state: {
      valid: "border-gray-light focus:border-accent hover:border-accent/30",
      invalid: "border-red-600 focus:border-red-700",
    },
    size: {
      default: "px-4 py-1.5 rounded-2xl",
    },
  },
  defaultVariants: {
    state: "valid",
    intent: "primary",
    size: "default",
  },
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, size, intent, ...rest }, ref) => (
    <input
      ref={ref}
      {...rest}
      className={input({
        state: errorMessage ? "invalid" : "valid",
        intent,
        size,
        className: rest.className,
      })}
    />
  ),
);

"use client";

import { VariantProps, cva } from "class-variance-authority";
import type * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const button = cva(["border-2 text-base font-inter font-medium"], {
  variants: {
    intent: {
      primary:
        "bg-gray-dark border-gray-light hover:border-accent hover:bg-accent hover:text-secondary text-primary",
      secondary: "border-gray-light text-secondary hover:border-accent",
    },
    size: {
      default: "px-4 py-1.5 rounded-2xl",
      square: "w-10 h-10 grid place-items-center rounded-full",
    },
    extras: {
      icon: "flex items-center gap-2",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "default",
  },
});

type ButtonProps = HTMLMotionProps<"button"> & VariantProps<typeof button>;

export function Button(props: ButtonProps) {
  return (
    <motion.button
      {...props}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{ scale: 0.92 }}
      className={button({
        className: props.className,
        intent: props.intent,
        extras: props.extras,
        size: props.size,
      })}
    >
      {props.children}
    </motion.button>
  );
}

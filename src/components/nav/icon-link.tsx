import * as React from "react";

type AProps = JSX.IntrinsicElements["a"];
interface Props extends AProps {
  children: Omit<React.ReactSVGElement, "ref">;
}

export function IconLink({ children, ...rest }: Props) {
  const githubId = React.useId();

  const element = React.cloneElement(children, {
    "aria-labelledby": githubId,
    width: 21,
    height: 21,
    className: "group-hover:text-white pointer-events-none z-10 fill-current text-secondary",
  });

  return (
    <a
      className="group grid place-items-center w-10 h-10 relative overflow-hidden rounded-md"
      id={githubId}
      {...rest}
    >
      <div className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-accent to-accent/30 z-0 duration-200" />
      {element}
    </a>
  );
}

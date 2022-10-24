import * as React from "react";
import { MDCode } from "./Code";

interface Props {
  children: React.ReactNode;
}

export function CommandLine({ children }: Props) {
  let command;
  if (typeof children === "string") {
    command = children;
  } else {
    const [_command] = React.Children.toArray(children) as [React.ReactElement];
    command = _command.props.children;
  }

  return (
    <span className="flex w-full bg-blue-4 items-center px-3 py-1 mb-3 rounded-md border border-secondary-light/50 shadow-sm">
      <span className="!py-0 select-none opacity-70 text-sm">$</span>

      <MDCode inline={false} className="language-bash z-10 w-full">
        {command}
      </MDCode>
    </span>
  );
}

import * as React from "react";
import { useField } from "@react-aria/label";
import classNames from "clsx";

type Props = JSX.IntrinsicElements["div"] & {
  label: string | null;
  errorMessage?: string;
  children?: React.ReactElement<any>;
  checkbox?: boolean;
};

export const FormField = ({ label, checkbox, errorMessage, children, ...rest }: Props) => {
  const { labelProps, fieldProps, errorMessageProps } = useField({ label, errorMessage });

  const element = React.cloneElement(children as React.ReactElement<any>, fieldProps);

  return (
    <div {...rest} className={classNames("flex mb-3", !checkbox && "flex-col", rest.className)}>
      <label {...labelProps} className={classNames("mb-1", checkbox && "mr-3")}>
        {label}
      </label>

      {element}

      {errorMessage ? (
        <span {...errorMessageProps} className="mt-1 font-medium text-red-400">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

import * as React from "react";
import { ExclamationCircle, ExclamationTriangle, InfoCircle } from "react-bootstrap-icons";
import classNames from "clsx";

type AlertIconType = "info" | "error" | "warn";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: AlertIconType;
  children: React.ReactChild;
}

const labels = {
  info: "Info",
  warn: "Warning",
  error: "Error",
};

export const Alert = ({ children, type, ...rest }: Props) => {
  const styles = {
    info: "bg-blue-1/50",
    error: "bg-red-500",
    warn: "bg-amber-500 text-black font-medium",
  };

  return (
    <div
      role="alert"
      className={classNames(
        "text-white p-1 px-3 rounded-md flex items-start relative text-base",

        styles[type],
      )}
      {...rest}
    >
      <p className="relative min-w-[25px]">
        <span aria-label={labels[type]} className="absolute top-2 left-1">
          <Icon type={type} />
        </span>
      </p>
      <span className="ml-3">{children}</span>
    </div>
  );
};

const Icon = ({ type }: { type: AlertIconType }) => {
  switch (type) {
    case "error":
      return (
        <ExclamationCircle
          aria-label={labels[type]}
          className="min-w-[20px]"
          height={20}
          width={20}
        />
      );
    case "info":
      return (
        <InfoCircle aria-label={labels[type]} className="min-w-[20px]" height={20} width={20} />
      );
    case "warn":
      return (
        <ExclamationTriangle
          aria-label={labels[type]}
          className="min-w-[20px]"
          height={20}
          width={20}
        />
      );
    default:
      return null;
  }
};

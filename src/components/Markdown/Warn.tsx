import * as React from "react";
import styles from "css/blog.module.scss";
import { WarnIcon } from "@components/icons/Warn";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactChild;
}

export const Warn = ({ children, ...rest }: Props) => {
  return (
    <div className={styles.warning} {...rest}>
      <WarnIcon height="20" width="20" />
      <p>{children}</p>
    </div>
  );
};

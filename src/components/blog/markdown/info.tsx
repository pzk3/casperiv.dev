type DivProps = JSX.IntrinsicElements["div"];

interface Props extends DivProps {
  title?: string;
  color?: string;
}

export function Info({ children, title, color, ...rest }: Props) {
  const borderColor = color || "#60A5FA";

  return (
    <div
      {...rest}
      data-info
      style={{ borderColor, ...rest.style }}
      className="p-2 px-4 my-3 mb-5 text-lg border-l-[4px] rounded-md rounded-l-none shadow border-2 border-secondary bg-primary"
    >
      {title ? <h3 className="text-xl font-bold my-2.5 ">{title}</h3> : null}

      <span className="text-secondary-light">{children}</span>
    </div>
  );
}

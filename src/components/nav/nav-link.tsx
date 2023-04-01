import classNames from "clsx";
import { Link } from "components/blog/markdown/link";
import { Variants, motion } from "framer-motion";

const MotionLink = motion(Link);

const variants: Variants = {
  initial: { width: "0%" },
  active: { width: "33%" },
  hover: { width: "50%" },
};

export function NavLink({
  menuOpen,
  isActive,
  ...props
}: Omit<JSX.IntrinsicElements["a"], "ref"> & { isActive: boolean; menuOpen: boolean }) {
  return (
    <MotionLink
      initial="initial"
      animate={isActive ? "active" : "initial"}
      whileHover="hover"
      transition={{ ease: "easeOut" }}
      href={props.href!}
      isNav
      {...(props as any)} // todo: fix this type
      className={classNames(
        "font-title text-sm uppercase relative group py-2 pr-2.5 duration-200 transition rounded-md",
        {
          "my-2 block": menuOpen,
          "text-secondary font-medium": isActive,
          "font-light": !isActive,
        },
      )}
    >
      {props.children}

      <motion.span
        variants={variants}
        className={classNames(
          "absolute bottom-0 left-0 rounded-md h-1.75 opacity-0 bg-accent w-1/3 group-hover:opacity-80 ease-in-out transition-opacity",
          {
            "opacity-100": isActive,
          },
        )}
      />
    </MotionLink>
  );
}

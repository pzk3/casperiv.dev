"use client";

import { m as motion, useMotionValue } from "framer-motion";
import * as React from "react";

function calcDynamicHeight(objectWidth: number) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
}

interface HorizontalScrollProps {
  headerRenderer: React.ReactNode;
  children: React.ReactNode;
}

export function HorizontalScroll(props: HorizontalScrollProps) {
  const childRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [dynamicHeight, setDynamicHeight] = React.useState(0);
  const x = useMotionValue(0);

  React.useEffect(() => {
    if (childRef.current) {
      const childWidth = childRef.current.offsetWidth;
      setDynamicHeight(calcDynamicHeight(childWidth));
    }

    const handleScroll = () => {
      if (containerRef.current) {
        // 48px: adds padding to the right at the end of the scroll
        const offsetTop = -(containerRef.current.offsetTop + 48);
        x.updateAndNotify(offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [x]);

  return (
    <section className="relative w-full" style={{ height: dynamicHeight }}>
      <div
        ref={containerRef}
        className="bg-secondary sticky top-0 min-h-screen w-full overflow-hidden pl-12"
      >
        <header className="text-primary tall:sticky tall:top-[20%] mt-32 tall:mt-0 z-10">
          {props.headerRenderer}
        </header>
        <motion.div
          style={{ x }}
          className="flex absolute h-full will-change-transform"
          ref={childRef}
        >
          {props.children}
        </motion.div>
      </div>
    </section>
  );
}

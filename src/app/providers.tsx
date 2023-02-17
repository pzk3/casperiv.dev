"use client";

import type * as React from "react";
import { SSRProvider } from "@react-aria/ssr";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SSRProvider>{children}</SSRProvider>;
}

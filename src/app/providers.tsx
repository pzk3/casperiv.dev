"use client";

import type * as React from "react";
import { SSRProvider } from "@react-aria/ssr";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>{children}</SSRProvider>
    </QueryClientProvider>
  );
}

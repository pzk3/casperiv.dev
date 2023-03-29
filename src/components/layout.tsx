import * as React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      // 5rem = Navbar height, 12rem = footer height
      style={{ minHeight: "calc(100vh - 5rem - 12rem)" }}
      className="flex justify-center w-full pt-5"
    >
      <main className="w-full">{children}</main>
    </div>
  );
}

"use client";
import { ThemeContextProvider } from "@/context";
import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "./SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
    >
      <ThemeContextProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}

"use client";

import { ThemeProvider } from "next-themes";
type ThemeProviderProps = Parameters<typeof ThemeProvider>[0];
import { SmoothScroll } from "./SmoothScroll";

export function Providers({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
    >
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}

"use client";

import { ThemeProvider } from "next-themes";
type ThemeProviderProps = Parameters<typeof ThemeProvider>[0];
import { SmoothScroll } from "./SmoothScroll";
import { useEffect, useState } from "react";

export function Providers({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="system"
    >
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}

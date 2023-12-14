"use client";
import { ThemeContextProvider } from "@/context";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
    >
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ThemeProvider>
  );
}

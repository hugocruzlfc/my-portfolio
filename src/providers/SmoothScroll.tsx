"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
};

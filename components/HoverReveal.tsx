"use client";

import { ReactNode } from "react";

export default function HoverReveal({
  children,
  hoverContent,
}: {
  children: ReactNode;
  hoverContent: ReactNode;
}) {
  return (
    <div className="relative w-40 h-12 group cursor-pointer select-none">
      {/* Default content (image button) */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        {children}
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {hoverContent}
      </div>
    </div>
  );
}

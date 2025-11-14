"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 select-none">
      <div
        className="w-[95%] max-w-[1400px] flex items-center justify-center rounded-full px-16 py-4"
        style={{
          background: "#020403",
          border: "1px solid rgba(206,255,139,0.1)",
          boxShadow: "0 0 40px rgba(206,255,139,0.15)",
        }}
      >
        {/* Left - Logo */}
        <div className="flex items-center gap-3 flex-1">
          <div className="relative w-24 h-16">
            <Image
              src="/images/logo.svg"
              alt="TIWI Protocol"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Center - Links */}
        <ul className="hidden md:flex w-full items-center gap-10 text-white text-base font-medium tracking-wide justify-center">
          <li className="cursor-pointer hover:text-[#CEFF8B] transition">About</li>
          <li className="cursor-pointer hover:text-[#CEFF8B] transition">Product</li>
          <li className="cursor-pointer hover:text-[#CEFF8B] transition">How it works</li>
          <li className="cursor-pointer hover:text-[#CEFF8B] transition">Governance</li>
          <li className="cursor-pointer hover:text-[#CEFF8B] transition">Road Map</li>
        </ul>

 
      </div>
    </nav>
  );
}

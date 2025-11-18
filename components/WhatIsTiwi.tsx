"use client";

import Image from "next/image";

export default function WhatIsTiwi() {
  return (
    <section className="relative w-10/12 mx-auto bg-[#051401] py-16 md:py-40 px-4 md:px-20 rounded-b-3xl overflow-hidden">
    
      
      {/* Floating Leaves */}
      <Image src="/images/Leave3.svg" alt="leaf" width={48} height={48} className="absolute right-58 top-120 w-10 h-10 opacity-80 select-none" draggable="false" onContextMenu={(e) => e.preventDefault()} />
      <Image src="/images/Leave3.svg" alt="leaf" width={66} height={66} className="absolute right-64 -top-5 w-20 h-12 opacity-80 select-none" draggable="false" onContextMenu={(e) => e.preventDefault()} />
      <Image src="/images/Leave1.svg" alt="leaf" width={48} height={48} className="absolute left-[11.5%] top-56 w-10 h-10 opacity-60 select-none" draggable="false" onContextMenu={(e) => e.preventDefault()} />

      
      
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 md:gap-10">
        {/* Label with decorative borders */}
        <div className="flex items-center justify-center gap-1 md:gap-2">
          {/* Left border decoration */}
          <div className="relative w-6 md:w-8 h-7 md:h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B1F128]/45 to-[#051401]" />
            <div className="absolute left-0.5 top-0.5 bottom-0.5 w-0.5 bg-[#B1F128] rounded-full" />
          </div>

          <p className="text-[#B5B5B5] text-xs md:text-lg font-medium px-2">
            What is Tiwi Protocol
          </p>

          {/* Right border decoration */}
          <div className="relative w-6 md:w-8 h-7 md:h-8">
            <div className="absolute inset-0 bg-gradient-to-l from-[#B1F128]/45 to-[#051401]" />
            <div className="absolute right-0.5 top-0.5 bottom-0.5 w-0.5 bg-[#B1F128] rounded-full" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-center text-2xl md:text-[40px] font-semibold leading-tight md:leading-tight tracking-tight md:tracking-[-0.04em] max-w-3xl">
          <span className="text-white">Your Entire DeFi Experience in </span> <br/>
          <span className="text-[#B1F128]">One Super App</span>
        </h2>

        {/* Description */}
        <p className="text-[#B5B5B5] text-center text-base md:text-xl font-medium leading-relaxed md:leading-[160%] max-w-5xl px-4 md:px-0">
          TIWI Protocol is a multi-chain DeFi Super App that combines trading, lending, yield, payments, NFTs, governance, and developer tools in one platform. Built mobile-first, it features a non-custodial wallet and a flexible relayer-powered gas system, letting users transact easily across multiple chains.
        </p>
      </div>
    </section>
  );
}

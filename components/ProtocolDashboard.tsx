"use client";

import Image from "next/image";

export default function DashboardStatsGrid() {
  return (
    <section className="bg-[#010501] py-16 px-6 text-white">
      {/* HEADER SECTION */}
      <div className="text-center mb-10">
        

        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#B1F12873] to-[#010501]" />
          <span className="  text-[#B5B5B5] text-sm md:text-xl font-medium">
          Protocol Status
          </span>
          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#010501] to-[#B1F12873]" />
        </div>



        <h2 className="mt-3 text-3xl md:text-3xl font-semibold leading-tight">
          Real-Time Transparency, <br />  <span className="text-[#B1F128]">All in One Dashboard</span>
        </h2>

        <p className="text-[#A3A3A3] mt-3 text-lg font-normal max-w-xl mx-auto">
          Monitor live on-chain activity including TVL, swap volumes, treasury
          holdings, and pool yields.
        </p>
      </div>





    <div className="relative w-full flex justify-center items-center">
          <Image
            src="/images/liquidity.svg"
            alt="Liquidity"
            className="w-auto h-auto select-none"
            width={500}
            height={300}
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
          
        </div>
    </section>
  );
}

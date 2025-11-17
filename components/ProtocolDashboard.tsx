"use client";

import Image from "next/image";

export default function DashboardStatsGrid() {
  return (
    <section className="bg-[#020304] py-16 px-6 text-white">
      {/* HEADER SECTION */}
      <div className="text-center mb-10">
        <span className="text-[#B5F128] text-sm tracking-wide">
          Protocol Status
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
          Real-Time Transparency, <br /> All in One Dashboard
        </h2>

        <p className="text-[#A3A3A3] mt-3 text-sm max-w-xl mx-auto">
          Monitor live on-chain activity including TVL, swap volumes, treasury
          holdings, and pool yields.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto relative">
        {/* LEFT — TRADING VOLUME */}
        <div className="bg-[#0B0E0C] rounded-xl p-4 relative overflow-hidden h-[180px] flex items-end">
          <span className="absolute top-3 left-3 text-[80px] text-white/5 font-bold">
            24
          </span>
          <span className="text-sm">Trading Volume</span>
        </div>

        {/* CENTER — TOTAL LIQUIDITY (large green) */}
        <div className="rounded-xl p-4 h-[180px] md:h-[220px] w-full relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/curved-card.svg"
              alt="Center Glow"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-white text-lg font-semibold z-10 relative flex items-center justify-center h-full">
            Total Liquidity Locked
          </h3>
        </div>

        {/* RIGHT — 50+ ACTIVE CHAINS */}
        <div className="bg-[#0B0E0C] rounded-xl p-4 relative h-[180px] flex flex-col justify-between">
          <div className="flex justify-end">
            <div className="h-9 w-9 rounded-full bg-[#FFE680]"></div>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold">
              50+ Active Chains
            </h4>
            <p className="text-[#BBBBBB] text-xs">
              Live and synced across networks
            </p>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* BOTTOM LEFT — DAO PROPOSALS */}
          <div className="rounded-xl p-4 h-[180px] md:h-[220px] w-full relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/corner-card.svg"
              alt="Center Glow"
              fill
              className="object-cover scale-x-[-1]"
            />
          </div>

          <h3 className="text-white text-lg font-semibold z-10 relative flex items-center justify-center h-full">
            Total Liquidity Locked
          </h3>
        </div>

          {/* <div>.</div> */}
          {/* BOTTOM RIGHT — NETWORK UPTIME */}
          <div className="rounded-xl p-4 h-[180px] md:h-[220px] w-full relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/corner-card.svg"
              alt="Center Glow"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-white text-lg font-semibold z-10 relative flex items-center justify-center h-full">
            Total Liquidity Locked
          </h3>
        </div>
        </div>
      </div>
    </section>
  );
}

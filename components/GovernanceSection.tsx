"use client";

import Image from "next/image";

function cn(...classes: Array<string | boolean | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export default function GovernanceSection() {
  const items = [
    {
      image: "/images/governcard1.svg",
      title: "Create Proposals",
      text: "Initiate new ideas and protocol changes that drive TIWI’s next evolution.",
    },
    {
      image: "/images/governcard2.svg",
      title: "Vote with TWC Stake",
      text: "Use your governance tokens to support or reject community proposals.",
    },
    {
      image: "/images/governcard3.svg",
      title: "Join Governance Rounds",
      text: "Initiate new ideas and protocol changes that drive TIWI’s next evolution.",
    },
    {
      image: "/images/governcard4.svg",
      title: "View Treasury Activity",
      text: "Track every fund movement transparently. From inflows to DAO expenditures.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-gradient-to-r from-[#B1F12873] to-[#010501]" />
          
          <span className="text-[#B5B5B5] text-sm md:text-xl font-medium">
            Governance
          </span>

          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-gradient-to-r from-[#010501] to-[#B1F12873]" />
        </div>

        <h2 className="mt-6 text-3xl font-semibold leading-snug">
          Govern the{" "}
          <span className="text-lime-400">Future of TIWI</span>
        </h2>

        <p className="text-[#A3A3A3] mt-4 text-lg font-normal max-w-xl mx-auto">
          TIWI’s DAO lets users shape the protocol through proposal creation 
          and weighted voting using TWC.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 mt-12">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[320px] rounded-xl overflow-hidden"
        >
          {/* Imported background image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="w-auto h-auto select-none"
            priority
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Absolute text block (matches screenshot) */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="text-[16px] text-[#B1F128] font-semibold mb-1">{item.title}</h2>
            <p className="text-[14px] font-light text-white/90 leading-snug">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

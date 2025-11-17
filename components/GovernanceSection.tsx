"use client";

import Image from "next/image";

function cn(...classes: Array<string | boolean | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export default function GovernanceSection() {
  const items = [
    {
      title: "Create Proposals",
      desc: "Initiate new ideas and protocol changes that drive TIWI’s next evolution.",
      icon: "/images/icons/proposal.svg",
    },
    {
      title: "Vote with TWC Stake",
      desc: "Use your governance tokens to support or reject community proposals.",
      icon: "/images/icons/vote.svg",
    },
    {
      title: "Join Governance Rounds",
      desc: "Initiate new ideas and protocol changes that drive TIWI’s next evolution.",
      icon: "/images/icons/governance.svg",
    },
    {
      title: "View Treasury Activity",
      desc: "Track every fund movement transparently. From inflows to DAO expenditures.",
      icon: "/images/icons/treasury.svg",
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

        <p className="text-[#A3A3A3] mt-4 text-sm max-w-xl mx-auto">
          TIWI’s DAO lets users shape the protocol through proposal creation 
          and weighted voting using TWC.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl p-6 bg-[#0C0F0C] border border-[#1A1F1A] relative overflow-hidden flex flex-col"
            )}
          >
            {/* GLOW (behind content, above bg image) */}
            <div
              className="
                absolute inset-0
                rotate-[-9.444deg]
                pointer-events-none
                mix-blend-plus-lighter
                blur-[27.38px]
                bg-[linear-gradient(180deg,rgba(177,241,40,0.33)_-33.46%,rgba(177,241,40,0)_90.38%)]
                z-5
              "
            />

            {/* TOP: square with centered icon (content on top of bg) */}
            <div className="w-full flex justify-center relative z-10">


              {/* BACKGROUND IMAGE */}
                <Image
              src="/images/brick-gradient.svg"
              alt="brick gradient"
              fill
              className="absolute inset-0 object-cover z-0"
            />
              <div className="w-[100px] aspect-square flex items-center justify-center overflow-hidden ">
                <div className="w-14 h-14 flex items-center justify-center bg-[#121712] rounded-full">
                  <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={28} 
                  height={28} 
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM: title + description */}
            <div className="mt-4 flex-1 flex flex-col justify-center z-10">
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

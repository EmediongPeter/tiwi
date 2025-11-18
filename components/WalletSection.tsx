"use client";

import Image from "next/image";



export default function WalletSection() {
  return (

    <div className="flex flex-col items-center justify-center gap-2 mb-4 bg-gradient-to-r from-[#0D360089] via-[#0D3600DD] to-[#0D360080] py-20">

<div className="flex items-center justify-center gap-2 mb-16">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#B1F12873] to-[#010501]" />
          <span className="  text-[#B5B5B5] text-sm md:text-xl font-medium">
           Wallet And Gas Experience
          </span>
          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#010501] to-[#B1F12873]" />
        </div>


    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">




        
      {/* ===================== TOP-LEFT TEXT ===================== */}
      <div className=" pl-60 py-19 flex flex-col justify-center">
        <h1 className="text-white text-4xl font-semibold mb-4">TIWI Wallet</h1>

        <h3 className="text-[#c8f05f] text-xl font-medium mb-4">
          Your Keys. Your Wallet. Your World
        </h3>

        <p className="text-white/80 w-[85%] text-lg font-normal leading-relaxed">
          Create or import a non-custodial multi-chain wallet secured
          by biometrics and PIN. Connect easily to all dApps within TIWI
        </p>
      </div>

      {/* ===================== TOP-RIGHT IMAGE ===================== */}
      <div className="relative h-[420px] md:h-full">
        <Image
          src="/images/wallet1.svg"
          alt="Lock Image"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ===================== BOTTOM-LEFT IMAGE ===================== */}
      <div className="relative h-[420px] md:h-full">
        <Image
          src="/images/wallet2.svg"
          alt="Coin Image"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ===================== BOTTOM-RIGHT TEXT ===================== */}
      <div className="pl-52 py-17 flex flex-col justify-center">
        <h1 className="text-white text-4xl font-semibold mb-4">
          Flexible Gas Payments
        </h1>

        <h3 className="text-[#c8f05f] text-xl font-medium mb-4">
          Choose How You Pay for Gas
        </h3>

        <p className="text-white/80 text-lg font-normal w-[85%] leading-relaxed">
          Pay gas in native tokens, TWC, or the swap token. TIWI
          recommends the cheapest option and displays a live USD
          estimate before confirmation.
        </p>
      </div>
    </section>
    </div>
  );
}

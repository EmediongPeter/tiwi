"use client";

import Image from "next/image";



export default function WalletSection() {
  return (

    <div className="flex flex-col items-center justify-center gap-2 mb-4 bg-gradient-to-r from-[#0D360089] via-[#0D3600DD] to-[#0D360080] py-20 pb-0 md:pb-20">

<div className="flex items-center justify-center gap-2 mb-16">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#B1F12873] to-[#010501]" />
          <span className="  text-[#B5B5B5] text-sm md:text-xl font-medium">
           Wallet And Gas Experience
          </span>
          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#010501] to-[#B1F12873]" />
        </div>


    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">




        
      {/* ===================== TOP-LEFT TEXT ===================== */}
      <div className=" md:pl-60 md:py-19 px-5 md:px-0 mb-5 md:mb-0 flex flex-col justify-center">
        <h1 className="text-white md:text-4xl text-2xl font-semibold mb-4">TIWI Wallet</h1>

        <h3 className="text-[#c8f05f] md:text-xl text-lg font-medium mb-4">
          Your Keys. Your Wallet. Your World
        </h3>

        <p className="text-white/80 md:w-[85%] md:text-lg text-sm font-normal leading-relaxed">
          Create or import a non-custodial multi-chain wallet secured
          by biometrics and PIN. Connect easily to all dApps within TIWI
        </p>
      </div>

      {/* ===================== TOP-RIGHT IMAGE ===================== */}
      <div className="relative h-[160px] md:h-full">
        <Image
          src="/images/wallet1.svg"
          alt="Lock Image"
          fill
          className="md:object-contain object-cover"
          priority
        />
      </div>

      {/* ===================== BOTTOM-LEFT IMAGE ===================== */}
      <div className="relative h-[250px] md:h-full hidden md:block">
        <Image
          src="/images/wallet2.svg"
          alt="Coin Image"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ===================== BOTTOM-RIGHT TEXT ===================== */}
      <div className="md:pl-52 md:py-17 px-5 md:px-0 flex flex-col justify-center pt-16 md:pt-0">
        <h1 className="text-white md:text-4xl text-2xl font-semibold mb-4">
          Flexible Gas Payments
        </h1>

        <h3 className="text-[#c8f05f] md:text-xl text-lg font-medium mb-4">
          Choose How You Pay for Gas
        </h3>

        <p className="text-white/80 md:text-lg text-sm font-normal md:w-[85%] leading-relaxed">
          Pay gas in native tokens, TWC, or the swap token. TIWI
          recommends the cheapest option and displays a live USD
          estimate before confirmation.
        </p>
      </div>

      <div className="relative h-[160px] md:h-full md:hidden mt-5">
        <Image
          src="/images/wallet2.svg"
          alt="Coin Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
    </div>
  );
}

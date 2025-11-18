"use client";

import Image from "next/image";



export default function WalletSection() {
  return (
    <section className="bg-[linear-gradient(268.95deg,rgba(13,54,0,0.536345)_4.06%,rgba(13,54,0,0.866791)_42.35%,rgba(13,54,0,0.50218)_99.53%)]">
      <div className="flex items-center justify-center gap-1 md:gap-2 py-8">
        {/* Left border decoration */}
        <div className="relative w-6 md:w-8 h-7 md:h-8">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/40 to-lime-950" />
          <div className="absolute left-0.5 top-0.5 bottom-0.5 w-0.5 bg-lime-400 rounded-full" />
        </div>

        <p className="text-[#B5B5B5] text-xs md:text-lg font-medium px-2">
          Wallet And Gas Experience
        </p>

        {/* Right border decoration */}
        <div className="relative w-6 md:w-8 h-7 md:h-8">
          <div className="absolute inset-0 bg-gradient-to-l from-lime-400/40 to-lime-950" />
          <div className="absolute right-0.5 top-0.5 bottom-0.5 w-0.5 bg-lime-400 rounded-full" />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* ===================== TOP-LEFT TEXT ===================== */}
        <div className="px-8 md:px-16 flex flex-col justify-center pb-4 md:pb-0">
          <h1 className="text-white text-[20px] md:text-[40px] font-bold md:font-semibold mb-4">TIWI Wallet</h1>

          <h3 className="text-[#c8f05f] text-sm md:text-2xl font-medium mb-4">
            Your Keys. Your Wallet. Your World
          </h3>

          <p className="font-medium text-white/80 w-[75%] leading-relaxed text-sm md:text-lg">
            Create or import a non-custodial multi-chain wallet secured
            by biometrics and PIN. Connect easily to all dApps within TIWI
          </p>
        </div>

        {/* ===================== TOP-RIGHT IMAGE ===================== bg-[#091605]*/}
        <div className="relative w-full h-[170px] md:h-[300px]">
          <Image
            src="/images/padlock.svg"
            alt="Lock Image"
            fill
            className="object-cover object-left"   // <-- makes image fill the height & width
            priority
          />
        </div>

        {/* ===================== BOTTOM-LEFT IMAGE ===================== */}
        <div className="relative w-full h-[170px] md:h-[300px] order-2 md:order-1">
          <Image
            src="/images/wallet2.svg"
            alt="Lock Image"
            fill
            className="object-cover object-right"   // <-- makes image fill the height & width
            priority
          />
        </div>

        {/* ===================== BOTTOM-RIGHT TEXT ===================== */}
        <div className="px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center order-1 md:order-2">
          <h1 className="text-white text-[20px] md:text-[40px] font-bold md:font-semibold mb-4">
            Flexible Gas Payments
          </h1>

          <h3 className="text-[#c8f05f] text-sm md:text-2xl font-medium mb-4">
            Choose How You Pay for Gas
          </h3>

          <p className="font-medium text-white/80 w-[75%] leading-relaxed text-sm md:text-lg">
            Pay gas in native tokens, TWC, or the swap token. TIWI
            recommends the cheapest option and displays a live USD
            estimate before confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}

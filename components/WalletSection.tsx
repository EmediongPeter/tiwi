"use client";

import Image from "next/image";



export default function WalletSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* ===================== TOP-LEFT TEXT ===================== */}
      <div className="bg-[#0f1d0c] px-16 py-24 flex flex-col justify-center">
        <h1 className="text-white text-4xl font-semibold mb-4">TIWI Wallet</h1>

        <h3 className="text-[#c8f05f] text-xl font-medium mb-4">
          Your Keys. Your Wallet. Your World
        </h3>

        <p className="text-white/80 w-[75%] leading-relaxed">
          Create or import a non-custodial multi-chain wallet secured
          by biometrics and PIN. Connect easily to all dApps within TIWI
        </p>
      </div>

      {/* ===================== TOP-RIGHT IMAGE ===================== */}
      <div className="relative h-[420px] md:h-full bg-[#091605]">
        <Image
          src="/images/wallet1.svg"
          alt="Lock Image"
          fill
          className="object-contain p-16"
          priority
        />
      </div>

      {/* ===================== BOTTOM-LEFT IMAGE ===================== */}
      <div className="relative h-[420px] md:h-full bg-[#071303]">
        <Image
          src="/images/wallet2.svg"
          alt="Coin Image"
          fill
          className="object-contain p-16"
          priority
        />
      </div>

      {/* ===================== BOTTOM-RIGHT TEXT ===================== */}
      <div className="bg-[#0f1d0c] px-16 py-24 flex flex-col justify-center">
        <h1 className="text-white text-4xl font-semibold mb-4">
          Flexible Gas Payments
        </h1>

        <h3 className="text-[#c8f05f] text-xl font-medium mb-4">
          Choose How You Pay for Gas
        </h3>

        <p className="text-white/80 w-[75%] leading-relaxed">
          Pay gas in native tokens, TWC, or the swap token. TIWI
          recommends the cheapest option and displays a live USD
          estimate before confirmation.
        </p>
      </div>
    </section>
  );
}

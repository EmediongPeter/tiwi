"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative z-0 w-full overflow-hidden bg-[#010501] pt-40 md:pt-68 pb-12 select-none font-normal">
      {/* Floating Leaves */}
      <Image
        src="/images/Leave3.svg"
        alt="leaf"
        width={48}
        height={48}
        className="absolute left-72 top-150 w-10 h-10 opacity-80 select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
      <Image
        src="/images/Leave1.svg"
        alt="leaf"
        width={66}
        height={66}
        className="absolute right-64 top-50 w-20 h-12 opacity-80 select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
      <Image
        src="/images/Leave2.svg"
        alt="leaf"
        width={48}
        height={48}
        className="absolute left-[31.5%] top-84 w-10 h-10 opacity-60 select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />

      <div className="flex flex-col items-center text-center px-6">
        {/* Pill Tag */}
        <div className="mb-8 text-[#E7E7E7B2] border border-[#CEFF8B]/20 rounded-full px-6 py-2 text-sm tracking-wide flex items-center gap-2">
          <img src="/images/sparkle.svg" alt="" className="w-4 h-4" />
          Multi chain. Non custodial. Mobile first. Mainnet ready.
        </div>

        {/* Title */}
        <div className="relative z-0 text-center font-extrabold leading-tight text-4xl md:text-6xl">
          <h1 className="text-white">
            Powering the{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#7FB041]/50 h-7 top-1/2 -translate-y-1/2 -z-10"></span>
              Next Evolution
            </span>{" "}
            of
          </h1>

          <h1 className="mt-2">
            <span
              className="
                bg-gradient-to-r from-[#A8FF61] to-[#4B6E21]
                bg-clip-text text-transparent
              "
            >
              Decentralized Finance
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl text-lg mb-8">
          Trade, stake, lend, pay, and build across multiple chains in one
          unified Super App.
        </p>

        {/* CTA */}
        <button
          className="
            flex items-center gap-3 text-lg mb-10
            px-6 py-2
            rounded-2xl
            text-white font-medium
            bg-gradient-to-b from-[#B1F128] via-[#79A726] to-[#466B06]
            shadow-[0_0_20px_rgba(124,255,88,0.45)]
            hover:opacity-90
            transition
          "
        >
          Launch App
          <img src="/images/arrowicon.svg" alt="" className="w-6 h-6" />
        </button>

        {/* User Stats */}
        <div className="flex items-center gap-6 mb-12">
          <Image
            src="/images/users.svg"
            alt="user"
            width={48}
            height={48}
            className="rounded-full w-32 select-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />

          <div className="text-left text-white">
            <p className="text-2xl text-[#B1F128] font-bold">2,000+</p>
            <p className="text-sm text-gray-300">Live users</p>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/Android.svg"
            alt="Google Play"
            width={48}
            height={48}
            className="w-40 h-auto cursor-pointer select-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
          <Image
            src="/images/Apple.svg"
            alt="App Store"
            width={48}
            height={48}
            className="w-40 h-auto cursor-pointer select-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Bottom Ribbon */}
        <div className="mt-48 relative w-screen flex flex-col justify-center">
          <div className="w-[140%] rotate-[4deg] bg-linear-to-r from-[#B1F128]/50 to-[#668B17]/50 h-24 px-4 flex text-black font-semibold text-center"></div>

          <div className="w-[140%] absolute -top-12 rotate-[-4deg] bg-linear-to-r from-[#C5FF85] to-[#7EFF43] py-6 px-[15%] flex gap-52 text-black font-semibold text-center">
            <div className="text-left">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm font-normal">Protocol Status</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold">$10m</p>
              <p className="text-sm font-normal">Trading Volume</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold">56+</p>
              <p className="text-sm font-normal">Supported chains</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Image */}
      <div className="absolute right-20 bottom-10 translate-y-10 w-[380px] md:w-[580px]">
        <Image
          src="/images/Phonetiwi.svg"
          alt="App Preview"
          width={48}
          height={48}
          className="w-[90rem] object-contain select-none"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      {/* Background Image Behind Everything */}
      <Image
        src="/images/Herobackground.svg"
        alt="background"
        fill
        className="absolute bottom-0 left-0 object-cover z-[-1]"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
    </section>
  );
}

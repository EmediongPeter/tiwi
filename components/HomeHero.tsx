"use client";

import Image from "next/image";
import ComingSoon from "./ComingSoon";
import HoverReveal from "./HoverReveal";

export default function HeroSection() {
  return (
    <section className="relative z-0 w-full overflow-hidden bg-[#010501] pt-40 md:pt-68 pb-12 select-none font-normal">
      {/* Floating Leaves */}
      <Image
        src="/images/Leave3.svg"
        alt="leaf"
        width={48}
        height={48}
        className="absolute md:left-72 md:top-150 top-100 w-10 h-10 opacity-80 select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
      <Image
        src="/images/Leave1.svg"
        alt="leaf"
        width={66}
        height={66}
        className="absolute md:right-64 right-0 top-50 w-20 h-12 opacity-80 select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
      <Image
        src="/images/Leave2.svg"
        alt="leaf"
        width={48}
        height={48}
        className="absolute left-[31.5%] md:top-84 top-58 w-10 h-10 opacity-60 select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />

      <div className="flex flex-col items-center text-center px-6">
        {/* Pill Tag */}
        <div className="md:mb-8 mb-14 text-[#E7E7E7B2] border border-[#CEFF8B]/20 rounded-full md:px-6 px-2 py-2 md:text-sm text-xs tracking-wide flex items-center gap-2">
          <img src="/images/sparkle.svg" alt="" className="w-4 h-4" />
          Multi chain. Non custodial. Mobile first.
        </div>

        {/* Title */}
        <div className="relative z-0 text-center font-extrabold leading-tight text-4xl md:text-6xl">
          <h1 className="text-white">
            Powering the{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#7FB041]/50 md:h-7 h-6 top-1/2 -translate-y-1/2 -z-10"></span>
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

          <HoverReveal
            hoverContent={<ComingSoon />}
          >
            <Image
              src="/images/Android.svg"
              alt="Google Play"
              width={48}
              height={48}
              className="w-40 h-auto"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </HoverReveal>
          <HoverReveal
            hoverContent={<ComingSoon />}
          >
            <Image
              src="/images/Apple.svg"
              alt="App Store"
              width={48}
              height={48}
              className="w-40 h-auto"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </HoverReveal>
        </div>

        {/* Bottom Ribbon */}
        <div className="md:mt-48 mt-66 relative md:w-screen w-[150%] flex flex-col justify-center">
          <div className="w-[140%] md:rotate-[4deg] rotate-[5deg] z-20 md:z-0 bg-linear-to-r from-[#B1F128]/50 to-[#668B17]/50 md:h-24 h-14 px-4 flex text-black font-semibold text-center"></div>

          <div className="w-[140%] absolute md:-top-12 -top-5 z-30 md:z-0 md:rotate-[-4deg] rotate-[-8deg] bg-linear-to-r from-[#C5FF85] to-[#7EFF43] md:py-6 py-3 md:px-[15%] px-[20%] flex gap-6 md:gap-52 text-black font-semibold text-center">
            <div className="text-left">
              <p className="md:text-2xl text-lg font-bold">24/7</p>
              <p className="md:text-sm text-xs font-normal">Protocol Status</p>
            </div>
            <div className="text-left">
              <p className="md:text-2xl text-lg font-bold">$10m</p>
              <p className="md:text-sm text-xs font-normal">Trading Volume</p>
            </div>
            <div className="text-left">
              <p className="md:text-2xl text-lg font-bold">56+</p>
              <p className="md:text-sm text-xs font-normal">Supported chains</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Image */}
      <div
        className="
    absolute 
    left-1/2 -translate-x-1/2 
    bottom-10 translate-y-10
    w-[340px] md:w-[500px]
    md:right-20 md:ml-36 md:translate-x-0 md:bottom-10
  "
      >
        <Image
          src="/images/promaxpro.svg"
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

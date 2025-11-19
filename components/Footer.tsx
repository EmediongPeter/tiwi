"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full font-[Manrope] bg-[#010501] overflow-hidden">

      {/* GREEN TOP GLOW BACKGROUND - Desktop */}
      <div
        className="absolute md:block hidden -top-[40rem] left-1/2 -translate-x-1/2 -translate-y-1/3 
                   w-[90%] h-[60rem] rounded-full blur-2xl
                   bg-linear-to-b from-[#78A627] to-[#78A627] pointer-events-none">
      </div>

      {/* Mobile Top Decorative Elements */}
      <div className="md:hidden flex justify-end absolute top-0 right-0 w-full overflow-hidden pointer-events-none">
        <Image
          src="/images/green-glow-mobile.svg" 
          alt="green glow top mobile"
          width={100}
          height={100}
          className="object-cover select-none"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block relative z-10 w-full px-36 py-20">
        <div className="flex gap-10 justify-between text-white">
          
          {/* LEFT LOGO SECTION */}
          <div className="space-y-4">
            <Image
              src="/images/logo.svg" 
              alt="TIWI Protocol Logo"
              width={150}
              height={150}
              className="w-[140px] h-auto select-none"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />

            <p className="text-sm text-gray-300">
              © Copyright 2025 TIWI Ecosystem.  
              All<br /> rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-28">
            {/* PRODUCT */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#">Trade</Link></li>
                <li><Link href="#">Earn Hub</Link></li>
                <li><Link href="#">Lending</Link></li>
                <li><Link href="#">TIWI Pay</Link></li>
                <li><Link href="#">NFT Marketplace</Link></li>
                <li><Link href="#">Launchpad</Link></li>
              </ul>
            </div>

            {/* DEVELOPERS */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#">API & SDK</Link></li>
                <li><Link href="#">Contracts & Audits</Link></li>
                <li><Link href="#">GitHub</Link></li>
                <li><Link href="#">Status</Link></li>
              </ul>
            </div>

            {/* COMMUNITY */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Community</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#">Telegram</Link></li>
                <li><Link href="#">X</Link></li>
                <li><Link href="#">Email</Link></li>
                <li><Link href="#">Documentation</Link></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Terms of Use</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden relative z-10 w-full flex flex-col items-center px-4 py-6 gap-6">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/logo.svg" 
            alt="TIWI Protocol Logo"
            width={137}
            height={36}
            className="w-[137px] h-auto select-none"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
          
          {/* Divider */}
          <div className="w-[124px] h-[1px] bg-[#1F261E]"></div>
        </div>

        {/* Links Container */}
        <div className="w-full max-w-[398px] flex flex-col gap-10">
          
          {/* First Row: Product & Developers */}
          <div className="flex justify-between items-start gap-4">
            
            {/* PRODUCT */}
            <div className="flex flex-col gap-[10px] w-[180px]">
              <h4 className="text-white font-semibold text-base leading-normal">Product</h4>
              <ul className="flex flex-col gap-[10px]">
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Trade</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Earn Hub</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Lending</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">TIWI Pay</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">NFT Marketplace</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Launchpad</Link></li>
              </ul>
            </div>

            {/* DEVELOPERS */}
            <div className="flex flex-col gap-[10px] w-[180px]">
              <h4 className="text-white font-semibold text-base leading-normal">Developers</h4>
              <ul className="flex flex-col gap-[10px]">
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">API & SDK</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Contracts & Audits</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>

          {/* Second Row: Company & Community */}
          <div className="flex justify-between items-start gap-4">
            
            {/* COMPANY */}
            <div className="flex flex-col gap-[10px] w-[180px]">
              <h4 className="text-white font-semibold text-base leading-normal">Company</h4>
              <ul className="flex flex-col gap-[10px]">
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* COMMUNITY */}
            <div className="flex flex-col gap-[10px] w-[180px]">
              <h4 className="text-white font-semibold text-base leading-normal">Contact</h4>
              <ul className="flex flex-col gap-[10px]">
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Telegram</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">X</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Email</Link></li>
                <li><Link href="#" className="text-[#B5B5B5] text-sm font-medium leading-normal hover:text-white transition-colors">Docs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[0.5px] bg-[#1F261E]"></div>

        {/* Copyright */}
        <p className="text-[#B5B5B5] text-xs font-medium leading-[150%] opacity-[0.703] text-center">
          © Copyright 2025 TIWI Ecosystem. All rights reserved.
        </p>
      </div>

      {/* BOTTOM RIGHT DECORATIVE IMAGE - Desktop */}
      <Image
        src="/images/footer-decoration.svg" 
        alt="footer decoration"
        width={400}
        height={400}
        className="absolute md:block hidden bottom-0 right-0 w-[200px] select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* BOTTOM LEFT DECORATIVE IMAGE - Desktop */}
      <Image
        src="/images/Ellipse-icon.svg" 
        alt="Ellipse-icon decoration"
        width={400}
        height={400}
        className="absolute md:block hidden bottom-0 -left-4 w-[150px] select-none"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* GREEN BOTTOM GLOW BACKGROUND - Desktop */}
      <div
        className="absolute md:block hidden -bottom-[60rem] left-1/2 -translate-x-1/2
                   w-[90%] h-[60rem] rounded-full blur-2xl
                   bg-linear-to-t from-[#78A627] to-[#78A627] pointer-events-none">
      </div>
    </footer>
  );
}

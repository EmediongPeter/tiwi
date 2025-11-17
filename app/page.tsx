import FAQSection from "@/components/FAQsection";
import GovernanceSection from "@/components/GovernanceSection";
import HeroSection from "@/components/HomeHero";
import LaunchLifecycle from "@/components/LaunchLifecycle";
import PartnersSlider from "@/components/PartnersSlider";
import ProductModules from "@/components/ProductModules";
import ProtocolDashboard from "@/components/ProtocolDashboard";
import WhatIsTiwi from "@/components/WhatIsTiwi";
import CoreBenefits from "@/components/CoreBenefits";
import Image from "next/image";
import WalletSection from "@/components/WalletSection";


export default function Home() {
  return (
    <div className="font-[Manrope] font-black text-4xl">

     <HeroSection />
     <div id="about">
       <WhatIsTiwi />
     </div>
     <CoreBenefits />
     <div id="modules">
       <ProductModules />
     </div>
     <div id="">
     <WalletSection />
     </div>
     <div id="">
     <GovernanceSection />
     </div>
     <div id="how-it-works">
       <ProtocolDashboard />
     </div>
     <div id="governance">
       <LaunchLifecycle />
     </div>
     <div id="roadmap">
       <PartnersSlider />
     </div>
     <FAQSection />
    </div>
  );
}

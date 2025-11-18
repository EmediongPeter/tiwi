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
import HowItWorks from "@/components/HowItWorks";


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

     <div id="how-it-works">
     <HowItWorks />
     </div>
    
     <div id="">
     <WalletSection />
     </div>
     <div id="governance">
     <GovernanceSection />
     </div>
     <div id="">
       <ProtocolDashboard />
     </div>
   
     <div id="roadmap">
       <LaunchLifecycle />
     </div>
     <div id="">
       <PartnersSlider />
     </div>
     <FAQSection />
    </div>
  );
}

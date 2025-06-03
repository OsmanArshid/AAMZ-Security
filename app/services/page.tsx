'use client';
import dynamic from "next/dynamic";
import RouteChange from "@/components/common/RouteChange"; // This can be server or client depending on its content

const ServicesSection = dynamic(() => import("@/components/Services/ServicesSection"), { ssr: false });
const ElectronicService = dynamic(() => import("@/components/Services/ElectronicService"), { ssr: false });
// const Tiers = dynamic(() => import("@/components/Services/Tiers"), { ssr: false });


export default function Services() {
  return (
    <main>
      <div className="h-fit">
        <RouteChange />
        <ServicesSection />
        <ElectronicService />
        {/* <Tiers /> */}
      </div>
    </main>
  );
}

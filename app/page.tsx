import HomeCarousel from "@/components/Home/HomeCarousel";
import Hero from "@/components/Home/Hero";
import ClientSection from "@/components/Home/ClientSection";
import RouteChange from "@/components/common/RouteChange";

export default function Home() {
  return (
    <main>
      <div className="h-fit">
        <RouteChange />
        <Hero />
        <HomeCarousel />
        <ClientSection />
      </div>
    </main>
  );
}

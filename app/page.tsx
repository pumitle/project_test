
import HeroSection from "@/src/presentation/components/HeroSection"
import Navbar from "@/src/presentation/components/layout/Navbar";
import ServicesSection from "@/src/presentation/components/ServicesSection"

export default function Home() {
  return (
      <main className="min-h-screen bg-[#0c1f52]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </main>
  );
}



import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import ServiceGrid from "@/components/ServiceGrid";
import Image from "next/image";

export default function Home() {
 return (
    <main className="min-h-screen bg-[#0d1b4b]">
      <Navbar />
      <HeroBanner />
      <ServiceGrid />
    </main>
  );
}

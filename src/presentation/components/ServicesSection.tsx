import React from "react";
import ServiceCard from "@/src/presentation/components/ui/ServiceCard";
import { SERVICE_CARDS } from "@/src/presentation/data/siteData";

export default function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f2a5e] to-[#091744] pb-24 pt-0">
      {/* White blob top-right (matching cloud shape from hero) */}
      <div className="absolute top-0 right-0 w-[300px] h-[180px] overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 300 180"
          width="300"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300,180 L300,110 Q270,65 225,80 Q210,42 170,55 Q148,18 112,36 Q78,10 52,44 Q18,32 0,65 L0,180 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Three-column grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICE_CARDS.map((card, index) => (
            <ServiceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

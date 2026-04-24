import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ServiceCard as ServiceCardType } from "@/src/presentation/types/index";

interface Props {
  card: ServiceCardType;
  index: number;
}

export default function ServiceCard({ card, index }: Props) {
  const isCenter = index === 1;

  return (
    <Card
      className={`group relative overflow-hidden cursor-pointer ${
        isCenter ? "-translate-y-4" : ""
      }`}
      sx={{
        background: `linear-gradient(145deg, ${card.bgFrom} 0%, ${card.bgTo} 100%)`,
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "18px",
        boxShadow: isCenter
          ? "0 16px 48px rgba(0,0,0,0.35)"
          : "0 8px 24px rgba(0,0,0,0.25)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        "&:hover": {
          transform: `translateY(${isCenter ? "-24px" : "-8px"})`,
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
        },
      }}
    >
      {/* Decorative glow circle */}
      <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full bg-white/[0.04] group-hover:bg-white/[0.08] transition-colors duration-300 pointer-events-none" />

      <CardContent sx={{ p: "28px !important" }} className="relative z-10">
        {/* Icon Badge */}
        <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[22px] mb-5 group-hover:bg-white/15 transition-colors duration-300">
          {card.icon}
        </div>

        {/* Title */}
        <h3
          className="text-white font-black text-xl tracking-wider uppercase mb-3"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          {card.title}
        </h3>

        {/* Red accent line */}
        <div className="h-[3px] bg-[#c0392b] rounded-full mb-4 w-9 group-hover:w-14 transition-all duration-300" />

        {/* Description */}
        <p className="text-white/65 text-[13px] leading-[1.75] group-hover:text-white/85 transition-colors duration-300">
          {card.description}
        </p>

        {/* Learn More link */}
        <div className="mt-5 flex items-center gap-2 text-white/45 text-[11px] font-semibold tracking-[2px] uppercase group-hover:text-white/75 transition-colors duration-200">
          Learn More
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200 inline-block">
            →
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

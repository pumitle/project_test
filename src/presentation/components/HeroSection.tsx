import React from "react";
import Button from "@mui/material/Button";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { HERO_CONTENT, FLOATING_ICONS } from "@/src/presentation/data/siteData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f52] via-[#0f2960] to-[#1a1040]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#8b1c1c]/25" />

      {/* Geometric decoration */}
      <div className="absolute right-[28%] top-[12%] w-44 h-44 border border-white/10 rotate-45 pointer-events-none" />
      <div className="absolute right-[34%] top-[22%] w-32 h-32 border border-white/[0.06] rotate-[20deg] pointer-events-none" />

      {/* Star particles */}
      {[
        { top: "18%", left: "55%", size: 8,  color: "#f0c040" },
        { top: "58%", left: "52%", size: 6,  color: "#f0c040" },
        { top: "72%", left: "68%", size: 5,  color: "#60aaff" },
        { top: "22%", left: "82%", size: 7,  color: "#f0c040" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${2 + i * 0.3}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text Content ── */}
          <div className="space-y-6">
            <p className="animate-fade-in-up text-white/55 text-[10.5px] font-semibold tracking-[3px] uppercase">
              {HERO_CONTENT.eyebrow}
            </p>

            <h1
              className="animate-fade-in-up-delay-1 text-white font-black leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              {HERO_CONTENT.headline.map((line, i) => (
                <span key={i} className="block text-[clamp(52px,7vw,80px)]">
                  {line}
                </span>
              ))}
            </h1>

            <p className="animate-fade-in-up-delay-2 text-white/70 text-[14.5px] leading-[1.7] max-w-[400px]">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="animate-fade-in-up-delay-3">
              <Button
                variant="outlined"
                size="large"
                endIcon={<RocketLaunchOutlinedIcon sx={{ fontSize: 17 }} />}
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.5)",
                  borderWidth: "2px",
                  borderRadius: "999px",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  px: 3.5,
                  py: 1.25,
                  letterSpacing: "0.02em",
                  "&:hover": {
                    borderColor: "white",
                    borderWidth: "2px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                {HERO_CONTENT.cta.replace("🚀", "").trim()}
              </Button>
            </div>
          </div>

          {/* ── Right: Hero Visual ── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[380px] h-[380px]">
              {/* Radial glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-400/10 to-transparent blur-2xl pointer-events-none" />

              {/* Main astronaut */}
              <div
                className="absolute inset-0 flex items-center justify-center text-[150px] animate-float select-none"
                style={{ animationDuration: "3.5s" }}
              >
                🧑‍🚀
              </div>

              {/* Floating icons around astronaut */}
              {FLOATING_ICONS.map((icon, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse-slow select-none"
                  style={{
                    ...icon.style,
                    fontSize: icon.style.fontSize,
                    animationDuration: `${2.5 + i * 0.4}s`,
                  }}
                >
                  {icon.emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cloud / wave shape bottom-right */}
      <svg
        className="absolute bottom-0 right-0 z-[4] pointer-events-none"
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
    </section>
  );
}

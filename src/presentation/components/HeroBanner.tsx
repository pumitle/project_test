"use client";

import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Typography from "@mui/material/Typography";

export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden min-h-[520px] flex items-center"
      style={{
        background:
          "linear-gradient(135deg, #0d1b4b 55%, #6b1220 100%)",
      }}
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right red glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #e8273a 0%, transparent 70%)",
            transform: "translate(40%, -40%)",
          }}
        />
        {/* Floating geometric triangles */}
        <svg
          className="absolute right-[5%] top-[8%] opacity-20"
          width="260"
          height="260"
          viewBox="0 0 260 260"
          fill="none"
        >
          <polygon
            points="130,10 250,240 10,240"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <polygon
            points="130,40 220,220 40,220"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        {/* Stars */}
        {[
          { cx: "78%", cy: "55%", r: 6, fill: "#f5c842" },
          { cx: "82%", cy: "30%", r: 4, fill: "#f5c842" },
          { cx: "90%", cy: "70%", r: 5, fill: "#f5c842" },
        ].map((star, i) => (
          <svg
            key={i}
            className="absolute animate-pulse"
            style={{ left: star.cx, top: star.cy }}
            width="12"
            height="12"
          >
            <circle cx={star.r} cy={star.r} r={star.r} fill={star.fill} />
          </svg>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-16 flex items-center justify-between gap-10">
        {/* Left — text */}
        <div className="max-w-xl animate-fade-slide">
          <p className="text-white/50 text-xs font-body tracking-widest uppercase mb-4">
            AWEBCO · Illinois Web Design Company
          </p>

          <Typography
            variant="h1"
            className="!font-heading !text-[clamp(3rem,7vw,5.5rem)] !font-extrabold !leading-none !tracking-tight text-white uppercase"
          >
            Skyrocket
            <br />
            Your Website
          </Typography>

          <p className="mt-5 text-white/70 text-base font-body leading-relaxed max-w-md">
            A Premium Website Solution for Business Owners that want to
            Skyrocket past the competition.
          </p>

          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<RocketLaunchIcon />}
            className="!mt-8 !px-8 !py-3 !text-base"
          >
            START A PROJECT
          </Button>
        </div>

        {/* Right — astronaut illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center animate-float">
          <div
            className="w-72 h-72 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, rgba(232,39,58,0.15) 0%, transparent 70%)",
            }}
          >
            {/* SVG Astronaut placeholder — swap with <Image> for real asset */}
            <svg
              viewBox="0 0 200 220"
              width="260"
              height="280"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Astronaut on rocket"
            >
              {/* Rocket body */}
              <ellipse
                cx="100"
                cy="170"
                rx="22"
                ry="40"
                fill="#e8273a"
                opacity="0.9"
              />
              <ellipse cx="100" cy="133" rx="22" ry="10" fill="#c01e2d" />
              {/* Flames */}
              <ellipse cx="100" cy="212" rx="10" ry="18" fill="#f5a623" opacity="0.8" />
              <ellipse cx="100" cy="218" rx="6" ry="10" fill="#fff" opacity="0.5" />
              {/* Rocket fins */}
              <polygon points="78,185 62,205 82,195" fill="#c01e2d" />
              <polygon points="122,185 138,205 118,195" fill="#c01e2d" />
              {/* Helmet */}
              <circle cx="100" cy="82" r="32" fill="white" />
              <circle cx="100" cy="82" r="25" fill="#cce4ff" opacity="0.7" />
              <circle cx="100" cy="82" r="16" fill="#4a90d9" opacity="0.5" />
              {/* Suit */}
              <rect x="75" y="112" width="50" height="45" rx="14" fill="white" />
              <rect x="62" y="118" width="16" height="30" rx="8" fill="white" />
              <rect x="122" y="118" width="16" height="30" rx="8" fill="white" />
              {/* Suit details */}
              <rect x="88" y="122" width="24" height="16" rx="6" fill="#cce4ff" />
              <circle cx="100" cy="82" r="5" fill="white" opacity="0.6" />
              {/* A badge */}
              <circle cx="83" cy="125" r="5" fill="#e8273a" />
              <text x="80.5" y="128" fontSize="7" fill="white" fontWeight="bold">A</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#0d1b4b"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}
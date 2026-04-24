"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const services = [
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    title: "Web Design",
    description:
      "Crafting captivating online experiences that resonate with your brand's essence and engage your audience with stunning visuals.",
    color: "#3b82f6",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: "Web Development",
    description:
      "Bringing your vision and designs to life with precision coding on a WordPress platform and integrated custom solutions.",
    color: "#e8273a",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    title: "S.E.O.",
    description:
      "Elevate your online presence with our SEO service. We enhance your website's visibility, rankings, and organic traffic.",
    color: "#10b981",
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-[--navy] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[--crimson] text-xs font-body tracking-widest uppercase mb-2">
            What We Offer
          </p>
          <Typography
            variant="h2"
            className="!font-heading !text-4xl !font-bold text-white uppercase"
          >
            Our Core Services
          </Typography>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group cursor-pointer"
              sx={{
                background:
                  "linear-gradient(145deg, #1a2d6b 0%, #0d1b4b 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                },
              }}
            >
              <CardContent className="!p-8">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.color}22`,
                    border: `1px solid ${service.color}44`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <Typography
                  variant="h3"
                  className="!font-heading !text-2xl !font-bold !text-white !mb-3 uppercase"
                >
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  className="!text-white/60 !font-body !leading-relaxed !text-sm !mb-6"
                >
                  {service.description}
                </Typography>

                {/* CTA */}
                <Button
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: service.color,
                    paddingLeft: 0,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    "&:hover": {
                      background: "transparent",
                      gap: "8px",
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
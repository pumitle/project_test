import { NavItem, ServiceCard, HeroContent } from "@/src/presentation/types/index";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services",   href: "/services",   hasDropdown: true },
  { label: "Resources",  href: "/resources",  hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Work",       href: "/work" },
];

export const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "web-design",
    icon: "🎨",
    title: "WEB DESIGN",
    description:
      "Crafting captivating online experiences that resonate with your brand's essence and engage your audience effectively.",
    bgFrom: "#1a3a7a",
    bgTo: "#0f2860",
  },
  {
    id: "web-development",
    icon: "💻",
    title: "WEB DEVELOPMENT",
    description:
      "Bringing your vision and designs to life with precision coding on a WordPress platform and integrated solutions.",
    bgFrom: "#162f6a",
    bgTo: "#0c2354",
  },
  {
    id: "seo",
    icon: "🚀",
    title: "S.E.O.",
    description:
      "Elevate your online presence with our SEO service. We enhance your website's visibility, rankings, and organic traffic.",
    bgFrom: "#112646",
    bgTo: "#0a1e3c",
  },
];

export const HERO_CONTENT: HeroContent = {
  eyebrow: "AWEBCO – ILLINOIS WEB DESIGN COMPANY",
  headline: ["SKYROCKET", "YOUR WEBSITE"],
  subheadline:
    "A Premium Website Solution for Business Owners that want to Skyrocket past the competition.",
  cta: "START A PROJECT 🚀",
};

export const FLOATING_ICONS = [
  { emoji: "💻", style: { top: "10%", left: "5%",   animationDelay: "0s",   fontSize: "22px" } },
  { emoji: "📱", style: { top: "60%", left: "2%",   animationDelay: "0.6s", fontSize: "18px" } },
  { emoji: "⭐", style: { top: "5%",  right: "10%", animationDelay: "0.3s", fontSize: "20px" } },
  { emoji: "✈️", style: { top: "35%", right: "0%",  animationDelay: "0.9s", fontSize: "18px" } },
];

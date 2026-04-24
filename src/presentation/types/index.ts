export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ServiceCard {
  id: string;
  icon: string;        // emoji or MUI icon name
  title: string;
  description: string;
  bgFrom: string;      // gradient start color
  bgTo: string;        // gradient end color
}

export interface HeroContent {
  eyebrow: string;
  headline: string[];  // each string = one line
  subheadline: string;
  cta: string;
}

import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  /** Bullet points shown in the detail modal when this card is clicked. */
  capabilities?: string[];
  href?: string;
}

export interface IndustryItem {
  id: string;
  icon: ReactNode;
  image?: string;
  name: string;
  description: string;
  href?: string;
}

export interface ProjectItem {
  id: string;
  icon: ReactNode;
  image?: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/** Shape passed to the shared DetailModal when a card is clicked. */
export interface DetailContent {
  icon: ReactNode;
  kicker: string;
  title: string;
  description: string;
  tags?: string[];
  bullets?: string[];
}

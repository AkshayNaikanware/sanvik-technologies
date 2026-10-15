export type PageId = 'industry' | 'students';

export interface Device {
  image: string;
  name: string;
  tag: string;
  desc: string;
}

export interface Course {
  image: string;
  title: string;
  description: string;
  points: string[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Branch {
  city: string;
  tagline: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  projectUrl?: string;
  repositoryUrl?: string;
  slug: string;
  logo?: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  technologies?: string[];
  featured?: boolean;
}

export interface About {
  name: string;
  description: string;
  aboutMe: {
    raw: string;
  };
  profileImage?: {
    url: string;
    title: string;
  };
  skills?: string[];
  experience?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface SiteMetadata {
  title: string;
  greeting: string;
  url: string;
  description: string;
  author: string;
  social: SocialLink[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar?: {
    url: string;
    title: string;
  };
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}


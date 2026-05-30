export interface ProjectCaseStudy {
  objective: string;
  process: string[];
  toolsUsed: string[];
  result: string;
  gallery: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Social Media" | "Packaging" | "Branding" | "Print Media" | "Logo Design" | "AI Creative Solutions";
  thumbnail: string;
  description: string;
  tools: string[];
  clientName?: string;
  feedback?: string;
  beforeImage?: string; // For comparison slider
  afterImage?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  startingPrice: string;
  deliveryTime: string;
  deliverables: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: "Design Software" | "Core Strengths" | "AI & Modern Tools";
  level: number; // 0-100
  projectsCount: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  projectType: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface PortfolioCMS {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    whatsappNumber: string;
    email: string;
    linkedinUrl: string;
    behanceUrl: string;
    instagramUrl: string;
    githubUrl: string;
    yearsOfExperience: string;
    completedProjectsCount: number;
    happyClientsCount: number;
    location: string;
    resumeDetails: {
      aboutSummary: string;
      education: Array<{ degree: string; institution: string; year: string }>;
      certifications: string[];
    };
  };
  skills: SkillItem[];
  services: ServiceItem[];
  projects: PortfolioProject[];
  testimonials: TestimonialItem[];
  blogPosts: BlogPost[];
}

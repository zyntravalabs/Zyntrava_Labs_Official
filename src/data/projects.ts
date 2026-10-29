/**
 * Central project catalogue. Add a project by appending an entry here —
 * no layout changes needed. Set `published: false` to hide an entry.
 * Only add liveUrl / repositoryUrl once they are real, verified links.
 */
export type ProjectCategory =
  | "Business Websites"
  | "Restaurant Websites"
  | "E-commerce"
  | "Education and LMS"
  | "SaaS and Web Applications"
  | "AI Projects"
  | "Cybersecurity"
  | "Internal Products"
  | "UI/UX Concepts";

export type ProjectType = "Client Project" | "Internal Product" | "Academic Project" | "Concept Demo";
export type ProjectStatus = "Concept" | "In Development" | "Completed" | "Live";

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  categories: ProjectCategory[];
  projectType: ProjectType;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  thumbnail?: string;
  screenshots?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  published: boolean;
  dateCreated?: string;
  objective?: string;
  solution?: string;
  caseStudySections?: CaseStudySection[];
}

export const CATEGORIES: ProjectCategory[] = [
  "Business Websites",
  "Restaurant Websites",
  "E-commerce",
  "Education and LMS",
  "SaaS and Web Applications",
  "AI Projects",
  "Cybersecurity",
  "Internal Products",
  "UI/UX Concepts",
];

const PENDING = "Full write-up, screenshots and links will be added once verified against the current build.";

export const projects: Project[] = [
  {
    id: "ember-spice",
    slug: "ember-and-spice",
    title: "Ember & Spice",
    shortDescription: "A warm, appetite-led restaurant website concept with menu, gallery and visit sections.",
    fullDescription:
      "Ember & Spice is a restaurant website concept exploring how a small dining brand can present its menu, atmosphere and location in a single, inviting experience. It is a demonstration piece, not a commissioned client site.",
    categories: ["Restaurant Websites", "Business Websites", "UI/UX Concepts"],
    projectType: "Concept Demo",
    status: "Concept",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Menu presentation", "Photo gallery", "Visit & contact information"],
    featured: true,
    published: true,
    objective: "Show how a restaurant can turn browsers into visitors with a clear menu and easy directions.",
    solution: "A visually rich single brand experience with a focused path from menu to visit details.",
  },
  {
    id: "aureva",
    slug: "aureva-fine-jewellery",
    title: "AURÉVA Fine Jewellery",
    shortDescription: "A luxury jewellery e-commerce concept with catalogue browsing and product pages.",
    fullDescription:
      "AURÉVA is a fine-jewellery storefront concept focused on elegant product presentation. Shopping interactions in this concept are demonstrations only — no real payments are processed.",
    categories: ["E-commerce", "UI/UX Concepts"],
    projectType: "Concept Demo",
    status: "Concept",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Product catalogue", "Catalogue filters", "Product detail pages", "Mock cart (no live payments)"],
    featured: true,
    published: true,
    objective: "Explore a premium, trust-building storefront for high-value products.",
    solution: "Restrained luxury styling, large imagery and clear product information.",
  },
  {
    id: "learnsphere",
    slug: "learnsphere",
    title: "LearnSphere",
    shortDescription: "A coaching institute and learning platform concept with courses, lessons and quizzes.",
    fullDescription:
      "LearnSphere is a concept for coaching institutes that need both a public-facing website and a learning area. Live classroom and real-time features are planned, not implemented.",
    categories: ["Education and LMS", "SaaS and Web Applications"],
    projectType: "Concept Demo",
    status: "In Development",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Course catalogue", "Lesson pages", "Quizzes", "Progress tracking", "Live classes (planned)"],
    featured: true,
    published: true,
    objective: "Give coaching institutes one place for admissions enquiries and student learning.",
    solution: "A course-first structure that connects marketing pages to a simple learning workflow.",
  },
  {
    id: "dev-portfolio",
    slug: "developer-portfolio",
    title: "Personal Developer Portfolio",
    shortDescription: "The founder's developer portfolio for skills, project case studies and contact.",
    fullDescription:
      "A personal developer portfolio presenting skills and project work. Resume, certificates and contact links will be added once those assets are configured.",
    categories: ["Internal Products", "Business Websites"],
    projectType: "Internal Product",
    status: "In Development",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Skills overview", "Project case studies", "Contact section"],
    featured: false,
    published: true,
  },
  {
    id: "soc-platform",
    slug: "soc-monitoring-incident-response",
    title: "SOC Monitoring & Incident Response Platform",
    shortDescription: "A cybersecurity project exploring security-event ingestion and incident workflows.",
    fullDescription:
      "An academic cybersecurity project covering security-event ingestion, event normalisation and an incident handling workflow. " + PENDING,
    categories: ["Cybersecurity", "SaaS and Web Applications"],
    projectType: "Academic Project",
    status: "In Development",
    technologies: ["Web dashboard", "Log processing"],
    features: ["Security-event ingestion", "Event normalisation", "Incident workflow"],
    featured: true,
    published: true,
  },
  {
    id: "skill-gap",
    slug: "skill-gap-career-recommendation",
    title: "Skill Gap Analysis & Career Recommendation System",
    shortDescription: "A multi-layered AI system that assesses skills, finds gaps and recommends career paths.",
    fullDescription:
      "An academic AI and education application that assesses a learner's skills, identifies gaps against target roles and suggests learning and career directions. " + PENDING,
    categories: ["AI Projects", "Education and LMS"],
    projectType: "Academic Project",
    status: "Completed",
    technologies: ["Python", "Machine Learning"],
    features: ["Skill assessment", "Gap analysis", "Career recommendations"],
    featured: false,
    published: true,
  },
  {
    id: "groundwater",
    slug: "ai-groundwater-estimation",
    title: "AI-Driven Groundwater Estimation System",
    shortDescription: "An AI/data project for estimating groundwater levels from environmental data.",
    fullDescription: "An academic AI and data project focused on estimating groundwater availability. " + PENDING,
    categories: ["AI Projects"],
    projectType: "Academic Project",
    status: "Completed",
    technologies: ["Python", "Data Analysis", "Machine Learning"],
    features: ["Data preprocessing", "Estimation model"],
    featured: false,
    published: true,
  },
  {
    id: "fullstack-ecom",
    slug: "full-stack-ecommerce-platform",
    title: "Full-Stack E-commerce Platform",
    shortDescription: "An e-commerce application with catalogue, cart and backend services.",
    fullDescription: "A full-stack e-commerce application covering product catalogue, cart and server-side logic. " + PENDING,
    categories: ["E-commerce", "SaaS and Web Applications"],
    projectType: "Academic Project",
    status: "Completed",
    technologies: ["Full-stack JavaScript", "REST API"],
    features: ["Product catalogue", "Shopping cart", "Backend API"],
    featured: false,
    published: true,
  },
  {
    id: "api-testing",
    slug: "api-testing-automation-framework",
    title: "API Testing & Automation Framework",
    shortDescription: "A framework for automated API testing and repeatable quality checks.",
    fullDescription: "A testing and automation framework for validating API behaviour. " + PENDING,
    categories: ["Internal Products", "SaaS and Web Applications"],
    projectType: "Academic Project",
    status: "Completed",
    technologies: ["API Testing", "Automation"],
    features: ["Automated test suites", "Endpoint validation"],
    featured: false,
    published: true,
  },
  {
    id: "nids",
    slug: "network-intrusion-detection-system",
    title: "Network Intrusion Detection System",
    shortDescription: "A cybersecurity project for monitoring network traffic and detecting intrusions.",
    fullDescription: "An academic cybersecurity project focused on network monitoring and intrusion detection. " + PENDING,
    categories: ["Cybersecurity", "AI Projects"],
    projectType: "Academic Project",
    status: "Completed",
    technologies: ["Python", "Network Analysis"],
    features: ["Traffic monitoring", "Intrusion detection"],
    featured: false,
    published: true,
  },
];

export const publishedProjects = projects.filter((p) => p.published);
export const featuredProjects = publishedProjects.filter((p) => p.featured);
export const getProject = (slug: string) => publishedProjects.find((p) => p.slug === slug);

export function filterProjects(list: Project[], category: ProjectCategory | "All", query: string) {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    if (category !== "All" && !p.categories.includes(category)) return false;
    if (!q) return true;
    return [p.title, p.shortDescription, ...p.technologies, ...p.categories, p.projectType]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
}

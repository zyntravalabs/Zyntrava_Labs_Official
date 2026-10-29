import { Briefcase, Rocket, ShoppingBag, GraduationCap, LayoutDashboard, Wrench, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  forWho: string;
  solves: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "business",
    title: "Business Website Development",
    icon: Briefcase,
    summary: "Responsive multi-page websites that explain what you do and make it easy to get in touch.",
    forWho: "Local businesses, consultants and service providers.",
    solves: "No website, an outdated one, or one that doesn't explain your services clearly.",
    deliverables: ["Responsive multi-page website", "Business information & service pages", "Contact and WhatsApp enquiry links", "Maps and basic on-page SEO"],
  },
  {
    id: "landing",
    title: "Landing Page Development",
    icon: Rocket,
    summary: "Focused, conversion-minded pages for launches, campaigns and lead generation.",
    forWho: "Product launches, events and marketing campaigns.",
    solves: "Traffic landing on generic pages with no clear next step.",
    deliverables: ["Product launch pages", "Campaign pages", "Lead-generation forms", "Conversion-focused layouts"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Website Development",
    icon: ShoppingBag,
    summary: "Online stores with catalogues, carts and checkout once a payment provider is configured.",
    forWho: "Shops and brands ready to sell online.",
    solves: "Selling only through messages or marketplaces you don't control.",
    deliverables: ["Product catalogues", "Shopping cart", "Checkout integration (when configured)", "Product and order management"],
  },
  {
    id: "education",
    title: "Coaching & Education Websites",
    icon: GraduationCap,
    summary: "Sites for institutes and educators, from course catalogues to learning features.",
    forWho: "Coaching institutes, tutors and training providers.",
    solves: "Admissions enquiries scattered across calls and chats; no home for course info.",
    deliverables: ["Course catalogues", "Admissions enquiry flows", "Instructor profiles", "Learning platform features where required"],
  },
  {
    id: "webapps",
    title: "Custom Web Applications",
    icon: LayoutDashboard,
    summary: "Dashboards and internal tools built around how your business actually works.",
    forWho: "Teams outgrowing spreadsheets and manual processes.",
    solves: "Repetitive manual work and data spread across disconnected tools.",
    deliverables: ["Dashboards", "Internal business tools", "API integrations", "Data-driven applications"],
  },
  {
    id: "redesign",
    title: "Website Redesign & Maintenance",
    icon: Wrench,
    summary: "Refresh, fix and speed up an existing website, with optional agreed upkeep.",
    forWho: "Owners of existing sites that feel dated, slow or broken on mobile.",
    solves: "Poor mobile experience, visual inconsistency and lingering bugs.",
    deliverables: ["Responsive improvements", "UI refresh", "Bug fixes", "Performance improvements", "Agreed ongoing maintenance"],
  },
];

import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileStack,
  Globe2,
  LifeBuoy,
  LucideIcon,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

export type Service = {
  title: string;
  summary: string;
  detail: string;
  Icon: LucideIcon;
};

export type WorkItem = {
  name: string;
  type: string;
  href: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Bespoke Applications",
    summary: "Custom business platforms built around the way your team actually works.",
    detail:
      "We design and build internal tools, customer portals, workflow systems and reporting platforms that replace spreadsheets, manual handoffs and disconnected SaaS products.",
    Icon: Code2,
  },
  {
    title: "Websites & Digital Presence",
    summary: "Fast, credible websites for businesses, products and specialist services.",
    detail:
      "From simple company sites to product-led web experiences, we focus on clear positioning, accessible design, search-friendly structure and maintainable delivery.",
    Icon: Globe2,
  },
  {
    title: "Systems Integration",
    summary: "Connect the tools you already use so data moves without duplicate entry.",
    detail:
      "We integrate CRMs, billing tools, document workflows, reporting databases, cloud services and line-of-business systems with pragmatic automation.",
    Icon: Workflow,
  },
  {
    title: "Data & Reporting",
    summary: "Decision-ready dashboards, data pipelines and operational reporting.",
    detail:
      "We turn scattered business data into reliable views for owners, managers and teams, with governance and auditability built in from the start.",
    Icon: BarChart3,
  },
  {
    title: "Cloud & Infrastructure",
    summary: "Deployments, hosting, observability and security that suit the size of the job.",
    detail:
      "We can run lean managed hosting, improve existing environments, automate deployments and keep production systems observable and recoverable.",
    Icon: Cloud,
  },
  {
    title: "Technology Problem Solving",
    summary: "Short, focused engagements to untangle messy operational technology problems.",
    detail:
      "When the problem is unclear, we map the workflow, identify constraints, prototype options and ship the smallest useful fix before complexity grows.",
    Icon: Wrench,
  },
];

export const work: WorkItem[] = [
  {
    name: "Projenta",
    type: "Project and operations platform",
    href: "https://projenta.io",
    summary:
      "A product ecosystem for project delivery, operational visibility and business process management.",
    points: ["Product strategy", "Web application", "Secure deployment"],
  },
  {
    name: "Crossbench",
    type: "Decision and evaluation tooling",
    href: "https://crossbench.io",
    summary:
      "A structured platform for comparing options, reviewing trade-offs and supporting better decisions.",
    points: ["Application design", "Evaluation workflows", "Data modelling"],
  },
  {
    name: "CRM8",
    type: "Business CRM and automation",
    href: "https://crm8.effectx.com.au",
    summary:
      "A practical CRM environment focused on relationship tracking, operational automation and reporting.",
    points: ["CRM workflows", "Automation", "Business reporting"],
  },
  {
    name: "YieldDock",
    type: "Property document intelligence",
    href: "https://yielddock.effectx.com.au",
    summary:
      "A document intake and review workflow for rental statements, evidence, extracted fields and ledger-ready approvals.",
    points: ["OCR workflows", "Review queues", "Financial evidence handling"],
  },
];

export const processSteps = [
  {
    title: "Understand the work",
    text: "We map the actual business process, decision points, data sources and pain points before recommending a build.",
    Icon: FileStack,
  },
  {
    title: "Design the useful version",
    text: "We define the workflows, screens and integrations needed for a credible first release without loading the project with theatre.",
    Icon: Building2,
  },
  {
    title: "Build and iterate",
    text: "We ship in practical stages, test against real usage and keep the implementation maintainable.",
    Icon: Database,
  },
  {
    title: "Operate with confidence",
    text: "We deploy, monitor and improve the system so it remains useful after launch.",
    Icon: ShieldCheck,
  },
];

export const reasons = [
  "Business-first discovery before build decisions",
  "Pragmatic delivery across design, software and infrastructure",
  "Direct communication with the people doing the work",
  "Production-minded engineering from the first release",
];

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const icons = {
  ArrowRight,
  CheckCircle2,
  LifeBuoy,
};

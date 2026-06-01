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
    summary: "Custom software built around the way your team works.",
    detail:
      "We build portals, internal tools, workflow systems and dashboards that replace spreadsheets and manual handoffs.",
    Icon: Code2,
  },
  {
    title: "Websites & Digital Presence",
    summary: "Clear, professional websites for businesses and products.",
    detail:
      "We create fast websites with simple messaging, strong design, search-friendly pages and easy maintenance.",
    Icon: Globe2,
  },
  {
    title: "Systems Integration",
    summary: "Connect your tools so information moves without double handling.",
    detail:
      "We link CRMs, billing tools, document workflows, cloud services and reporting systems.",
    Icon: Workflow,
  },
  {
    title: "Data & Reporting",
    summary: "Useful dashboards and reports your team can trust.",
    detail:
      "We turn scattered data into clear views for owners, managers and teams.",
    Icon: BarChart3,
  },
  {
    title: "Cloud & Infrastructure",
    summary: "Hosting, deployments and monitoring sized to the job.",
    detail:
      "We set up lean hosting, automated deployments, monitoring and recovery for production systems.",
    Icon: Cloud,
  },
  {
    title: "Technology Problem Solving",
    summary: "Focused help when the problem is messy or unclear.",
    detail:
      "We map the issue, test options and ship the smallest useful fix before the project gets too large.",
    Icon: Wrench,
  },
];

export const work: WorkItem[] = [
  {
    name: "Projenta",
    type: "Project platform",
    href: "https://projenta.io",
    summary:
      "A platform for project delivery, team visibility and business process management.",
    points: ["Product planning", "Web application", "Secure hosting"],
  },
  {
    name: "Crossbench",
    type: "Decision support",
    href: "https://crossbench.io",
    summary:
      "A tool for comparing options, reviewing trade-offs and making better decisions.",
    points: ["Application design", "Review workflows", "Data structure"],
  },
];

export const processSteps = [
  {
    title: "Understand the work",
    text: "We learn how the work happens now, what slows it down and what needs to change.",
    outcome: "Clear problem map",
    Icon: FileStack,
  },
  {
    title: "Design the useful version",
    text: "We plan the screens, workflows and integrations needed for a useful first version.",
    outcome: "Practical build plan",
    Icon: Building2,
  },
  {
    title: "Build and iterate",
    text: "We build in stages, test with real use and keep the system easy to maintain.",
    outcome: "Working system",
    Icon: Database,
  },
  {
    title: "Operate with confidence",
    text: "We deploy, monitor and improve the system after launch.",
    outcome: "Supported launch",
    Icon: ShieldCheck,
  },
];

export const reasons = [
  "We start with the business problem",
  "We keep the build practical and focused",
  "You deal directly with the people doing the work",
  "We build for real use, not just launch day",
];

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/security", label: "Security" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const icons = {
  ArrowRight,
  CheckCircle2,
  LifeBuoy,
};

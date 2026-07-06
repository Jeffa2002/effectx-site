import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Eye,
  FileStack,
  FileText,
  Globe2,
  LayoutDashboard,
  LifeBuoy,
  LucideIcon,
  MessageSquare,
  Newspaper,
  PencilLine,
  ShieldCheck,
  TrendingUp,
  Users,
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

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  readTime: string;
  body: string[];
};

export type AdminMetric = {
  label: string;
  value: string;
  delta: string;
  Icon: LucideIcon;
};

export type WebView = {
  name: string;
  path: string;
  status: string;
  visitors: string;
  conversion: string;
  owner: string;
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
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const adminMetrics: AdminMetric[] = [
  {
    label: "Tracked web views",
    value: "8",
    delta: "+2 this quarter",
    Icon: Eye,
  },
  {
    label: "Qualified enquiries",
    value: "14",
    delta: "+18% month on month",
    Icon: MessageSquare,
  },
  {
    label: "Top page engagement",
    value: "62%",
    delta: "Services page",
    Icon: TrendingUp,
  },
  {
    label: "Draft content",
    value: "3",
    delta: "Insights queue",
    Icon: PencilLine,
  },
];

export const webViews: WebView[] = [
  {
    name: "Home",
    path: "/",
    status: "Live",
    visitors: "1,284",
    conversion: "3.8%",
    owner: "Marketing",
  },
  {
    name: "Services",
    path: "/services",
    status: "Live",
    visitors: "842",
    conversion: "5.6%",
    owner: "Sales",
  },
  {
    name: "Security",
    path: "/security",
    status: "Review",
    visitors: "418",
    conversion: "2.9%",
    owner: "Operations",
  },
  {
    name: "Insights",
    path: "/insights",
    status: "Drafting",
    visitors: "New",
    conversion: "Baseline",
    owner: "Content",
  },
];

export const adminQueue = [
  {
    title: "Publish the first AI automation case note",
    type: "Insight",
    status: "Draft",
  },
  {
    title: "Refresh Crossbench work sample",
    type: "Case study",
    status: "Review",
  },
  {
    title: "Connect Plausible or server analytics feed",
    type: "Analytics",
    status: "Next",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "small-business-ai-ops",
    title: "What small businesses should automate before they chase AI",
    category: "Automation",
    date: "2026-07-07",
    readTime: "4 min read",
    summary:
      "A practical order of operations for turning repetitive work into monitored, useful systems.",
    body: [
      "The best AI project usually starts as a boring workflow cleanup. If the data is scattered, the handoffs are unclear, or nobody knows when a process fails, an AI layer will only make the mess faster.",
      "Start with one reliable signal: a form submission, a missed payment, a support ticket, a failed deploy, or a report that someone checks manually. Route it into a small system that records the event, decides whether it matters, and tells the right person only when action is needed.",
      "Once the workflow is visible and measured, AI can help classify, summarise, draft, or prioritise. That is where the value appears: less noise, better decisions, and a clearer next step for the person doing the work.",
    ],
  },
  {
    slug: "websites-as-operating-systems",
    title: "Your website should be part of the operating system",
    category: "Web strategy",
    date: "2026-07-07",
    readTime: "3 min read",
    summary:
      "A business website can do more than describe the company. It can become a managed view of demand, content, and conversion.",
    body: [
      "Most websites are treated as brochures. The better version is a managed surface: clear public pages, tracked conversion paths, content queues, and a simple admin view that shows what is working.",
      "The useful admin view does not need to be complicated. It should show top pages, enquiry paths, stale content, drafts waiting for approval, and the next recommended change.",
      "That turns the website into an operating rhythm. Review the dashboard, ship one improvement, and measure whether it helped.",
    ],
  },
  {
    slug: "security-for-lean-web-apps",
    title: "Security basics for lean web applications",
    category: "Security",
    date: "2026-07-07",
    readTime: "5 min read",
    summary:
      "The controls worth putting in early when a web application needs to stay small but trustworthy.",
    body: [
      "Lean applications still need adult supervision. Backups, restore drills, dependency alerts, SSL checks, least-privilege deployment keys, and basic log review are not enterprise luxuries.",
      "The trick is to automate the checks so they do not become another neglected spreadsheet. A small daily or weekly signal is enough if it tells you what failed, whether it repeated, and where to start.",
      "Security improves fastest when it is part of the build process and the operating process, not a separate panic project after launch.",
    ],
  },
];

export const icons = {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  Newspaper,
  Users,
};

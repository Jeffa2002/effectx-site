import {
  ArrowRight,
  Activity,
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
  SearchCheck,
  ShieldCheck,
  Sparkles,
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
  bounce?: string;
  nextAction?: string;
};

export const services: Service[] = [
  {
    title: "Replace Spreadsheet Workflows",
    summary: "Custom tools for the messy work that has outgrown manual tracking.",
    detail:
      "We build portals, internal tools, workflow systems and dashboards that replace spreadsheets and manual handoffs.",
    Icon: Code2,
  },
  {
    title: "Managed Websites",
    summary: "Public sites connected to content, analytics and conversion review.",
    detail:
      "We create fast websites with simple messaging, strong design, search-friendly pages and easy maintenance.",
    Icon: Globe2,
  },
  {
    title: "Connect Business Systems",
    summary: "Move data between tools without double handling or blind spots.",
    detail:
      "We link CRMs, billing tools, document workflows, cloud services and reporting systems.",
    Icon: Workflow,
  },
  {
    title: "Operating Dashboards",
    summary: "Management views that show what changed and what needs attention.",
    detail:
      "We turn scattered data into clear views for owners, managers and teams.",
    Icon: BarChart3,
  },
  {
    title: "Cloud Operations",
    summary: "Lean hosting, deploys, monitoring and recovery for real systems.",
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
    type: "Operating platform",
    href: "https://projenta.io",
    summary:
      "A project and operations platform with admin analytics, delivery visibility and secure production hosting.",
    points: ["Product planning", "Admin analytics", "Secure hosting"],
  },
  {
    name: "Crossbench",
    type: "Decision intelligence",
    href: "https://crossbench.io",
    summary:
      "A decision-support product with structured research, bill intelligence, support workflows and operational reporting.",
    points: ["Application design", "AI workflows", "Usage analysis"],
  },
];

export const proofPoints = [
  {
    title: "Admin dashboards",
    text: "Usage, content, enquiries and action queues for sites and products that need regular review.",
  },
  {
    title: "AI operations",
    text: "Quiet monitoring, incident summaries, repo intelligence and daily founder briefings.",
  },
  {
    title: "Secure launches",
    text: "Protected admin areas, backups, restore checks, SSL monitoring and deployment hygiene.",
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
    label: "Sessions",
    value: "1,284",
    delta: "+18% last 30 days",
    Icon: Eye,
  },
  {
    label: "Qualified leads",
    value: "14",
    delta: "5 from service pages",
    Icon: MessageSquare,
  },
  {
    label: "Contact conversion",
    value: "3.8%",
    delta: "+0.7 pts vs previous",
    Icon: TrendingUp,
  },
  {
    label: "Pages needing work",
    value: "4",
    delta: "2 stale, 1 high exit, 1 draft",
    Icon: SearchCheck,
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
    bounce: "41%",
    nextAction: "Test stronger proof strip above services",
  },
  {
    name: "Services",
    path: "/services",
    status: "Live",
    visitors: "842",
    conversion: "5.6%",
    owner: "Sales",
    bounce: "34%",
    nextAction: "Split service copy into use-case pages",
  },
  {
    name: "Security",
    path: "/security",
    status: "Review",
    visitors: "418",
    conversion: "2.9%",
    owner: "Operations",
    bounce: "47%",
    nextAction: "Add managed security checklist CTA",
  },
  {
    name: "Insights",
    path: "/insights",
    status: "Drafting",
    visitors: "New",
    conversion: "Baseline",
    owner: "Content",
    bounce: "Baseline",
    nextAction: "Publish reporting and admin dashboard article",
  },
];

export const trafficTrend = [
  { period: "Week 1", sessions: "248", leads: "2", conversion: "2.8%" },
  { period: "Week 2", sessions: "291", leads: "3", conversion: "3.1%" },
  { period: "Week 3", sessions: "334", leads: "4", conversion: "3.7%" },
  { period: "Week 4", sessions: "411", leads: "5", conversion: "4.2%" },
];

export const sourceBreakdown = [
  { source: "Direct / brand", sessions: "486", share: "38%", quality: "High" },
  { source: "Organic search", sessions: "354", share: "28%", quality: "Medium" },
  { source: "Referrals", sessions: "231", share: "18%", quality: "High" },
  { source: "Social / shared", sessions: "126", share: "10%", quality: "Watch" },
  { source: "Unclassified", sessions: "87", share: "6%", quality: "Clean up" },
];

export const journeyPaths = [
  {
    path: "Home -> Services -> Contact",
    users: "112",
    conversion: "8.1%",
    note: "Best-performing commercial path",
  },
  {
    path: "Insights -> Services -> Contact",
    users: "34",
    conversion: "5.9%",
    note: "Needs more article-to-service CTAs",
  },
  {
    path: "Security -> Contact",
    users: "28",
    conversion: "3.6%",
    note: "Intent is good but page needs clearer offer",
  },
];

export const contentPerformance = [
  {
    title: "Your website should be part of the operating system",
    type: "Insight",
    views: "146",
    signal: "Strong fit for admin-dashboard service",
  },
  {
    title: "Security basics for lean web applications",
    type: "Insight",
    views: "92",
    signal: "Add checklist download or consult CTA",
  },
  {
    title: "Crossbench work sample",
    type: "Case study",
    views: "Draft",
    signal: "High priority proof asset",
  },
];

export const adminQueue = [
  {
    title: "Publish the admin analytics case note",
    type: "Insight",
    status: "Draft",
  },
  {
    title: "Expand Projenta and Crossbench proof cards",
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
    slug: "useful-website-admin-dashboard",
    title: "What a useful website admin dashboard should tell you",
    category: "Web strategy",
    date: "2026-08-11",
    readTime: "6 min read",
    summary:
      "The small set of signals that turns website analytics into clear, repeatable decisions for the business.",
    body: [
      "Most website dashboards are good at producing numbers and poor at helping someone decide what to do next. Sessions, impressions and bounce rates can describe activity, but they rarely explain whether the site is attracting the right people, helping them move forward or creating useful work for the business.",
      "A useful admin dashboard starts with decisions, not charts. It should help an owner or manager answer three questions quickly: what changed, does it matter, and what should we do about it? If a metric cannot influence a decision, it probably does not deserve a prominent place on the screen.",
      "Begin with outcomes. For a service business, that might mean qualified enquiries, booked calls or completed quote requests. For a software product, it could be registrations that reach a meaningful activation step. Show the outcome alongside the pages, campaigns and journeys that contributed to it. A raw traffic increase is less valuable than knowing that a particular service page brought three suitable enquiries.",
      "Then show the path people took. A small list of common journeys—such as Home to Services to Contact—often reveals more than a large traffic report. It can show where interested visitors continue, where they leave and which insight articles introduce people to a commercial service. The goal is not to track every click. It is to make the important routes visible.",
      "Content needs an operating view too. Flag pages with falling traffic, high exits, stale claims or missing calls to action. Keep drafts and review dates in the same place. This turns content from an occasional redesign project into a manageable queue of small improvements.",
      "Trust matters as much as presentation. The dashboard should state its reporting period, data source and definition of a conversion. Internal visits, bots, duplicate events and test submissions should be filtered where practical. When a number is estimated or incomplete, say so. A modest dashboard with dependable definitions is more useful than a polished one that changes its story every week.",
      "Avoid filling the screen with vanity metrics. Total lifetime page views, social follower counts and a single site-wide bounce rate can look impressive without guiding action. Keep diagnostic metrics available for investigation, but give the main view to outcomes, meaningful journeys, exceptions and work that needs attention.",
      "The final ingredient is rhythm. Review the dashboard on a regular schedule, choose one or two changes, assign an owner and record what you expect to happen. At the next review, compare the result. That simple loop—observe, decide, change and measure—is what makes the website part of the business operating system rather than a brochure that slowly goes stale.",
      "The best dashboard is not the one with the most data. It is the one that helps the team notice a meaningful change and confidently take the next useful action.",
    ],
  },
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
  Activity,
  Sparkles,
  Users,
};

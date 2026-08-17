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

const allBlogPosts: BlogPost[] = [
  {
    slug: "why-business-dashboards-fail",
    title: "Why business dashboards fail—and what managers actually need to see",
    category: "Business systems",
    date: "2026-09-01",
    readTime: "7 min read",
    summary:
      "A dashboard earns its place when it helps someone notice a change, understand why it matters and decide what to do next.",
    body: [
      "Business dashboards often fail in a surprisingly polished way. The charts look professional, the data refreshes automatically and everyone agrees that visibility is important. Then the dashboard becomes another tab nobody opens unless a meeting is already underway.",
      "The usual problem is not the visual design. It is that the dashboard was built around available data instead of management decisions. A system can report dozens of accurate measures and still leave a manager unable to answer the questions that matter: what changed, where is the risk, who owns the next step and does anything need attention today?",
      "A useful dashboard begins with a decision. Before choosing charts, define the action each view is meant to support. A sales dashboard might help a manager find stalled opportunities. An operations dashboard might expose overdue work, blocked handoffs or an unusual rise in rework. A service dashboard might show whether response times are slipping before customers start complaining. If no decision changes when a measure moves, that measure probably belongs in a detailed report rather than the main view.",
      "Too many dashboards also confuse activity with progress. Emails sent, tickets opened and tasks created are easy to count, but they do not necessarily show whether the business is moving forward. Managers usually need a small combination of outcomes, flow and exceptions: what finished, what is moving through the process, and what has fallen outside the expected range.",
      "Context is what turns a number into a signal. Revenue of $80,000 might be strong or weak depending on the target, season and stage of the month. Twelve overdue jobs might be normal for a large queue or a serious delivery problem for a small team. Show the comparison that makes the measure understandable: target, previous period, normal range or agreed service level. Avoid decorative percentage changes that have no operational meaning.",
      "Ownership matters just as much. A red indicator without an owner creates anxiety rather than action. When something needs attention, the dashboard should make the next step clear: investigate a failed integration, contact a customer, review an approval, or assign capacity. Where practical, connect the signal to the underlying record so the manager can move from noticing the issue to resolving it without beginning a separate search.",
      "Trust can quietly destroy adoption. If people regularly find duplicate records, unexplained gaps or totals that disagree with another system, they stop relying on the dashboard even after the data is fixed. State where the data comes from, when it was last refreshed and how important measures are defined. A modest view with dependable numbers will outperform an ambitious one that requires an explanation every week.",
      "Different people also need different levels of detail. An owner may need a weekly view of cash, demand, delivery and risk. A team leader may need today's workload and exceptions. A person doing the work needs the actual queue. Trying to serve all three with one crowded screen usually serves none of them. Start with a clear audience and allow deeper investigation only where it supports that audience's decisions.",
      "The best test is a short management conversation. Put the dashboard in front of the people who will use it and ask: what do you notice, what would you do, and what question remains unanswered? Their responses reveal more than a long list of requested metrics. Build the smallest view that supports the recurring conversation, use it for several weeks, and remove anything that does not influence action.",
      "A good dashboard is not a wall of business intelligence. It is a working surface for attention and accountability. It helps managers see the few things that changed, understand whether they matter and confidently choose the next useful action.",
    ],
  },
  {
    slug: "build-buy-or-connect-business-software",
    title: "Build, buy or connect? How to choose business software without creating another silo",
    category: "Business systems",
    date: "2026-08-25",
    readTime: "7 min read",
    summary:
      "A practical way to decide whether to adopt a product, build a focused tool or connect the systems already doing part of the job.",
    body: [
      "A business process starts to hurt, so the search for software begins. One product covers most of the workflow but forces the team to change how it works. A custom build promises a close fit but carries more responsibility. Connecting the existing tools looks smaller, although the gaps between them may be the source of the problem. The wrong choice does not just waste money; it creates another place for information to become trapped.",
      "The useful question is not whether custom software is better than an off-the-shelf product. It is which parts of the work are standard, which parts make the business distinctive and where the real friction occurs. Most good solutions combine buying, building and connecting rather than treating them as opposing camps.",
      "Buy when the process is common and the market has already solved it well. Payroll, accounting, email marketing and commodity customer support are rarely good places to recreate mature software. A suitable product brings established controls, regular updates and a community of users. The trade-off is accepting its model of the work. Configuration is healthy; fighting the product at every step is a warning that the fit may be poor.",
      "Build when the workflow creates a real operational advantage or when the available products consistently miss a critical requirement. A focused internal tool can reflect the language, approvals, calculations and exceptions that matter to the business without carrying hundreds of unused features. Custom does not have to mean a large platform. Often the best build is a narrow layer that makes one important process reliable and leaves standard functions to standard products.",
      "Connect when the individual systems work but the handoffs do not. If staff copy customer details from a form into a CRM, re-enter approved work into an accounting package or manually assemble a management report, an integration may remove most of the pain without replacing anything. Good connections define which system owns each piece of information, how failures are detected and what happens when records disagree.",
      "Before choosing, map the workflow from trigger to outcome. Note who performs each step, what information they need, which system holds it and where waiting, copying or correction occurs. This prevents a loud feature request from overshadowing the actual constraint. It also exposes whether the problem is software at all; unclear ownership and inconsistent rules cannot be repaired by adding another application.",
      "Then assess the decision across five dimensions: fit, time, total cost, control and operating responsibility. Buying is usually faster, but subscriptions, implementation and workarounds still carry costs. Building offers control, but someone must maintain, secure and improve the result. Connecting can be efficient, but the business becomes dependent on APIs and data contracts that may change. Compare the full operating life, not only the initial quote.",
      "Pay particular attention to data ownership. Decide which system is the source of truth for customers, jobs, invoices and documents. Avoid copying entire databases simply because integration is possible. Move the minimum information needed for the next step, record when the movement succeeds or fails, and make recovery understandable. A connected system without monitoring is merely an invisible manual process.",
      "A small trial is usually more valuable than a long requirements document. Configure the product for one real workflow, automate one handoff or prototype the narrowest custom screen. Let the people doing the work use it and watch where they hesitate. The evidence will show whether to continue, combine approaches or stop before the commitment grows.",
      "The goal is not to own more software. It is to create one dependable flow of work with clear ownership and as few unnecessary handoffs as possible. Buy the standard capability, build the part that genuinely needs to fit, and connect only where the connection removes real work or improves visibility.",
    ],
  },
  {
    slug: "when-spreadsheet-workflow-outgrows-spreadsheet",
    title: "When has a spreadsheet workflow outgrown the spreadsheet?",
    category: "Business systems",
    date: "2026-08-18",
    readTime: "7 min read",
    summary:
      "Five signs that a useful spreadsheet has become a fragile business process—and what to do before commissioning a large system.",
    body: [
      "Spreadsheets are among the best business tools ever made. They are fast, flexible and familiar, and they let a capable person turn an unclear process into something useful in an afternoon. Replacing one simply because it looks untidy is usually a mistake.",
      "The problem begins when the spreadsheet stops being a tool inside the workflow and quietly becomes the workflow itself. More people depend on it, more rules are added, and more important decisions rely on cells that were never designed to carry that responsibility. The question is not whether the spreadsheet is large. It is whether the business can still operate the process reliably.",
      "The first warning sign is competing versions. Files are copied into email, renamed with dates or initials, and saved in several folders. People spend time asking which version is current or merging changes after two colleagues edited different copies. A shared online sheet can reduce this problem, but it does not automatically create clear ownership or prevent someone from changing a critical formula.",
      "The second sign is dependence on one person's memory. That person knows which rows need attention, which colours have special meaning and which exceptions must be handled outside the sheet. The process appears documented because the data is visible, but the operating knowledge lives in someone's head. Holidays, staff changes or simple human error can then stop the work.",
      "The third sign is repeated copying between systems. Information arrives by form or email, moves into the spreadsheet, is re-entered into accounting or CRM software, and is copied again for reporting. Every handoff takes time and creates another chance for a name, amount, status or date to drift. When staff are acting as the integration between otherwise useful systems, there is often a focused automation opportunity.",
      "The fourth sign is that managers cannot see status without asking around. A spreadsheet may contain every record and still make it difficult to answer basic questions: what is waiting, what is overdue, where is work blocked and who owns the next step? If producing a management view requires an expert to clean, filter and explain the file each week, the business does not yet have dependable visibility.",
      "The fifth sign is that mistakes or missed handoffs have become costly. An overwritten formula, an unapproved change or a row that was never updated can lead to a missed customer commitment, incorrect invoice or compliance problem. At that point, the process may need permissions, validation, reminders and a history of who changed what—controls that are possible to imitate in a spreadsheet but increasingly difficult to maintain.",
      "None of these signs automatically justifies a large custom system. Start by cleaning the process. Agree on one owner, one source of truth, consistent fields and a small set of documented rules. Remove duplicated steps and decide which exceptions genuinely need special treatment. Many spreadsheet problems improve dramatically once the underlying workflow becomes clear.",
      "The next step may be a modest automation rather than a replacement. A form can standardise incoming information. An integration can remove double entry. A scheduled report can give managers a reliable view. Notifications can highlight overdue work without forcing someone to scan every row. These changes preserve what works while testing whether the process is stable enough to formalise.",
      "A focused internal tool becomes worthwhile when the business needs controlled access, assigned work, dependable status, integrations, audit history or reporting that the spreadsheet cannot provide safely. Build the smallest useful version around the actual workflow. Keep familiar exports where they help, and avoid turning every edge case into a feature before the core path has been used in practice.",
      "The right progression is usually simple: clean up the spreadsheet, automate the painful handoff, then build only the part that needs stronger control. The aim is not to eliminate spreadsheets. It is to stop asking one spreadsheet—and the person who understands it—to carry more operational risk than either should.",
    ],
  },
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

const perthToday = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Australia/Perth",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

export const blogPosts = allBlogPosts.filter((post) => post.date <= perthToday);

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

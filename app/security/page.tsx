import Link from "next/link";
import {
  ArrowRight,
  Bug,
  ClipboardCheck,
  Eye,
  FileSearch,
  Fingerprint,
  Laptop,
  LockKeyhole,
  Scale,
  ServerCog,
  SprayCan,
  ShieldCheck,
  Siren,
  VenetianMask,
} from "lucide-react";

const securityChecks = [
  {
    title: "Security from the start",
    text: "We think about access, data, hosting and risks before the build begins.",
    Icon: ShieldCheck,
  },
  {
    title: "Website vulnerability checks",
    text: "We review common website risks such as weak forms, exposed data, poor headers and unsafe dependencies.",
    Icon: FileSearch,
  },
  {
    title: "Controlled access",
    text: "We keep admin access limited, use strong authentication and separate production systems from development work.",
    Icon: LockKeyhole,
  },
  {
    title: "Reliable hosting",
    text: "We use practical hosting, backups, monitoring and deployment steps that reduce avoidable outages.",
    Icon: ServerCog,
  },
  {
    title: "Ongoing review",
    text: "We keep an eye on updates, logs and known vulnerabilities after a site or system goes live.",
    Icon: Eye,
  },
  {
    title: "Clear response",
    text: "If something looks wrong, we investigate methodically, explain the issue and help fix it quickly.",
    Icon: Siren,
  },
];

const securitySteps = [
  "Understand what data the system will hold and who needs access.",
  "Design the site or application with simple, controlled permissions.",
  "Build using maintained tools, reviewed dependencies and secure defaults.",
  "Check forms, login areas, headers, hosting and deployment before launch.",
  "Monitor, patch and improve the system after it is live.",
];

const trustStandards = [
  {
    title: "PII and personal data",
    text: "We treat personally identifiable information as sensitive from the start. We look at what is collected, why it is needed, who can access it and how long it should be kept.",
    Icon: Fingerprint,
  },
  {
    title: "GDPR-aware thinking",
    text: "For projects that may involve European users or privacy obligations, we design with clear consent, data minimisation, access control and deletion needs in mind.",
    Icon: Scale,
  },
  {
    title: "NIST CSF-style structure",
    text: "We use the same practical security mindset: govern the work, identify risks, protect systems, detect issues, respond clearly and recover sensibly.",
    Icon: ShieldCheck,
  },
  {
    title: "SOC 2-ready habits",
    text: "Where a client needs stronger assurance, we can support SOC 2-style practices such as change control, access reviews, monitoring, evidence and incident records.",
    Icon: ClipboardCheck,
  },
];

export const metadata = {
  title: "Security",
  description:
    "EffectX takes a thorough, methodical approach to cyber security, website vulnerabilities and responsible handling of business data.",
};

export default function SecurityPage() {
  return (
    <main>
      <section className="page-hero security-hero">
        <div className="security-hero-layout">
          <div>
            <p className="eyebrow">Security</p>
            <h1>Built with care for your data, systems and business.</h1>
            <p>
              Security is not an afterthought. EffectX takes a careful,
              methodical approach to websites, applications, hosting and
              business data so clients can trust the systems we build and
              support.
            </p>
          </div>

          <div className="security-visual" aria-hidden="true">
            <div className="security-device">
              <div className="device-screen">
                <Laptop size={76} />
                <span className="access-line access-line-one" />
                <span className="access-line access-line-two" />
                <span className="access-line access-line-three" />
              </div>
              <div className="device-base" />
            </div>

            <div className="threat-bug">
              <Bug size={34} />
            </div>

            <div className="threat-hacker">
              <VenetianMask size={34} />
            </div>

            <div className="cyber-monster">
              <span className="monster-eye monster-eye-left" />
              <span className="monster-eye monster-eye-right" />
              <span className="monster-mouth" />
            </div>

            <div className="cyber-spray">
              <SprayCan size={42} />
              <span className="spray-cloud spray-cloud-one" />
              <span className="spray-cloud spray-cloud-two" />
              <span className="spray-cloud spray-cloud-three" />
            </div>

            <div className="security-shield">
              <ShieldCheck size={38} />
            </div>
          </div>
        </div>
      </section>

      <section className="section security-intro">
        <div>
          <p className="eyebrow">Our approach</p>
          <h2>Practical security checks at every stage.</h2>
        </div>
        <p>
          We focus on the risks that matter: who can access the system, where
          data is stored, how updates are handled, how websites are exposed to
          the internet and how quickly issues can be found and fixed.
        </p>
      </section>

      <section className="section security-grid-section">
        <div className="security-grid">
          {securityChecks.map(({ title, text, Icon }) => (
            <article className="security-card" key={title}>
              <Icon size={28} />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section security-standards">
        <div className="section-heading">
          <p className="eyebrow">Data and standards</p>
          <h2>Security language that matches how serious businesses work.</h2>
          <p>
            We do not claim compliance or certification unless it has been
            formally assessed. What we do is build with recognised security and
            privacy principles in mind, so the system is easier to review,
            operate and trust.
          </p>
        </div>
        <div className="standards-grid">
          {trustStandards.map(({ title, text, Icon }) => (
            <article className="standard-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section security-method">
        <div className="section-heading">
          <p className="eyebrow">Methodical delivery</p>
          <h2>How we reduce avoidable risk.</h2>
        </div>
        <ol className="security-timeline">
          {securitySteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section split security-trust">
        <div>
          <p className="eyebrow">Trust</p>
          <h2>Clear advice, careful handling and no shortcuts.</h2>
        </div>
        <p>
          We do not make vague promises. We explain what we are protecting, what
          the realistic risks are and what steps we recommend. That includes
          plain-English advice about personal data, business records, access
          controls, vulnerabilities and the evidence a client may need for their
          own governance or compliance obligations.
        </p>
      </section>

      <section className="cta-section compact">
        <h2>Want a practical security review of your website or application?</h2>
        <Link className="primary-button" href="/contact">
          Talk to EffectX <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

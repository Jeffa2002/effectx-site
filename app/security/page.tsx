import Link from "next/link";
import {
  ArrowRight,
  Eye,
  FileSearch,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
  Siren,
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

export const metadata = {
  title: "Security",
  description:
    "EffectX takes a thorough, methodical approach to cyber security, website vulnerabilities and responsible handling of business data.",
};

export default function SecurityPage() {
  return (
    <main>
      <section className="page-hero security-hero">
        <p className="eyebrow">Security</p>
        <h1>Built with care for your data, systems and business.</h1>
        <p>
          Security is not an afterthought. EffectX takes a careful, methodical
          approach to websites, applications, hosting and business data so
          clients can trust the systems we build and support.
        </p>
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
          the realistic risks are and what steps we recommend. That gives
          business owners a clear view of how their website, application and data
          are being looked after.
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

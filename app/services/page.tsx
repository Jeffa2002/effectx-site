import Link from "next/link";
import { icons, services } from "../data";

const { ArrowRight } = icons;

export const metadata = {
  title: "Services",
  description:
    "Bespoke applications, websites, integrations, reporting, cloud infrastructure and technology problem solving from EffectX.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Technology services for businesses that need working systems, not theatre.</h1>
        <p>
          We combine consulting, product design, software engineering and production
          operations so the result is useful beyond launch day.
        </p>
      </section>

      <section className="section">
        <div className="service-grid large">
          {services.map(({ title, summary, detail, Icon }) => (
            <article className="card service-card" key={title}>
              <Icon size={28} />
              <h2>{title}</h2>
              <p>{summary}</p>
              <span>{detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section compact">
        <h2>Need a system mapped before you commit to a build?</h2>
        <Link className="primary-button" href="/contact">
          Book a discovery call <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

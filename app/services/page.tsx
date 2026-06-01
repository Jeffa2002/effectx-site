import Link from "next/link";
import { icons, services } from "../data";

const { ArrowRight } = icons;

export const metadata = {
  title: "Services",
  description:
    "Custom software, websites, integrations, reporting and technology support from EffectX in Perth, Western Australia.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Technology services for businesses that need clear, useful systems.</h1>
        <p>
          We help you plan, build and run websites, applications and connected
          tools that support the way your business works.
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
        <h2>Need help turning an idea or problem into a clear plan?</h2>
        <Link className="primary-button" href="/contact">
          Book a discovery call <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";
import { icons, processSteps, reasons, services, work } from "./data";

const { ArrowRight, CheckCircle2 } = icons;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Technology consulting for practical business systems</p>
          <h1>EffectX builds the software, websites and workflows your business actually needs.</h1>
          <p className="hero-copy">
            We work with businesses to design, build and operate bespoke applications,
            credible websites and connected technology systems that remove friction
            from day-to-day work.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/contact">
              Start a project <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" href="/work">
              See our work
            </Link>
          </div>
        </div>
      </section>

      <section className="section split intro-band">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Technology consulting with delivery attached.</h2>
        </div>
        <p>
          EffectX helps teams move from scattered processes and underpowered tools
          to focused systems that match the business. We can help at the strategy
          stage, build the product, integrate existing tools and keep it running.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>From problem to working system.</h2>
        </div>
        <div className="service-grid">
          {services.slice(0, 4).map(({ title, summary, Icon }) => (
            <article className="card service-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{summary}</p>
            </article>
          ))}
        </div>
        <div className="section-link">
          <Link href="/services">
            Explore all services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <p className="eyebrow">Our Work</p>
          <h2>Examples of systems and products we build.</h2>
        </div>
        <div className="work-grid">
          {work.slice(0, 3).map((item) => (
            <article className="work-card" key={item.name}>
              <p>{item.type}</p>
              <h3>{item.name}</h3>
              <span>{item.summary}</span>
              <a href={item.href}>Visit project</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>Clear thinking before code, practical delivery after.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map(({ title, text, Icon }) => (
            <article key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why EffectX</p>
          <h2>Senior, pragmatic help for real business constraints.</h2>
        </div>
        <ul className="check-list">
          {reasons.map((reason) => (
            <li key={reason}>
              <CheckCircle2 size={20} />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-section">
        <p className="eyebrow">Ready when the problem is real</p>
        <h2>Bring the workflow, the idea or the messy system. We’ll help turn it into something useful.</h2>
        <Link className="primary-button" href="/contact">
          Contact EffectX <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

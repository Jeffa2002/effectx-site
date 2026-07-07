import Link from "next/link";
import { icons, processSteps, proofPoints, reasons, services, work } from "./data";

const { ArrowRight, CheckCircle2 } = icons;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-layout">
          <div className="hero-content">
            <p className="eyebrow">Perth, Western Australia</p>
            <h1>EffectX builds and operates practical business technology.</h1>
            <p className="hero-copy">
              One of Equim8 Group&apos;s major operating companies, EffectX
              builds websites, applications, automations and admin dashboards
              that help real businesses see what is working.
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

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-flow-card">
              <div className="hero-flow-heading">
                <span>Simple build process</span>
                <strong>From idea to launch</strong>
              </div>
              <div className="hero-flow-line" />
              <div className="hero-flow-steps">
                {processSteps.map(({ title, outcome, Icon }, index) => (
                  <div className="hero-flow-step" key={title}>
                    <div className="hero-flow-node">
                      <Icon size={20} />
                    </div>
                    <div>
                      <small>{String(index + 1).padStart(2, "0")}</small>
                      <p>{title}</p>
                      <span>{outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section split intro-band">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>We help you choose, build, measure and run the right technology.</h2>
        </div>
        <p>
          Based in Perth, Western Australia, EffectX works with businesses that
          need practical technology help. We can plan the work, build the system,
          connect your tools, measure usage and keep the important parts running.
        </p>
      </section>

      <section className="section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Proof</p>
          <h2>What good looks like after launch.</h2>
        </div>
        <div className="proof-grid">
          {proofPoints.map((point) => (
            <article key={point.title}>
              <span>{point.title}</span>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
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
          <h2>Examples of our work.</h2>
        </div>
        <div className="work-grid">
          {work.map((item) => (
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
          <h2>A simple process that keeps the work clear.</h2>
        </div>
        <div className="process-flow">
          {processSteps.map(({ title, text, outcome, Icon }, index) => (
            <article className="process-step" key={title}>
              <div className="process-node">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={25} />
              </div>
              <div className="process-card">
                <h3>{title}</h3>
                <p>{text}</p>
                <strong>{outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why EffectX</p>
          <h2>Practical help for real business problems.</h2>
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
        <p className="eyebrow">Start here</p>
        <h2>Tell us what you want to fix or build. We’ll help shape the next step.</h2>
        <Link className="primary-button" href="/contact">
          Contact EffectX <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

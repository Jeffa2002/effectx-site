import { processSteps, reasons } from "../data";
import { icons } from "../data";

const { CheckCircle2 } = icons;

export const metadata = {
  title: "About",
  description:
    "About EffectX, a technology consulting partner for bespoke applications, websites and business technology problem solving.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">About EffectX</p>
        <h1>We help businesses turn technology problems into practical systems.</h1>
        <p>
          EffectX works where business process, software and operations meet. We
          care about understanding the work first, then building the smallest
          durable system that creates real leverage.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Approach</p>
          <h2>Close to the problem, clear about the build.</h2>
        </div>
        <p>
          We are useful when a team knows something needs to improve but the right
          technical path is not obvious. We help define the workflow, choose the
          architecture, ship the application and keep the production setup grounded.
        </p>
      </section>

      <section className="section process-section">
        <div className="process-grid">
          {processSteps.map(({ title, text, Icon }) => (
            <article key={title}>
              <Icon size={24} />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Principles</p>
          <h2>What clients should expect.</h2>
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
    </main>
  );
}

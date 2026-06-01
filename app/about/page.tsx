import { processSteps, reasons } from "../data";
import { icons } from "../data";

const { CheckCircle2 } = icons;

export const metadata = {
  title: "About",
  description:
    "About EffectX, a Perth technology consulting business for custom software, websites and practical technology support.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">About EffectX</p>
        <h1>We help businesses use technology in a practical way.</h1>
        <p>
          EffectX is based in Perth, Western Australia. We build custom software,
          websites and connected systems for businesses that want clearer,
          simpler ways to work.
        </p>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Approach</p>
          <h2>We start by understanding the problem.</h2>
        </div>
        <p>
          We are useful when you know something needs to improve, but the right
          technology path is not obvious. We help define the work, choose the
          right approach, build the system and keep it running.
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

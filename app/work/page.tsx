import { work } from "../data";

export const metadata = {
  title: "Our Work",
  description: "Selected EffectX work including Projenta and Crossbench.",
};

export default function WorkPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Our Work</p>
        <h1>Selected projects.</h1>
        <p>
          These examples show the kind of practical software and product work
          EffectX delivers.
        </p>
      </section>

      <section className="section">
        <div className="case-grid">
          {work.map((item) => (
            <article className="case-card" key={item.name}>
              <div>
                <p className="eyebrow">{item.type}</p>
                <h2>{item.name}</h2>
                <p>{item.summary}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href={item.href}>Open project</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

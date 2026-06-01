import Link from "next/link";
import { icons } from "../data";

const { ArrowRight, LifeBuoy } = icons;

export const metadata = {
  title: "Contact",
  description:
    "Contact EffectX about bespoke applications, websites, systems integration and technology consulting.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Tell us what you are trying to fix, build or connect.</h1>
        <p>
          The best starting point is a short conversation about the business
          workflow, the users, the existing systems and the outcome you need.
        </p>
      </section>

      <section className="section contact-grid">
        <article className="contact-panel">
          <LifeBuoy size={28} />
          <h2>Start with a conversation</h2>
          <p>
            Send a short note about the problem, product or website you want to
            discuss. Include any deadlines, systems involved and what success
            would look like.
          </p>
          <a className="primary-button" href="mailto:hello@effectx.com.au">
            Email EffectX <ArrowRight size={18} />
          </a>
        </article>

        <aside className="contact-details">
          <h2>Details</h2>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:hello@effectx.com.au">hello@effectx.com.au</a>
              </dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>
                <Link href="/">effectx.com.au</Link>
              </dd>
            </div>
            <div>
              <dt>Typical work</dt>
              <dd>Bespoke apps, websites, integrations and reporting systems.</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}

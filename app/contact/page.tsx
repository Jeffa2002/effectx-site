import Link from "next/link";
import { icons } from "../data";

const { ArrowRight, LifeBuoy } = icons;

export const metadata = {
  title: "Contact",
  description:
    "Contact EffectX in Perth, Western Australia about custom software, websites and technology consulting.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Tell us what you want to fix, build or connect.</h1>
        <p>
          We are based in Perth, Western Australia. Send a short note about your
          business, the problem and what you want to achieve.
        </p>
      </section>

      <section className="section contact-grid">
        <article className="contact-panel">
          <LifeBuoy size={28} />
          <h2>Start with a short message</h2>
          <p>
            Tell us what is not working, what you need built and whether there
            are any systems or deadlines we should know about.
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
              <dt>Location</dt>
              <dd>Perth, Western Australia</dd>
            </div>
            <div>
              <dt>Typical work</dt>
              <dd>Custom software, websites, integrations and reporting.</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}

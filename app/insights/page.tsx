import Link from "next/link";
import { blogPosts, icons } from "../data";

const { ArrowRight, Newspaper } = icons;

export const metadata = {
  title: "Insights",
  description:
    "Practical EffectX notes on websites, custom software, automation, AI and security.",
};

export default function InsightsPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main>
      <section className="page-hero insights-hero">
        <p className="eyebrow">Insights</p>
        <h1>Practical notes on software, websites and automation.</h1>
        <p>
          Short articles from EffectX on building useful systems, running them
          safely and turning websites into managed business surfaces.
        </p>
      </section>

      <section className="section insights-layout">
        <article className="featured-post">
          <div>
            <Newspaper size={28} />
            <p className="eyebrow">{featured.category}</p>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
          </div>
          <Link href={`/insights/${featured.slug}`}>
            Read article <ArrowRight size={18} />
          </Link>
        </article>

        <div className="post-grid">
          {rest.map((post) => (
            <article className="post-card" key={post.slug}>
              <p className="eyebrow">{post.category}</p>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <span>
                {post.date} · {post.readTime}
              </span>
              <Link href={`/insights/${post.slug}`}>
                Read article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

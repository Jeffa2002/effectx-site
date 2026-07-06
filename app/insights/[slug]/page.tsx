import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, icons } from "../../data";

const { ArrowRight } = icons;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function InsightArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="article-shell">
        <Link className="article-back" href="/insights">
          Insights
        </Link>
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-meta">
          {post.date} · {post.readTime}
        </p>
        <p className="article-summary">{post.summary}</p>
        <div className="article-body">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link className="primary-button article-cta" href="/contact">
          Talk to EffectX <ArrowRight size={18} />
        </Link>
      </article>
    </main>
  );
}

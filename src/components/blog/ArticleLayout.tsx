import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import type { Article } from "@/data/articles";

export function ArticleLayout({
  article,
  children,
}: {
  article: Article;
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Ziad",
      url: "https://ziad.us",
    },
    publisher: {
      "@type": "Organization",
      name: "trafi.cc",
      logo: {
        "@type": "ImageObject",
        url: "https://trafi.cc/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://trafi.cc/blog/${article.slug}/`,
    },
    image: "https://trafi.cc/og.png",
    keywords: article.tags.join(", "),
  };

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <NavBar />

      <main className="max-w-2xl mx-auto px-5 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-text-muted mb-6" aria-label="Breadcrumb">
          <Link href="/blog" className="hover:text-text-primary transition-colors">
            Blog
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-text-primary">{article.title}</span>
        </nav>

        <article>
          <div className="flex items-center gap-3 text-xs text-text-muted mb-3 font-[family-name:var(--font-mono)]">
            <time dateTime={article.date}>{article.date}</time>
            <span className="opacity-50">·</span>
            <span>{article.readMinutes} min read</span>
          </div>
          <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="prose-content space-y-5 text-text-muted leading-relaxed">
            {children}
          </div>

          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
            {article.tags.map((t) => (
              <span
                key={t}
                className="text-xs text-text-muted bg-surface border border-border rounded-full px-2 py-0.5"
              >
                #{t}
              </span>
            ))}
          </div>
        </article>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-border">
          <Link
            href="/blog"
            className="flex-1 text-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text-primary hover:border-text-muted/30 transition-colors"
          >
            More posts
          </Link>
          <Link
            href="/"
            className="flex-1 text-center px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:brightness-110 transition-all"
          >
            Calculate my worth
          </Link>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-text-muted leading-relaxed">{children}</p>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mt-10 mb-4">
      {children}
    </h2>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-border rounded-lg p-4 bg-surface text-sm text-text-muted leading-relaxed my-6">
      {children}
    </div>
  );
}

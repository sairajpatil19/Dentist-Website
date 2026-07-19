  import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { blogs } from "@/data/blogs";

export function LatestBlogs() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="eyebrow">Journal</div>

            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
              Clear, honest writing on modern dentistry.
            </h2>

            <p className="mt-5 max-w-2xl text-muted-foreground leading-7">
              Practical advice, treatment insights and expert guidance written by our specialists to
              help you make informed decisions about your oral health.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-primary hover:text-primary"
            >
              View All Articles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.slice(0, 3).map((blog, index) => (
            <Reveal key={blog.slug} delay={index * 0.08}>
              <Link to="/blogs" className="group block">
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={blog.cover}
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {blog.category} • {blog.readMinutes} min read
                    </div>

                    <h3 className="mt-3 font-display text-2xl transition-colors group-hover:text-primary line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {blog.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-medium">{blog.author}</span>

                      <span className="text-sm font-semibold text-primary">Read Article →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

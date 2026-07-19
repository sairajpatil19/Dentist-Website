

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Clock3, X } from "lucide-react";

import { SiteLayout } from "../components/layout/SiteLayout";
import { PageHero } from "../components/sections/PageHero";
import { Reveal } from "../components/animations/Reveal";
import { Button } from "../components/ui/button";

import { clinic } from "../config/clinic";

import { blogs, type BlogPost } from "../data/blogs";

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedBlog(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Journal"
        title="Notes from the chair."
        description="Clinical perspective without the jargon — written by our specialists."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog, index) => (
              <Reveal key={blog.slug} delay={index * 0.05}>
                <motion.button
                  layoutId={`blog-${blog.slug}`}
                  whileHover={{
                    y: -8,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() => setSelectedBlog(blog)}
                  className="group w-full overflow-hidden rounded-3xl border border-border bg-card text-left"
                >
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={blog.cover}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {blog.category} • {blog.readMinutes} min
                    </div>

                    <h3 className="mt-3 font-display text-2xl line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {blog.excerpt}
                    </p>
                  </div>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedBlog && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
            />

            {/* Reader */}

            <motion.div
              className="fixed inset-0 z-50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="min-h-screen flex items-start justify-center py-14 px-6">
                <motion.div
                  layoutId={`blog-${selectedBlog.slug}`}
                  className="w-full max-w-5xl overflow-hidden rounded-[36px] bg-background shadow-2xl"
                  initial={{
                    y: 50,
                    opacity: 0,
                    scale: 0.98,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* PART 2 STARTS HERE */}
                  <div className="relative">
                    {/* Close */}

                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="absolute right-6 top-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:scale-110 hover:bg-primary"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Hero */}

                    <div className="relative aspect-[16/7] overflow-hidden">
                      <img
                        src={selectedBlog.cover}
                        alt={selectedBlog.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
                          <span className="rounded-full bg-primary px-3 py-1 font-medium text-primary-foreground">
                            {selectedBlog.category}
                          </span>

                          <span className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4" />
                            {selectedBlog.readMinutes} min read
                          </span>

                          <span>
                            {new Date(selectedBlog.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <h2 className="mt-5 max-w-4xl font-display text-5xl text-white">
                          {selectedBlog.title}
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
                          {selectedBlog.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Article */}

                    <div className="grid gap-12 p-10 lg:grid-cols-[2fr_320px]">
                      {/* Left */}

                      <article>
                        <div className="prose prose-neutral max-w-none dark:prose-invert">
                          {selectedBlog.content.map((paragraph, index) => (
                            <p key={index} className="mb-8 text-lg leading-9 text-muted-foreground">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </article>

                      {/* Sidebar */}

                      <aside>
                        <div className="sticky top-28 space-y-6">
                          <div className="rounded-3xl border border-border bg-card p-7">
                            <div className="eyebrow">Written By</div>

                            <h3 className="mt-3 font-display text-2xl">{selectedBlog.author}</h3>

                            <p className="mt-4 text-sm leading-7 text-muted-foreground">
                              Our specialists share practical guidance and evidence-based
                              information to help patients make informed decisions about their oral
                              health.
                            </p>
                          </div>

                          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7">
                            <h3 className="font-display text-3xl">Ready to Visit?</h3>

                            <p className="mt-4 leading-7 text-muted-foreground">
                              Have questions about this treatment or want personalized advice?
                              Schedule a consultation with our specialists today.
                            </p>

                            <Button className="mt-8 w-full">
                              <Calendar className="mr-2 h-4 w-4" />

                              {clinic.cta.primary}
                            </Button>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}

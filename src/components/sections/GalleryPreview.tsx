  import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { gallery } from "@/data/gallery";

export function GalleryPreview() {
  const items = gallery.slice(0, 5);
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <div className="eyebrow">Inside the clinic</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
              A place built for calm focus.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors"
            >
              Full gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
          {items.map((g, i) => (
            <Reveal
              key={g.id}
              delay={i * 0.04}
              className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <div className="overflow-hidden rounded-xl bg-surface aspect-square h-full">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

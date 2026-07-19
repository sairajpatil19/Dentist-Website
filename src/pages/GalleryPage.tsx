import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiteLayout } from "../components/layout/SiteLayout";
import { PageHero } from "../components/sections/PageHero";
import { cn } from "../lib/utils";
import { gallery, type GalleryCategory } from "../data/gallery";


const cats = ["All", "Clinic", "Reception", "Doctors", "Equipment", "Before & After"] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const items =
    filter === "All" ? gallery : gallery.filter((g) => g.category === (filter as GalleryCategory));

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Inside the clinic."
        description="A look at the rooms, equipment and people that shape every appointment."
      />

      <section className="py-12">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/30",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {items.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setActive(i)}
                className="mb-4 block w-full overflow-hidden rounded-xl bg-surface focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-700 hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={items[active].id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}

import { Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import type { Treatment } from "@/data/treatments";
import { cn } from "@/lib/utils";

type Props = {
  treatment: Treatment;

  // Optional so the card can be reused everywhere
  active?: boolean;
  onSelect?: (slug: string) => void;
};

export function TreatmentCard({
  treatment,
  active = false,
  onSelect,
}: Props) {
  return (
    <motion.button
      layout
      layoutId={`treatment-${treatment.slug}`}
      type="button"
      onClick={() => onSelect?.(treatment.slug)}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        layout: {
          duration: 0.45,
        },
      }}
      className={cn(
        "group w-full overflow-hidden rounded-3xl border bg-card text-left transition-all duration-300",

        active
          ? "scale-[1.02] border-primary bg-primary/5 shadow-[0_20px_80px_rgba(0,0,0,.18)] ring-2 ring-primary/20"
          : "border-border hover:shadow-2xl"
      )}
    >
      <motion.div
        layout
        className="relative aspect-[4/5] overflow-hidden"
      >
        <motion.img
          layout
          src={treatment.image}
          alt={treatment.title}
          className="h-full w-full object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.4,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-4 right-4 top-4 flex justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
            {treatment.category}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
            <Clock className="h-3 w-3" />
            {treatment.durationMinutes} min
          </span>
        </div>
      </motion.div>

      <motion.div
        layout
        className="space-y-4 p-6"
      >
        <div>
          <motion.h3
            layout
            className="font-display text-2xl transition-colors group-hover:text-primary"
          >
            {treatment.title}
          </motion.h3>

          <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
            {treatment.shortDescription}
          </p>
        </div>

        <div className="space-y-2">
          {treatment.benefits.slice(0, 3).map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle2 className="h-4 w-4 text-green-500" />

              <span>{benefit.title}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-semibold">
            {active ? "Viewing Details" : "View Details"}
          </span>

          {active ? (
            <CheckCircle2 className="h-5 w-5 text-primary" />
          ) : (
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </div>
      </motion.div>
    </motion.button>
  );
}
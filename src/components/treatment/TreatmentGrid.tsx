import { useMemo, useState } from "react";

import type { Treatment } from "@/data/treatments";

import { TreatmentCard } from "./TreatmentCard";
import { cn } from "@/lib/utils";

type Props = {
  treatments: Treatment[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
};

export function TreatmentGrid({ treatments, selectedSlug, onSelect }: Props) {
  const categories = useMemo(
    () => ["All", ...new Set(treatments.map((t) => t.category))],
    [treatments],
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTreatments = useMemo(() => {
    if (selectedCategory === "All") return treatments;

    return treatments.filter((t) => t.category === selectedCategory);
  }, [selectedCategory, treatments]);

  return (
    <section className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all",

              selectedCategory === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:border-primary hover:text-primary",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl">{selectedCategory}</h2>

        <p className="text-sm text-muted-foreground">{filteredTreatments.length} Treatments</p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filteredTreatments.map((treatment) => (
          <TreatmentCard
            key={treatment.slug}
            treatment={treatment}
            active={selectedSlug === treatment.slug}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

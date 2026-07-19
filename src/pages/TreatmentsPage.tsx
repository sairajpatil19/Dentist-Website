
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SiteLayout } from "../components/layout/SiteLayout";
import { PageHero } from "../components/sections/PageHero";

import { TreatmentGrid } from "../components/treatment/TreatmentGrid";
import { TreatmentDetails } from "../components/treatment/TreatmentDetails";

import { treatments, type Treatment } from "../data/treatments";


export default function TreatmentsPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedTreatment) return;

    const timer = setTimeout(() => {
      if (!detailsRef.current) return;

      const y = detailsRef.current.getBoundingClientRect().top + window.scrollY - 100; // Navbar offset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedTreatment]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Treatments"
        title={<>Advanced Dental Treatments</>}
        description="Browse our treatments and click any treatment to learn more."
      />

      <section className="py-20">
        <div className="container-page space-y-12">
          <TreatmentGrid
            treatments={treatments}
            selectedSlug={selectedTreatment?.slug ?? ""}
            onSelect={(slug) => {
              if (selectedTreatment?.slug === slug) {
                setSelectedTreatment(null);
                return;
              }

              const treatment = treatments.find((t) => t.slug === slug);

              if (treatment) {
                setSelectedTreatment(treatment);
              }
            }}
          />

          <AnimatePresence mode="wait">
            {selectedTreatment && (
              <div ref={detailsRef}>
                <motion.div
                  key={selectedTreatment.slug}
                  layout
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <TreatmentDetails
                    treatment={selectedTreatment}
                    onClose={() => setSelectedTreatment(null)}
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </SiteLayout>
  );
}

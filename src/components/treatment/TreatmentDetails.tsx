 import { Link } from "react-router-dom";
import { Calendar, CheckCircle2, Clock3, HeartPulse, X } from "lucide-react";
import { motion } from "framer-motion";

import type { Treatment } from "@/data/treatments";
import { clinic } from "@/config/clinic";
import { Button } from "@/components/ui/button";

type Props = {
  treatment: Treatment;
  onClose: () => void;
};

export function TreatmentDetails({ treatment, onClose }: Props) {
  return (
    <motion.div
      layout
      layoutId={`treatment-${treatment.slug}`}
      className="overflow-hidden rounded-[32px] border border-border bg-card shadow-xl"
    >
      {/* Hero */}

      <div className="relative aspect-[16/6] overflow-hidden">
        <img src={treatment.image} alt={treatment.title} className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-primary"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="absolute bottom-8 left-8">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {treatment.category}
          </span>

          <h2 className="mt-4 font-display text-5xl text-white">{treatment.title}</h2>
        </div>
      </div>

      {/* Content */}

      <div className="grid gap-10 p-10 lg:grid-cols-[2fr_320px]">
        {/* Left */}

        <div>
          <h3 className="font-display text-3xl">About this treatment</h3>

          <p className="mt-5 leading-8 text-muted-foreground">{treatment.overview}</p>

          <div className="mt-10">
            <h4 className="font-display text-2xl">Benefits</h4>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {treatment.benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-border p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />

                    <div>
                      <h5 className="font-semibold">{benefit.title}</h5>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-background p-6">
            <h3 className="font-display text-2xl">Quick Information</h3>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-primary" />
                  Duration
                </div>

                <span className="font-semibold">{treatment.durationMinutes} mins</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-4 w-4 text-primary" />
                  Recovery
                </div>

                <span className="font-semibold">{treatment.recovery}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Category</span>

                <span className="font-semibold">{treatment.category}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="font-display text-2xl">Ready to Begin?</h3>

            <p className="mt-4 text-muted-foreground">
              Schedule a consultation with our specialists and receive a personalized treatment
              plan.
            </p>

            <Button asChild className="mt-8 w-full">
              <Link to="/book-appointment">
                <Calendar className="mr-2 h-4 w-4" />
                {clinic.cta.primary}
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

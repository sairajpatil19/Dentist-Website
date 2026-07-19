  import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { TreatmentCard } from "@/components/treatment/TreatmentCard";
import { treatments } from "@/data/treatments";
import { clinic } from "@/config/clinic";

export function FeaturedTreatments() {
  const featuredTreatments = treatments.filter((t) => t.featured).slice(0, 4);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container-page">
        {/* Header */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="eyebrow">Featured Treatments</div>

            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl leading-tight">
              Advanced dentistry.
              <br />
              Designed around your smile.
            </h2>

            <p className="mt-6 max-w-2xl text-muted-foreground leading-7">
              From preventive care to full smile makeovers, our specialists combine modern
              technology, precision and personalised treatment plans.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              to="/treatments"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              px-6
              py-3
              text-sm
              font-medium
              transition-all
              hover:border-primary
              hover:text-primary
              "
            >
              View All Treatments
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredTreatments.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={index * 0.08}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}

        <Reveal delay={0.35}>
          <div
            className="
            mt-20
            rounded-[32px]
            border
            border-border
            bg-card
            p-10
            text-center
            "
          >
            <h3 className="font-display text-3xl">Not sure which treatment is right?</h3>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every smile is unique. Book a consultation and our specialists will recommend the most
              suitable treatment plan.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/book-appointment"
                className="
                rounded-full
                bg-primary
                px-8
                py-4
                font-medium
                text-primary-foreground
                transition
                hover:scale-105
                "
              >
                {clinic.cta.primary}
              </Link>

              <a
                href={`tel:${clinic.contact.phone}`}
                className="
                rounded-full
                border
                border-border
                px-8
                py-4
                font-medium
                transition
                hover:border-primary
                hover:text-primary
                "
              >
                {clinic.cta.secondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

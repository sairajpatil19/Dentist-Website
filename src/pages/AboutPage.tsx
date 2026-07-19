import { SiteLayout } from "../components/layout/SiteLayout";
import { PageHero } from "../components/sections/PageHero";
import { Reveal } from "../components/animations/Reveal";
import { CTABanner } from "../components/sections/CTABanner";
import facility from "../assets/facility.jpg";

const timeline = [
  {
    y: "2014",
    t: "Aurelia Dental opens",
    d: "A two-chair practice in Indiranagar, founded by Dr. Ananya Rao.",
  },
  {
    y: "2017",
    t: "Implant centre",
    d: "Surgical suite, CBCT and Dr. Arjun Mehta join the practice.",
  },
  {
    y: "2020",
    t: "Microscope-first",
    d: "Operating microscopes installed on every clinical room.",
  },
  {
    y: "2023",
    t: "European laboratory partnerships",
    d: "Direct work with Swiss and German ceramists.",
  },
  {
    y: "2026",
    t: "Twelve specialists",
    d: "A full multi-disciplinary team under one roof.",
  },
];

const certs = [
  "KDC Registered",
  "Straumann Certified Centre",
  "Invisalign Provider",
  "ISO 9001 Sterilisation",
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About the practice"
        title={<>A practice built on what we wished existed.</>}
        description="Twelve specialists. One coordinated plan. An honest answer on whether you actually need the treatment you came in for."
      />

      <section className="py-24">
        <div className="container-page grid gap-12 items-start md:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl border border-border">
            <img
              src={facility}
              alt="Aurelia operatory"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className="space-y-6 text-base leading-relaxed text-foreground/80"
          >
            <div className="eyebrow">Our story</div>

            <h2 className="font-display text-4xl text-ink">
              Founded in 2014. Reinvented every year since.
            </h2>

            <p>
              Aurelia began with a single conviction: dentistry deserved the
              same thoughtfulness as the best hospitality. Calm rooms, generous
              appointment times, the same dentist every visit, and a written
              plan you could trust.
            </p>

            <p>
              A decade later we operate from a purpose-built clinic with twelve
              specialists, in-house CBCT, intra-oral scanning,
              microscope-equipped operatories and laboratory partners in
              Switzerland, Germany and Japan.
            </p>

            <p>
              What hasn't changed is the appointment. You still meet your
              clinician. You still keep your clinician. And if you don't need
              treatment, we still say so.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {[
            {
              t: "Mission",
              d: "Deliver specialist dentistry that patients trust enough to recommend without hesitation.",
            },
            {
              t: "Vision",
              d: "To be the most thoughtful private dental practice in India.",
            },
            {
              t: "Promise",
              d: "We will never recommend treatment you don't need — and we'll always tell you the simplest option first.",
            },
          ].map((b, i) => (
            <Reveal
              key={b.t}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <div className="eyebrow">{b.t}</div>

              <p className="mt-4 font-display text-2xl leading-snug text-ink">
                {b.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <Reveal>
            <div className="eyebrow">Milestones</div>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              A decade, traced.
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {timeline.map((s, i) => (
              <Reveal
                key={s.y}
                delay={i * 0.05}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="font-display text-2xl text-accent">
                  {s.y}
                </div>

                <div className="mt-3 font-display text-lg text-ink">
                  {s.t}
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {s.d}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-page">
          <Reveal>
            <div className="eyebrow">Certifications</div>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Credentials, kept current.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {certs.map((c, i) => (
              <Reveal
                key={c}
                delay={i * 0.05}
                className="rounded-xl border border-border bg-background p-6 text-center font-display text-lg text-ink"
              >
                {c}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
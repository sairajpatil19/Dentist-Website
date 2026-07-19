import { Reveal } from "@/components/animations/Reveal";

const steps = [
  {
    n: "01",
    t: "Reach out",
    d: "Book online, on WhatsApp or by phone — we'll confirm within an hour.",
  },
  { n: "02", t: "Consult & diagnose", d: "Photos, scans and a real conversation. No upselling." },
  {
    n: "03",
    t: "Written plan",
    d: "An itemised treatment plan with timelines and an honest estimate.",
  },
  {
    n: "04",
    t: "Treatment",
    d: "Delivered by the specialist best suited to your case, on schedule.",
  },
  { n: "05", t: "Aftercare", d: "Follow-ups, warranties and a clinician you can text directly." },
];

export function PatientJourney() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="eyebrow">The patient journey</div>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
            Five steps. Nothing skipped. Nothing rushed.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.06}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="font-display text-3xl text-accent">{s.n}</div>
              <h3 className="mt-4 font-display text-lg text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

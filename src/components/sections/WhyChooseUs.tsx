import { Reveal } from "@/components/animations/Reveal";
import { ShieldCheck, Microscope, HeartHandshake, Sparkles, Clock, Award } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Sterilisation, not theatre",
    body: "Class B autoclaves with batch traceability. Single-use is single-use.",
  },
  {
    icon: Microscope,
    title: "Microscope-led dentistry",
    body: "Magnification on every operatory — because what you cannot see, you cannot treat.",
  },
  {
    icon: HeartHandshake,
    title: "One dentist, every visit",
    body: "You meet your clinician, then you keep your clinician. No rotation, no handoffs.",
  },
  {
    icon: Sparkles,
    title: "Considered aesthetics",
    body: "European ceramists, digital smile design and a willingness to recommend less.",
  },
  {
    icon: Clock,
    title: "Unhurried appointments",
    body: "We schedule 30 to 90 minute visits — never the 15-minute factory model.",
  },
  {
    icon: Award,
    title: "Itemised, written estimates",
    body: "You see the plan before you say yes. No surprises at billing.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="eyebrow">Why Aurelia</div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">
            Six commitments, kept on every appointment.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.04} className="bg-background p-8">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

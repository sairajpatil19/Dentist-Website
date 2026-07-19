 import { Link } from "react-router-dom";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import about from "@/assets/about.jpg";

export function AboutPreview() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={about}
              alt="Aurelia Dental reception"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="eyebrow">About the practice</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            A clinic that feels nothing like a clinic.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            We founded Aurelia in 2014 with a simple intent: build the practice we, as patients,
            wished existed. Calm interiors, generous appointment times, the same dentist every visit
            and a willingness to say "you don't need that treatment" when you don't.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            A decade later we operate from a purpose-built clinic in Indiranagar with twelve
            specialists, in-house CBCT imaging and laboratory partnerships in Switzerland, Germany
            and Japan.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link to="/about">About us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/doctors">Meet the doctors</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

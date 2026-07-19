import { Reveal } from "@/components/animations/Reveal";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/60">
            From our patients
          </div>
          <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl text-primary-foreground">
            Words we have been trusted with.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.05}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-accent" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/10 inline-flex items-center justify-center font-display text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-medium text-primary-foreground">{t.name}</div>
                  <div className="text-xs text-primary-foreground/60">{t.treatment}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

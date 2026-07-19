import { Reveal } from "@/components/animations/Reveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page py-12 grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="text-center">
            <div className="font-display text-4xl text-ink md:text-5xl">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

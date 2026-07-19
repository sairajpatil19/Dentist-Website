import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="eyebrow text-primary-foreground/60">{eyebrow}</div>
        <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl text-primary-foreground leading-[1.05]">
          {title}
        </h1>
        {description && <p className="mt-6 max-w-2xl text-primary-foreground/75">{description}</p>}
        {children}
      </div>
    </section>
  );
}

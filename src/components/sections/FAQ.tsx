import { Reveal } from "@/components/animations/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Questions, answered honestly.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Still curious? Email{" "}
            <a className="underline" href="mailto:care@aureliadental.in">
              care@aureliadental.in
            </a>{" "}
            and a clinician will reply within a working day.
          </p>
        </Reveal>
        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

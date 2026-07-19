  import { Link } from "react-router-dom";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,oklch(0.78_0.07_235/0.25),transparent_60%)]" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-primary-foreground">
                  Start with a no-charge consultation.
                </h2>
                <p className="mt-4 text-primary-foreground/75 max-w-lg">
                  Forty-five unhurried minutes with a senior clinician. Photos, scans, a written
                  treatment plan — and a clear answer on whether you need treatment at all.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/book-appointment">
                    Book consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

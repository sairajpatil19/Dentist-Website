 import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/config/clinic";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-primary">
      <img
        src={hero}
        alt="Aurelia Dental clinic interior"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/55 to-primary/85" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 text-primary-foreground"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Karnataka Dental Council registered practice
            </div>
            <h1 className="mt-6 text-balance font-display text-5xl leading-[1.02] tracking-tight text-white md:text-7xl">
              Precision dentistry,
              <br />
              designed around you.
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
              A modern private dental practice in Bengaluru, combining advanced technology,
              certified specialists and an unhurried, hospitality-led experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/book-appointment">
                  Book an appointment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`tel:${clinic.contact.phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> {clinic.contact.phoneDisplay}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 rounded-2xl border border-white/15 bg-white/95 p-6 shadow-elevated backdrop-blur"
          >
            <div className="eyebrow">Quick booking</div>
            <h3 className="mt-2 font-display text-xl text-ink">Today's availability</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li className="flex justify-between">
                <span>Consultation</span>
                <span className="text-success font-medium">3 slots</span>
              </li>
              <li className="flex justify-between">
                <span>Cosmetic review</span>
                <span className="text-success font-medium">2 slots</span>
              </li>
              <li className="flex justify-between">
                <span>Emergency</span>
                <span className="text-success font-medium">On-call</span>
              </li>
            </ul>
            <Button asChild className="mt-5 w-full">
              <Link to="/book-appointment">Reserve a slot</Link>
            </Button>
            <p className="mt-3 text-[11px] text-muted-foreground">
              No-charge consultation for first-time patients. Cancel up to 4 hours before.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

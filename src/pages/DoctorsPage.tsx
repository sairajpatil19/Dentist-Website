
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Award, GraduationCap, Stethoscope, Calendar } from "lucide-react";

import { SiteLayout } from "../components/layout/SiteLayout";
import { PageHero } from "../components/sections/PageHero";
import { Reveal } from "../components/animations/Reveal";
import { Button } from "../components/ui/button";

import { clinic } from "../config/clinic";

import { doctors, type Doctor } from "../data/doctors";

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDoctor(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Team"
        title={<>Meet Our Dental Specialists</>}
        description="Every smile deserves an expert. Get to know the specialists behind your treatment."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.slug} delay={index * 0.06}>
                <motion.button
                  layoutId={`doctor-${doctor.slug}`}
                  onClick={() => setSelectedDoctor(doctor)}
                  whileHover={{
                    y: -8,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group w-full text-left"
                >
                  <div className="overflow-hidden rounded-3xl bg-card border border-border">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <div className="eyebrow">{doctor.specialization}</div>

                      <h3 className="mt-2 font-display text-3xl">{doctor.name}</h3>

                      <p className="mt-2 text-sm text-muted-foreground">{doctor.designation}</p>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm">{doctor.experienceYears}+ Years</span>

                        <span className="text-sm font-medium text-primary">View Profile →</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedDoctor && (
          <>
            {/* Overlay */}

            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
            />

            {/* Popup */}

            <motion.div
              className="fixed inset-0 z-50 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="min-h-screen flex items-start justify-center py-14 px-6">
                <motion.div
                  layoutId={`doctor-${selectedDoctor.slug}`}
                  className="w-full max-w-6xl overflow-hidden rounded-[36px] bg-background shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  initial={{
                    y: 50,
                    opacity: 0,
                    scale: 0.98,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  {/* PART 2 STARTS HERE */}
                  <div className="relative">
                    {/* Close */}

                    <button
                      onClick={() => setSelectedDoctor(null)}
                      className="absolute right-6 top-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:scale-110 hover:bg-primary"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Hero */}

                    <div className="grid lg:grid-cols-[380px_1fr]">
                      <div className="h-full">
                        <img
                          src={selectedDoctor.image}
                          alt={selectedDoctor.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-center p-10 lg:p-14">
                        <div className="eyebrow">{selectedDoctor.specialization}</div>

                        <h2 className="mt-4 font-display text-5xl">{selectedDoctor.name}</h2>

                        <p className="mt-3 text-xl text-primary">{selectedDoctor.designation}</p>

                        <div className="mt-8 flex flex-wrap gap-4">
                          <div className="rounded-full bg-primary/10 px-5 py-2 text-sm font-medium">
                            {selectedDoctor.experienceYears}+ Years Experience
                          </div>

                          <div className="rounded-full bg-primary/10 px-5 py-2 text-sm font-medium">
                            {selectedDoctor.specialization}
                          </div>
                        </div>

                        <p className="mt-10 text-lg leading-8 text-muted-foreground italic">
                          "{selectedDoctor.philosophy}"
                        </p>
                      </div>
                    </div>

                    {/* Content */}

                    <div className="grid gap-12 border-t border-border p-10 lg:grid-cols-[2fr_340px]">
                      {/* Left */}

                      <div>
                        <h3 className="font-display text-3xl">About Doctor</h3>

                        <p className="mt-6 leading-8 text-muted-foreground">
                          {selectedDoctor.about}
                        </p>

                        <div className="mt-14">
                          <h3 className="flex items-center gap-3 font-display text-3xl">
                            <Stethoscope className="h-7 w-7 text-primary" />
                            Specialties
                          </h3>

                          <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {selectedDoctor.specialties.map((specialty) => (
                              <div
                                key={specialty}
                                className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary"
                              >
                                {specialty}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-14">
                          <h3 className="flex items-center gap-3 font-display text-3xl">
                            <GraduationCap className="h-7 w-7 text-primary" />
                            Qualifications
                          </h3>

                          <div className="mt-6 space-y-4">
                            {selectedDoctor.qualifications.map((qualification) => (
                              <div
                                key={qualification}
                                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                              >
                                <Award className="h-5 w-5 text-primary" />

                                <span>{qualification}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Sidebar */}

                      <aside>
                        <div className="sticky top-28 rounded-3xl border border-primary/20 bg-primary/5 p-8">
                          <h3 className="font-display text-3xl">Book a Consultation</h3>

                          <p className="mt-4 leading-7 text-muted-foreground">
                            Schedule an appointment with {selectedDoctor.name} and receive a
                            personalized consultation tailored to your dental needs.
                          </p>

                          <Button className="mt-8 w-full">
                            <Calendar className="mr-2 h-4 w-4" />

                            {clinic.cta.primary}
                          </Button>
                        </div>
                      </aside>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { doctors } from "@/data/doctors";
import { treatments } from "@/data/treatments";
import { clinic, GOOGLE_SCRIPT_URL } from "@/config/clinic";
import { toast } from "sonner";

const steps = ["Doctor", "Treatment", "Date", "Time", "Details", "Confirm"] as const;

const patientSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  age: z.number().min(1).max(120),
  message: z.string().max(500).optional(),
});

type PatientForm = z.infer<typeof patientSchema>;

function generateSlots(): string[] {
  const { open, close, lunch, slotMinutes } = clinic.hours;
  const toMin = (s: string) => Number(s.split(":")[0]) * 60 + Number(s.split(":")[1]);
  const fmt = (m: number) =>
    `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
  const startMin = toMin(open);
  const endMin = toMin(close);
  const lunchStart = toMin(lunch.start);
  const lunchEnd = toMin(lunch.end);
  const out: string[] = [];
  for (let m = startMin; m + slotMinutes <= endMin; m += slotMinutes) {
    if (m >= lunchStart && m < lunchEnd) continue;
    out.push(fmt(m));
  }
  return out;
}

function isDisabledDate(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date < today) return true;
if (!clinic.hours.workingDays.includes(date.getDay() as (typeof clinic.hours.workingDays)[number])) {
  return true;
} 

  const iso = date.toISOString().slice(0, 10);
const national: readonly string[] = clinic.holidays.national;
const clinicClosed: readonly string[] = clinic.holidays.clinic;
const blocked: readonly string[] = clinic.holidays.blockedDates;
  if (
  national.includes(iso) ||
  clinicClosed.includes(iso) ||
  blocked.includes(iso)
) {
  return true;
}

  return false;
}

export function AppointmentWizard() {
  const [step, setStep] = useState(0);
  const [doctor, setDoctor] = useState<string | undefined>(undefined);
  const [treatment, setTreatment] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [patient, setPatient] = useState<PatientForm | null>(null);

  const slots = useMemo(() => generateSlots(), []);

  const form = useForm<PatientForm>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      age: undefined as unknown as number,
      message: "",
    },
  });

  const canAdvance = (() => {
    switch (step) {
      case 0:
        return true; // doctor optional
      case 1:
        return Boolean(treatment);
      case 2:
        return Boolean(date);
      case 3:
        return Boolean(time);
      case 4:
        return false; // controlled via form submit
      default:
        return false;
    }
  })();
  const onSubmitDetails = async (values: PatientForm) => {
    try {
      const params = new URLSearchParams();

      params.append("type", "appointment");

      params.append("name", values.name);
      params.append("phone", values.phone);
      params.append("email", values.email);
      params.append("age", values.age.toString());
      params.append("message", values.message || "");

      params.append("doctor", doctor ?? "");

      const selectedTreatment = treatments.find((t) => t.slug === treatment);

      params.append("treatment", selectedTreatment?.title ?? "");

      params.append("date", date ? date.toLocaleDateString("en-IN") : "");

      params.append("time", time ?? "");

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Appointment booked successfully!");

        setPatient(values);
        setStep(5);

        form.reset();
      } else {
        toast.error(result.message || "Booking failed.");
      }
    } catch (err) {
      console.error(err);

      toast.error("Unable to book appointment.");
    }
  };

  return (
    <div className="container-page py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Stepper */}
        <ol className="flex flex-wrap items-center gap-2 text-xs">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex h-6 w-6 items-center justify-center rounded-full border text-[11px]",
                  i < step && "bg-success text-success-foreground border-success",
                  i === step && "bg-primary text-primary-foreground border-primary",
                  i > step && "border-border text-muted-foreground",
                )}
              >
                {i < step ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              <span
                className={cn(
                  "font-medium",
                  i === step ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {s}
              </span>
              {i < steps.length - 1 && <span className="text-muted-foreground/40">/</span>}
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <div>
                  <h2 className="font-display text-3xl text-ink">Choose a doctor</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Optional — leave blank and we'll match you with the right specialist.
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setDoctor(undefined)}
                      className={cn(
                        "rounded-xl border p-4 text-left transition-colors",
                        !doctor
                          ? "border-primary ring-1 ring-primary"
                          : "border-border hover:border-foreground/30",
                      )}
                    >
                      <div className="font-display text-lg">No preference</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Recommended for first-time visits.
                      </div>
                    </button>
                    {doctors.map((d) => (
                      <button
                        key={d.slug}
                        type="button"
                        onClick={() => setDoctor(d.slug)}
                        className={cn(
                          "rounded-xl border p-4 text-left transition-colors",
                          doctor === d.slug
                            ? "border-primary ring-1 ring-primary"
                            : "border-border hover:border-foreground/30",
                        )}
                      >
                        <div className="font-display text-lg">{d.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{d.specialization}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-3xl text-ink">What is the visit for?</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pick the closest match — we'll refine during your appointment.
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {treatments.map((t) => (
                      <button
                        key={t.slug}
                        type="button"
                        onClick={() => setTreatment(t.slug)}
                        className={cn(
                          "rounded-xl border p-4 text-left transition-colors",
                          treatment === t.slug
                            ? "border-primary ring-1 ring-primary"
                            : "border-border hover:border-foreground/30",
                        )}
                      >
                        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                          {t.category}
                        </div>
                        <div className="font-display text-lg mt-1">{t.title}</div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {t.shortDescription}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-3xl text-ink">Pick a date</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Sundays and clinic holidays are unavailable.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={isDisabledDate}
                      className="pointer-events-auto rounded-lg border border-border p-3"
                    />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-3xl text-ink">Choose a time</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{date?.toDateString()}</p>
                  <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-5">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setTime(s)}
                        className={cn(
                          "rounded-md border px-3 py-2 text-sm transition-colors",
                          time === s
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-foreground/30",
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 4 && (
                <form onSubmit={form.handleSubmit(onSubmitDetails)} className="space-y-5">
                  <h2 className="font-display text-3xl text-ink">Your details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" {...form.register("name")} className="mt-1.5" />
                      {form.formState.errors.name && (
                        <p className="mt-1 text-xs text-destructive">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" {...form.register("phone")} className="mt-1.5" />
                      {form.formState.errors.phone && (
                        <p className="mt-1 text-xs text-destructive">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                     <Input
  type="email"
  placeholder="john@example.com"
  autoComplete="email"
  {...form.register("email")}
/>
                      {form.formState.errors.email && (
                        <p className="mt-1 text-xs text-destructive">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
  id="age"
  type="number"
  className="mt-1.5"
  {...form.register("age", { valueAsNumber: true })}
/>
                      {form.formState.errors.age && (
                        <p className="mt-1 text-xs text-destructive">
                          {form.formState.errors.age.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Anything we should know? (optional)</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      {...form.register("message")}
                      className="mt-1.5"
                    />
                  </div>
                  <div className="flex justify-between pt-2">
                    <Button type="button" variant="ghost" onClick={() => setStep(3)}>
                      <ChevronLeft className="mr-1 h-4 w-4" /> Back
                    </Button>
                    <Button type="submit">
                      Review <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              )}
              {step === 5 && patient && (
                <div className="text-center">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                    <CalendarCheck className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 font-display text-3xl text-ink">
                    Appointment request received
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you, {patient.name.split(" ")[0]}. A care coordinator will confirm your
                    appointment within an hour during clinic hours.
                  </p>
                  <div className="mt-8 mx-auto max-w-md rounded-xl border border-border bg-surface p-6 text-left text-sm space-y-2">
                    <Row
                      k="Doctor"
                      v={
                        doctor
                          ? doctors.find((d) => d.slug === doctor)?.name
                          : "Best available specialist"
                      }
                    />
                    <Row k="Treatment" v={treatments.find((t) => t.slug === treatment)?.title} />
                    <Row k="Date" v={date?.toDateString()} />
                    <Row k="Time" v={time} />
                    <Row k="Phone" v={patient.phone} />
                    <Row k="Email" v={patient.email} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {step < 4 && (
          <div className="mt-6 flex justify-between">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Back
            </Button>
            <Button onClick={() => setStep((s) => s + 1)} disabled={!canAdvance}>
              Continue <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v?: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium text-foreground text-right">{v ?? "—"}</span>
    </div>
  );
}

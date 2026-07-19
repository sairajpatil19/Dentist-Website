import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, AlertCircle } from "lucide-react";

import { SiteLayout } from "../components/layout/SiteLayout";
import { PageHero } from "../components/sections/PageHero";
import { Reveal } from "../components/animations/Reveal";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import { clinic, GOOGLE_SCRIPT_URL } from "../config/clinic";


const schema = z.object({
  name: z.string().min(2, "Enter your name"),

  phone: z.string().regex(/^[0-9+\-\s()]{10,15}$/, "Enter a valid phone number"),

  email: z.string().email("Enter a valid email"),

  message: z.string().min(10, "Tell us a little more"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams();

      params.append("name", values.name);
      params.append("phone", values.phone);
      params.append("email", values.email);
      params.append("message", values.message);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      let result: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        result = await response.json();
      } catch {
        result = { success: true };
      }

      if (result.success) {
        toast.success("Thank you! Your message has been received. We'll get back to you shortly.");

        form.reset();
      } else {
        toast.error(result.message || "Submission failed.");
      }
    } catch (error) {
      console.error(error);

      toast.error("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Visit, call, or message us."
        description="We reply within an hour during clinic hours. Genuine emergencies are triaged immediately."
      />

      <section className="py-20">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <Reveal className="space-y-6">
            <InfoRow icon={<MapPin className="h-5 w-5 text-accent" />} label="Visit">
              {clinic.contact.address.line1}, {clinic.contact.address.line2},{" "}
              {clinic.contact.address.city} {clinic.contact.address.postalCode}
            </InfoRow>

            <InfoRow icon={<Phone className="h-5 w-5 text-accent" />} label="Call">
              <a
                href={`tel:${clinic.contact.phone}`}
                className="hover:text-accent transition-colors"
              >
                {clinic.contact.phoneDisplay}
              </a>
            </InfoRow>

            <InfoRow icon={<Mail className="h-5 w-5 text-accent" />} label="Email">
              <a
                href={`mailto:${clinic.contact.email}`}
                className="hover:text-accent transition-colors"
              >
                {clinic.contact.email}
              </a>
            </InfoRow>

            <InfoRow icon={<MessageCircle className="h-5 w-5 text-accent" />} label="WhatsApp">
              <a
                href={`https://wa.me/${clinic.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Chat with us
              </a>
            </InfoRow>

            <InfoRow
              icon={<AlertCircle className="h-5 w-5 text-destructive" />}
              label="Emergency line"
            >
              <a
                href={`tel:${clinic.contact.emergencyPhone}`}
                className="hover:text-accent transition-colors"
              >
                {clinic.contact.emergencyPhone}
              </a>
            </InfoRow>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="eyebrow">Hours</div>

              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>9:30 – 20:00</span>
                </li>

                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:30 – 18:00</span>
                </li>

                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5 shadow-soft"
            >
              <h2 className="font-display text-2xl">Send a message</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="cname">Name</Label>

                  <Input
                    id="cname"
                    autoComplete="name"
                    disabled={isSubmitting}
                    {...form.register("name")}
                    className="mt-1.5"
                  />

                  {form.formState.errors.name && (
                    <p className="mt-1 text-xs text-destructive">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="cphone">Phone</Label>

                  <Input
                    id="cphone"
                    type="tel"
                    autoComplete="tel"
                    disabled={isSubmitting}
                    {...form.register("phone")}
                    className="mt-1.5"
                  />

                  {form.formState.errors.phone && (
                    <p className="mt-1 text-xs text-destructive">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="cemail">Email</Label>

                <Input
                  id="cemail"
                  type="email"
                  autoComplete="email"
                  disabled={isSubmitting}
                  {...form.register("email")}
                  className="mt-1.5"
                />

                {form.formState.errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="cmsg">Message</Label>

                <Textarea
                  id="cmsg"
                  rows={5}
                  disabled={isSubmitting}
                  {...form.register("message")}
                  className="mt-1.5"
                />

                {form.formState.errors.message && (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <iframe
              title="Map to Aurelia Dental"
              src={clinic.contact.googleMapsEmbed}
              loading="lazy"
              className="block h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl transition-all duration-300 hover:bg-surface/50 hover:p-2">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="eyebrow">{label}</div>

        <div className="mt-1 break-words text-base leading-relaxed text-foreground/85">
          {children}
        </div>
      </div>
    </div>
  );
}

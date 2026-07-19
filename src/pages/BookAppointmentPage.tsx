import { SiteLayout } from "../components/layout/SiteLayout";
import { PageHero } from "../components/sections/PageHero";
import { AppointmentWizard } from "../components/appointment/AppointmentWizard";
import { Toaster } from "../components/ui/sonner";

export default function BookAppointmentPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Book an appointment"
        title="A few quiet steps to your slot."
        description="Choose your doctor, treatment and time. We'll confirm within the hour."
      />

      <AppointmentWizard />

      <Toaster richColors />
    </SiteLayout>
  );
}
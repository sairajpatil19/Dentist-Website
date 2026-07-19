import { SiteLayout } from "../components/layout/SiteLayout";
import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { FeaturedTreatments } from "../components/sections/FeaturedTreatments";
import { AboutPreview } from "../components/sections/AboutPreview";
import { DoctorsPreview } from "../components/sections/DoctorsPreview";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { PatientJourney } from "../components/sections/PatientJourney";
import { Testimonials } from "../components/sections/Testimonials";
import { GalleryPreview } from "../components/sections/GalleryPreview";
import { LatestBlogs } from "../components/sections/LatestBlogs";
import { FAQ } from "../components/sections/FAQ";
import { CTABanner } from "../components/sections/CTABanner";

export default function HomePage() {
  return (
    <SiteLayout transparentNav>
      <Hero />
      <Stats />
      <FeaturedTreatments />
      <AboutPreview />
      <DoctorsPreview />
      <WhyChooseUs />
      <PatientJourney />
      <Testimonials />
      <GalleryPreview />
      <LatestBlogs />
      <FAQ />
      <CTABanner />
    </SiteLayout>
  );
}
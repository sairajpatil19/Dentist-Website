import facility from "@/assets/facility.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";
import cosmetic from "@/assets/treatment-cosmetic.jpg";
import implants from "@/assets/treatment-implants.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

export type GalleryCategory = "Clinic" | "Reception" | "Doctors" | "Equipment" | "Before & After";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  span?: "wide" | "tall" | "square";
};

export const gallery: GalleryItem[] = [
  { id: "g1", src: hero, alt: "Operatory with natural light", category: "Clinic", span: "wide" },
  { id: "g2", src: about, alt: "Reception with white orchid", category: "Reception", span: "tall" },
  {
    id: "g3",
    src: facility,
    alt: "Patient suite with warm oak detailing",
    category: "Clinic",
    span: "square",
  },
  { id: "g4", src: doctor2, alt: "Dr. Ananya Rao", category: "Doctors", span: "tall" },
  {
    id: "g5",
    src: cosmetic,
    alt: "Smile after ceramic veneers",
    category: "Before & After",
    span: "wide",
  },
  {
    id: "g6",
    src: implants,
    alt: "Titanium implant detail",
    category: "Equipment",
    span: "square",
  },
  { id: "g7", src: doctor1, alt: "Dr. Arjun Mehta", category: "Doctors", span: "square" },
  { id: "g8", src: doctor3, alt: "Dr. Vikram Iyer", category: "Doctors", span: "tall" },
];

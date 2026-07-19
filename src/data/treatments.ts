// ==========================================================
// VANTA Clinic Engine
// Treatments Database
// ==========================================================
import dentalImplants from "@/assets/treatments-img/dental-implants-1.webp";
import teethWhitening from "@/assets/treatments-img/Teeth-Whitenig.webp";
import rootCanal from "@/assets/treatments-img/Root-Canal.webp";
import dentalVeneers from "@/assets/treatments-img/Dental-Veneers.webp";
import clearAligners from "@/assets/treatments-img/Clear-Aligners.webp";
import wisdomToothRemoval from "@/assets/treatments-img/Wisdom-Tooth-Removal.webp";
import dentalCleaning from "@/assets/treatments-img/Dental-Cleaning.webp";
import smileMakeover from "@/assets/treatments-img/smile-makeover.webp";
import gumTreatment from "@/assets/treatments-img/Gum-Treatment.webp";
import childDentistry from "@/assets/treatments-img/Child-Dentistry.webp";
import fullDentalRehabilitation from "@/assets/treatments-img/Full-Dental-Rehabilation.webp";

export type TreatmentCategory =
  | "General Dentistry"
  | "Cosmetic Dentistry"
  | "Restorative Dentistry"
  | "Dental Implants"
  | "Orthodontics"
  | "Root Canal"
  | "Oral Surgery"
  | "Pediatric Dentistry";

export interface TreatmentBenefit {
  title: string;
  description: string;
  icon: string;
}
// ==========================================================
// Helpers
// ==========================================================

export function getFeaturedTreatments() {
  return treatments.filter((t) => t.featured);
}

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(category: TreatmentCategory) {
  return treatments.filter((t) => t.category === category);
}

export interface Treatment {
  id: string;

  slug: string;

  featured: boolean;

  category: TreatmentCategory;

  title: string;

  shortDescription: string;

  overview: string;

  image: string;

  durationMinutes: number;

  recovery: string;

  benefits: TreatmentBenefit[];
}
export const treatmentCategories: TreatmentCategory[] = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Dental Implants",
  "Orthodontics",
  "Root Canal",
  "Oral Surgery",
  "Pediatric Dentistry",
];
// ==========================================================
// Treatments
// ==========================================================

export const treatments: Treatment[] = [
  {
    id: "treatment-001",

    slug: "dental-implants",

    featured: true,

    category: "Dental Implants",

    title: "Dental Implants",

    shortDescription:
      "Permanent replacement for missing teeth using titanium implants and natural-looking crowns.",

    overview:
      "Dental implants are the most advanced and long-lasting solution for replacing missing teeth. They restore appearance, chewing efficiency and confidence while preserving jawbone health.",

    image: dentalImplants,

    durationMinutes: 90,

    recovery: "3–7 days",

    benefits: [
      {
        title: "Natural Appearance",
        description: "Designed to match the shape and color of your natural teeth.",
        icon: "sparkles",
      },
      {
        title: "Long Lasting",
        description: "With proper care, implants can last for decades.",
        icon: "shield",
      },
      {
        title: "Protects Jaw Bone",
        description: "Helps prevent bone loss that normally occurs after tooth loss.",
        icon: "heart",
      },
      {
        title: "Improved Chewing",
        description: "Eat comfortably without worrying about slipping dentures.",
        icon: "smile",
      },
    ],
  },

  {
    id: "treatment-002",

    slug: "teeth-whitening",

    featured: true,

    category: "Cosmetic Dentistry",

    title: "Teeth Whitening",

    shortDescription: "Professional whitening treatment for a brighter, more confident smile.",

    overview:
      "Our in-clinic teeth whitening treatment safely removes stains and discoloration, giving you a naturally brighter smile in just one visit.",

    image: teethWhitening,

    durationMinutes: 60,

    recovery: "No Recovery",

    benefits: [
      {
        title: "Instant Results",
        description: "Noticeably brighter smile after one session.",
        icon: "sparkles",
      },
      {
        title: "Safe Procedure",
        description: "Performed under professional supervision.",
        icon: "shield",
      },
      {
        title: "Boost Confidence",
        description: "Improve your smile and self-confidence.",
        icon: "smile",
      },
    ],
  },

  {
    id: "treatment-003",

    slug: "root-canal-treatment",

    featured: true,

    category: "Root Canal",

    title: "Root Canal Treatment",

    shortDescription: "Save infected teeth while eliminating pain and restoring function.",

    overview:
      "Root canal treatment removes infected pulp, disinfects the tooth and seals it to prevent further infection while preserving your natural tooth.",

    image:rootCanal,

    durationMinutes: 75,

    recovery: "1–2 Days",

    benefits: [
      {
        title: "Pain Relief",
        description: "Removes infection causing severe pain.",
        icon: "heart",
      },
      {
        title: "Save Tooth",
        description: "Preserves the natural tooth structure.",
        icon: "shield",
      },
      {
        title: "Quick Recovery",
        description: "Resume normal activities quickly.",
        icon: "sparkles",
      },
    ],
  },

  {
    id: "treatment-004",

    slug: "dental-veneers",

    featured: true,

    category: "Cosmetic Dentistry",

    title: "Dental Veneers",

    shortDescription: "Thin porcelain shells that transform your smile instantly.",

    overview:
      "Dental veneers improve tooth color, shape and alignment while creating a natural-looking smile makeover.",

    image: dentalVeneers,

    durationMinutes: 90,

    recovery: "No Recovery",

    benefits: [
      {
        title: "Natural Appearance",
        description: "Looks just like natural enamel.",
        icon: "sparkles",
      },
      {
        title: "Stain Resistant",
        description: "Porcelain resists staining over time.",
        icon: "shield",
      },
      {
        title: "Long Lasting",
        description: "Can last 10–15 years with proper care.",
        icon: "heart",
      },
    ],
  },
  {
    id: "treatment-005",

    slug: "clear-aligners",

    featured: true,

    category: "Orthodontics",

    title: "Clear Aligners",

    shortDescription: "Virtually invisible aligners to straighten your teeth comfortably.",

    overview:
      "Clear aligners gradually move your teeth into proper alignment without the appearance of traditional braces.",

    image:clearAligners,

    durationMinutes: 45,

    recovery: "None",

    benefits: [
      {
        title: "Nearly Invisible",
        description: "Discreet treatment with transparent aligners.",
        icon: "sparkles",
      },
      {
        title: "Comfortable",
        description: "Smooth trays without brackets or wires.",
        icon: "smile",
      },
      {
        title: "Removable",
        description: "Remove while eating or brushing.",
        icon: "shield",
      },
    ],
  },

  {
    id: "treatment-006",

    slug: "wisdom-tooth-removal",

    featured: false,

    category: "Oral Surgery",

    title: "Wisdom Tooth Removal",

    shortDescription: "Safe surgical removal of impacted wisdom teeth.",

    overview:
      "Our oral surgeons remove impacted or problematic wisdom teeth using modern surgical techniques for faster healing.",

    image:wisdomToothRemoval,

    durationMinutes: 60,

    recovery: "3–5 Days",

    benefits: [
      {
        title: "Pain Relief",
        description: "Eliminates recurring pain and swelling.",
        icon: "heart",
      },
      {
        title: "Prevent Infection",
        description: "Avoid future complications.",
        icon: "shield",
      },
      {
        title: "Quick Recovery",
        description: "Modern minimally invasive surgery.",
        icon: "sparkles",
      },
    ],
  },

  {
    id: "treatment-007",

    slug: "dental-cleaning",

    featured: false,

    category: "General Dentistry",

    title: "Dental Cleaning & Scaling",

    shortDescription: "Professional cleaning to remove plaque and maintain healthy gums.",

    overview:
      "Regular dental cleaning removes plaque and tartar, helping prevent cavities and gum disease while keeping your smile fresh.",

    image: dentalCleaning,

    durationMinutes: 40,

    recovery: "None",

    benefits: [
      {
        title: "Healthy Gums",
        description: "Reduce risk of gum disease.",
        icon: "shield",
      },
      {
        title: "Fresh Breath",
        description: "Remove bacteria causing bad breath.",
        icon: "smile",
      },
      {
        title: "Prevent Cavities",
        description: "Maintain excellent oral hygiene.",
        icon: "heart",
      },
    ],
  },

  {
    id: "treatment-008",

    slug: "smile-makeover",

    featured: true,

    category: "Cosmetic Dentistry",

    title: "Smile Makeover",

    shortDescription: "Completely transform your smile using multiple cosmetic procedures.",

    overview:
      "A smile makeover combines whitening, veneers, aligners and other cosmetic treatments into a personalized plan for your ideal smile.",

    image: smileMakeover,

    durationMinutes: 120,

    recovery: "Depends on procedures",

    benefits: [
      {
        title: "Personalized",
        description: "Tailored treatment plan.",
        icon: "sparkles",
      },
      {
        title: "Natural Results",
        description: "Designed to complement facial features.",
        icon: "heart",
      },
      {
        title: "Confidence Boost",
        description: "Completely transform your smile.",
        icon: "smile",
      },
    ],
  },
  {
    id: "treatment-009",

    slug: "gum-treatment",

    featured: false,

    category: "General Dentistry",

    title: "Gum Treatment",

    shortDescription: "Treatment for bleeding gums, gum disease and periodontal infections.",

    overview:
      "Healthy gums are the foundation of a healthy smile. Our periodontal treatments help stop infection, reduce inflammation and preserve supporting bone.",

    image: gumTreatment,

    durationMinutes: 60,

    recovery: "1–2 Days",

    benefits: [
      {
        title: "Stops Bleeding",
        description: "Treats inflamed gum tissue.",
        icon: "shield",
      },
      {
        title: "Healthy Gums",
        description: "Maintains supporting bone.",
        icon: "heart",
      },
      {
        title: "Fresh Breath",
        description: "Eliminates bacteria causing odor.",
        icon: "sparkles",
      },
    ],
  },

  {
    id: "treatment-010",

    slug: "child-dentistry",

    featured: false,

    category: "Pediatric Dentistry",

    title: "Children's Dentistry",

    shortDescription: "Gentle dental care specially designed for children of all ages.",

    overview:
      "Our pediatric dental services focus on prevention, education and creating a positive dental experience for children.",

    image:childDentistry,

    durationMinutes: 40,

    recovery: "None",

    benefits: [
      {
        title: "Child Friendly",
        description: "Comfortable and stress-free visits.",
        icon: "smile",
      },
      {
        title: "Preventive Care",
        description: "Reduce future dental problems.",
        icon: "shield",
      },
      {
        title: "Healthy Habits",
        description: "Teach proper brushing and oral care.",
        icon: "sparkles",
      },
    ],
  },

  {
    id: "treatment-011",

    slug: "full-mouth-rehabilitation",

    featured: true,

    category: "Restorative Dentistry",

    title: "Full Mouth Rehabilitation",

    shortDescription: "Comprehensive treatment to restore function, comfort and aesthetics.",

    overview:
      "Full mouth rehabilitation combines restorative, cosmetic and surgical treatments into one personalized plan to rebuild your smile.",

    image: fullDentalRehabilitation,

    durationMinutes: 180,

    recovery: "Varies",

    benefits: [
      {
        title: "Complete Restoration",
        description: "Restore appearance and function.",
        icon: "heart",
      },
      {
        title: "Improved Bite",
        description: "Balanced chewing and comfort.",
        icon: "shield",
      },
      {
        title: "Long-term Results",
        description: "Designed for durability.",
        icon: "sparkles",
      },
    ],
  },
];

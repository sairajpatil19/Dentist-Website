import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

export interface Doctor {
  slug: string;

  name: string;

  designation: string;

  specialization: string;

  experienceYears: number;

  image: string;

  shortBio: string;

  introduction: string;

  philosophy: string;

  about: string;

  specialties: string[];

  qualifications: string[];
}

export const doctors: Doctor[] = [
  {
    slug: "dr-ananya-rao",

    name: "Dr. Ananya Rao",

    designation: "Founder & Lead Prosthodontist",

    specialization: "Prosthodontics & Smile Design",

    experienceYears: 18,

    image: doctor2,

    shortBio: "Expert in smile makeovers, ceramic veneers and full-mouth rehabilitation.",

    introduction:
      "Dr. Ananya Rao is a prosthodontist with more than 18 years of experience in advanced restorative and cosmetic dentistry.",

    philosophy:
      "I believe every smile deserves a personalized treatment plan. My goal is to combine precision, technology and compassionate care to help every patient smile confidently.",

    about:
      "Dr. Ananya has spent nearly two decades helping patients restore confidence through aesthetic and restorative dentistry. She specializes in digital smile design, ceramic restorations and complex full-mouth rehabilitation while maintaining a conservative approach focused on preserving natural tooth structure.",

    specialties: [
      "Smile Design",
      "Full Mouth Rehabilitation",
      "Ceramic Veneers",
      "Dental Crowns",
      "Digital Dentistry",
    ],

    qualifications: ["BDS", "MDS Prosthodontics", "Fellowship in Aesthetic Dentistry"],
  },

  {
    slug: "dr-arjun-mehta",

    name: "Dr. Arjun Mehta",

    designation: "Implantologist & Oral Surgeon",

    specialization: "Implantology & Oral Surgery",

    experienceYears: 14,

    image: doctor1,

    shortBio: "Specialist in dental implants and advanced oral surgery procedures.",

    introduction:
      "Dr. Arjun Mehta has successfully treated thousands of implant and oral surgery cases over the past fourteen years.",

    philosophy:
      "Modern technology should make surgery safer, faster and more comfortable. Every patient deserves predictable outcomes with minimal discomfort.",

    about:
      "With extensive experience in implant dentistry and oral surgery, Dr. Arjun focuses on minimally invasive procedures supported by digital planning and CBCT technology. His treatment philosophy centers around preserving healthy tissue while delivering long-term functional results.",

    specialties: [
      "Dental Implants",
      "Wisdom Tooth Removal",
      "Bone Grafting",
      "Sinus Lift Procedures",
      "Oral Surgery",
    ],

    qualifications: ["BDS", "MDS Oral & Maxillofacial Surgery", "Fellowship in Implantology"],
  },

  {
    slug: "dr-vikram-iyer",

    name: "Dr. Vikram Iyer",

    designation: "Senior Endodontist",

    specialization: "Endodontics & Microscopic Dentistry",

    experienceYears: 22,

    image: doctor3,

    shortBio: "Microscope-assisted root canal specialist focused on preserving natural teeth.",

    introduction:
      "Dr. Vikram Iyer has over twenty-two years of experience in advanced microscopic endodontics.",

    philosophy:
      "Saving natural teeth whenever possible is always my priority. Precision and patience produce the best long-term outcomes.",

    about:
      "Dr. Vikram has performed thousands of successful root canal procedures using high-magnification microscopes. He specializes in complex retreatments, calcified canals and advanced endodontic procedures while maintaining exceptional patient comfort.",

    specialties: [
      "Root Canal Treatment",
      "Microscopic Endodontics",
      "Retreatment Cases",
      "Tooth Preservation",
      "Dental Trauma",
    ],

    qualifications: [
      "BDS",
      "MDS Conservative Dentistry & Endodontics",
      "Microscopic Endodontics Fellowship",
    ],
  },
];

export const getDoctor = (slug: string) => doctors.find((doctor) => doctor.slug === slug);

// src/config/clinic.ts
// ==========================================================
// VANTA Clinic Engine Configuration
// Replace values in this file to customize the entire website.
// ==========================================================
import  logoa from "@/assets/Logo.webp";
export const clinic = {
  // ==========================================================
  // BRANDING
  // ==========================================================
  branding: {
    name: "Aurelia Dental",
    shortName: "Aurelia",
    tagline: "Precision dentistry, designed around you.",
    description:
      "A modern private dental practice combining advanced technology, certified specialists and an unhurried, hospitality-led experience.",

    logo: logoa,
    favicon: "/favicon.ico",

    theme: {
      primary: "#0B2341",
      secondary: "#FFFFFF",
      accent: "#2BB673",
      muted: "#F8F9FB",
      text: "#1E293B",
      radius: "1rem",
    },
  },

  // ==========================================================
  // CONTACT
  // ==========================================================
  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    emergencyPhone: "+91 98765 43299",

    whatsapp: "919876543210",

    email: "care@aureliadental.in",

    address: {
      clinic: "Aurelia House",
      line1: "3rd Floor",
      line2: "12 Brigade Crescent, Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560038",
      country: "India",
    },

    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.0!2d77.640!3d12.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sIndiranagar!5e0!3m2!1sen!2sin!4v1700000000000",
  },

  // ==========================================================
  // SOCIALS
  // ==========================================================
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },

  // ==========================================================
  // BUSINESS HOURS
  // ==========================================================
  hours: {
    workingDays: [1, 2, 3, 4, 5, 6],

    open: "09:30",

    close: "20:00",

    lunch: {
      start: "13:30",
      end: "14:30",
    },

    slotMinutes: 30,
  },
  // ==========================================================
  // APPOINTMENT SETTINGS
  // ==========================================================
  appointment: {
    slotDuration: 30,

    bufferBetweenAppointments: 0,

    maxBookingsPerDay: 24,

    bookingWindowDays: 14,

    allowSameDayBooking: true,

    allowWeekendBooking: false,

    timezone: "Asia/Kolkata",

    confirmationMessage:
      "Thank you for choosing Aurelia Dental. Our team will contact you shortly to confirm your appointment.",
  },

  // ==========================================================
  // HOLIDAYS
  // ==========================================================
  holidays: {
    national: ["2026-08-15", "2026-10-02", "2026-12-25"],

    clinic: ["2026-10-21"],

    doctorLeave: [],

    blockedDates: [],
  },

  // ==========================================================
  // SEO
  // ==========================================================
  seo: {
    title: "Aurelia Dental | Premium Dental Clinic",

    description:
      "Premium dental clinic providing cosmetic dentistry, implants, smile makeovers and preventive care.",

    keywords: [
      "Dental Clinic",
      "Dentist",
      "Dental Implants",
      "Cosmetic Dentistry",
      "Root Canal",
      "Smile Makeover",
    ],

    author: "VANTA",

    ogImage: "/og-image.jpg",

    twitterCard: "summary_large_image",
  },
  // ==========================================================
  // HERO
  // ==========================================================
  hero: {
    title: "Smile With Confidence",
    subtitle: "Premium dental care with experienced specialists and advanced technology.",
    image: "/images/hero.jpg",
  },

  // ==========================================================
  // CALL TO ACTION
  // ==========================================================
  cta: {
    primary: "Book Appointment",
    secondary: "Call Now",
  },

  // ==========================================================
  // THEME
  // ==========================================================
  theme: {
    primaryColor: "#0B2341",
    accentColor: "#2BB673",
  },

  // ==========================================================
  // COMPANY
  // ==========================================================
  company: {
    founded: 2012,

    experienceYears: 14,

    patientsServed: 12000,

    googleRating: 4.9,

    googleReviews: 860,
  },

  // ==========================================================
  // FOOTER
  // ==========================================================
  footer: {
    copyright: "© 2026 Aurelia Dental. All rights reserved.",

    madeBy: "VANTA",
  },

  // ==========================================================
  // AGENCY
  // ==========================================================
  agency: {
    name: "VANTA",

    website: "https://vanta-react.vercel.app",
  },
} as const;

export type ClinicConfig = typeof clinic;
export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwlGBfavcTD2HtNASX63uoRyNCAbUUZVdSIDJ7K0Lj6RlAiWeuZqsUlizG8SnQvsbTyPw/exec";

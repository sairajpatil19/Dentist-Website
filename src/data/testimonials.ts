export type Testimonial = {
  name: string;
  treatment: string;
  quote: string;
  rating: 5;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sundaram",
    treatment: "Ceramic veneers",
    rating: 5,
    quote:
      "I spent two years researching before I committed. Dr. Rao spent more time understanding my face than any clinician I'd met. The result still surprises me every morning.",
  },
  {
    name: "Rohan Bhatia",
    treatment: "All-on-4 implants",
    rating: 5,
    quote:
      "Three years after my full-arch surgery I forget the implants are even there. The planning was meticulous and the recovery genuinely uneventful.",
  },
  {
    name: "Meera Krishnan",
    treatment: "Microscopic root canal",
    rating: 5,
    quote:
      "Another clinic had told me my tooth was a write-off. Dr. Iyer retrieved a broken file, retreated the canal and saved the tooth — all in one calm afternoon.",
  },
  {
    name: "Aditya Nair",
    treatment: "Invisible aligners",
    rating: 5,
    quote:
      "Clear monthly reviews, no surprises. They finished my treatment a month ahead of plan and refined the result for free.",
  },
];

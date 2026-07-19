import cosmetic from "@/assets/treatment-cosmetic.jpg";
import implants from "@/assets/treatment-implants.jpg";
import facility from "@/assets/facility.jpg";

export interface BlogPost {
  slug: string;

  title: string;

  excerpt: string;

  cover: string;

  category: string;

  readMinutes: number;

  date: string;

  author: string;

  introduction: string;

  content: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: "what-makes-a-veneer-look-natural",

    title: "What Actually Makes a Ceramic Veneer Look Natural?",

    excerpt:
      "Beautiful veneers aren't about making teeth whiter—they're about preserving natural translucency, shape and harmony.",

    cover: cosmetic,

    category: "Cosmetic Dentistry",

    readMinutes: 6,

    date: "2026-05-18",

    author: "Dr. Ananya Rao",

    introduction:
      "Creating natural-looking veneers requires careful planning, conservative preparation and exceptional craftsmanship. Every detail influences the final smile.",

    content: [
      "Natural-looking veneers are created long before the porcelain is placed. The planning stage determines tooth proportions, smile line, facial harmony and gum symmetry.",

      "Minimal tooth preparation preserves enamel and allows light to behave naturally through ceramic, creating depth instead of an artificial white appearance.",

      "Material selection is equally important. Modern lithium disilicate ceramics provide exceptional strength while maintaining the translucency found in healthy enamel.",

      "Digital smile design allows patients to preview the expected outcome before treatment even begins, improving confidence and communication throughout the process.",

      "Ultimately, the goal is never to create 'perfect' teeth—it is to create a smile that looks naturally beautiful and complements the patient's face.",
    ],
  },

  {
    slug: "should-i-replace-a-missing-tooth-immediately",

    title: "Should I Replace a Missing Tooth Immediately?",

    excerpt:
      "Waiting to replace a missing tooth affects much more than appearance. Bone loss and shifting teeth begin sooner than most people realize.",

    cover: implants,

    category: "Dental Implants",

    readMinutes: 5,

    date: "2026-04-02",

    author: "Dr. Arjun Mehta",

    introduction:
      "A missing tooth changes how your entire mouth functions. Replacing it early often prevents more complex treatment later.",

    content: [
      "Bone naturally begins shrinking after a tooth is lost because it no longer receives stimulation from chewing forces.",

      "Neighboring teeth gradually drift toward the empty space, creating bite problems that become increasingly difficult to correct over time.",

      "Dental implants preserve jawbone while restoring chewing efficiency, speech and facial structure.",

      "Modern digital implant planning has made implant placement more predictable, minimally invasive and comfortable than ever before.",

      "Seeking treatment early generally reduces overall treatment complexity, recovery time and long-term cost.",
    ],
  },

  {
    slug: "demystifying-the-root-canal",

    title: "Demystifying the Modern Root Canal",

    excerpt:
      "Root canals have changed dramatically over the past two decades. Today's procedures focus on comfort, precision and preserving natural teeth.",

    cover: facility,

    category: "Endodontics",

    readMinutes: 4,

    date: "2026-02-14",

    author: "Dr. Vikram Iyer",

    introduction:
      "Many patients fear root canal treatment because of outdated information. Modern endodontics is very different from what most people imagine.",

    content: [
      "Contemporary root canal procedures are performed under magnification using advanced rotary instruments and precise digital imaging.",

      "Modern anesthesia techniques allow most patients to remain comfortable throughout treatment.",

      "Saving a natural tooth whenever possible remains the preferred approach because it preserves natural function and jawbone health.",

      "Microscopic endodontics enables dentists to locate hidden canals, remove infected tissue more accurately and improve long-term treatment success.",

      "With proper restoration and regular dental care, a root canal treated tooth can continue functioning successfully for many years.",
    ],
  },
];

export const getBlog = (slug: string) => blogs.find((blog) => blog.slug === slug);

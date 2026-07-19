 import { Link } from "react-router-dom";
 import { FaFacebook, FaInstagram, FaLinkedin,FaYoutube } from "react-icons/fa6";
 import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { clinic } from "@/config/clinic";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-display text-base font-semibold">
              A
            </span>
            <span className="font-display text-lg">{clinic.branding.name}</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            {clinic.branding.description}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              aria-label="Instagram"
              href={clinic.socials.instagram}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              aria-label="Facebook"
              href={clinic.socials.facebook}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              aria-label="YouTube"
              href={clinic.socials.youtube}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href={clinic.socials.linkedin}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/50">Visit</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>
                {clinic.contact.address.line1}
                <br />
                {clinic.contact.address.line2}
                <br />
                {clinic.contact.address.city} {clinic.contact.address.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={`tel:${clinic.contact.phone}`}>{clinic.contact.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={`mailto:${clinic.contact.email}`}>{clinic.contact.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/50">
            Explore
          </div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/about" className="hover:text-primary-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-primary-foreground">
                Doctors
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-primary-foreground">
                Treatments
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary-foreground">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-primary-foreground">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/50">Hours</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex justify-between">
              <span>Mon – Fri</span>
              <span>9:30 – 20:00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>9:30 – 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
            <li className="pt-2 border-t border-white/10 mt-3 flex justify-between text-primary-foreground/60">
              <span>Emergency</span>
              <span>{clinic.contact.emergencyPhone}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <div>
            © {new Date().getFullYear()} {clinic.branding.name}. All rights reserved.
          </div>
          <div>
            Crafted by{" "}
            <a
              href={clinic.agency.website}
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              {clinic.agency.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

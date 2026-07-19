import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

import { clinic } from "@/config/clinic";
import { treatments } from "@/data/treatments";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type NavItem = {
  to:
    | "/"
    | "/about"
    | "/doctors"
    | "/treatments"
    | "/gallery"
    | "/blogs"
    | "/contact";
  label: string;
  hasMenu?: boolean;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctors", label: "Doctors" },
  { to: "/treatments", label: "Treatments", hasMenu: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

interface NavbarProps {
  transparentOnTop?: boolean;
}

export function Navbar({
  transparentOnTop = false,
}: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(
    !transparentOnTop
  );

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [treatmentMenuOpen, setTreatmentMenuOpen] =
    useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, [transparentOnTop]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  const handleHomeClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          onClick={handleHomeClick}
          className="flex items-center gap-3"
          aria-label={clinic.branding.name}
        >
          {clinic.branding.logo ? (
            <img
              src={clinic.branding.logo}
              alt={clinic.branding.name}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full font-display text-lg font-semibold",
                solid
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/10 text-white backdrop-blur"
              )}
            >
              {clinic.branding.shortName.charAt(
                0
              )}
            </div>
          )}

          <div className="min-w-0">
  <h2
    className={cn(
      "truncate font-display text-sm leading-none md:text-lg",
      solid ? "text-foreground" : "text-white"
    )}
  >
    {clinic.branding.name}
  </h2>

  <p
    className={cn(
      "truncate text-[10px] md:text-xs",
      solid ? "text-muted-foreground" : "text-white/70"
    )}
  >
    {clinic.branding.tagline}
  </p>
</div>
        </Link>
                {/* Desktop Navigation */}

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() =>
                item.hasMenu && setTreatmentMenuOpen(true)
              }
              onMouseLeave={() =>
                item.hasMenu && setTreatmentMenuOpen(false)
              }
            >
              <NavLink
                to={item.to}
                onClick={
                  item.to === "/"
                    ? handleHomeClick
                    : undefined
                }
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                    solid
                      ? "text-foreground/80 hover:bg-muted hover:text-foreground"
                      : "text-white/80 hover:text-white",
                    isActive &&
                      (solid
                        ? "bg-primary/10 text-primary"
                        : "font-semibold text-white")
                  )
                }
              >
                {item.label}
              </NavLink>

              {item.hasMenu &&
                treatmentMenuOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[430px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-border bg-background p-3 shadow-xl">

                      <div className="grid grid-cols-2 gap-2">
                        {treatments
                          .slice(0, 8)
                          .map((treatment) => (
                            <Link
                              key={treatment.slug}
                              to="/treatments"
                              onClick={() =>
                                setTreatmentMenuOpen(false)
                              }
                              className="rounded-xl p-3 transition hover:bg-muted"
                            >
                              <h3 className="font-medium">
                                {treatment.title}
                              </h3>

                              <p className="text-xs text-muted-foreground">
                                {treatment.category}
                              </p>
                            </Link>
                          ))}
                      </div>

                      <Link
                        to="/treatments"
                        onClick={() =>
                          setTreatmentMenuOpen(false)
                        }
                        className="mt-3 block rounded-xl bg-muted p-3 text-center text-sm font-medium transition hover:bg-primary hover:text-primary-foreground"
                      >
                        View All Treatments →
                      </Link>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${clinic.contact.phone}`}
            className={cn(
              "flex items-center gap-2 text-sm transition",
              solid
                ? "text-foreground"
                : "text-white"
            )}
          >
            <Phone className="h-4 w-4" />

            {clinic.contact.phoneDisplay}
          </a>

          <Button asChild>
            <Link to="/book-appointment">
              {clinic.cta.primary}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() =>
            setMobileOpen((prev) => !prev)
          }
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
            solid
              ? "text-foreground"
              : "text-white"
          )}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
            {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t border-border bg-background shadow-xl lg:hidden">
          <div className="container-page flex flex-col py-6">

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={(e) => {
                  if (item.to === "/") {
                    handleHomeClick(
                      e as unknown as React.MouseEvent<HTMLAnchorElement>
                    );
                  }

                  setMobileOpen(false);
                }}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl border border-transparent px-4 py-3 text-base font-medium transition-all",
                    "hover:bg-muted",
                    isActive &&
                      "border-primary bg-primary/10 text-primary"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-6 border-t border-border pt-6">

              <div className="mb-4 space-y-2">

                <a
                  href={`tel:${clinic.contact.phone}`}
                  className="flex items-center gap-3 rounded-xl bg-muted p-3 transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="h-5 w-5" />

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Call Us
                    </p>

                    <p className="font-medium">
                      {clinic.contact.phoneDisplay}
                    </p>
                  </div>
                </a>

              </div>

              <Button
                asChild
                className="w-full"
              >
                <Link
                  to="/book-appointment"
                  onClick={() => setMobileOpen(false)}
                >
                  {clinic.cta.primary}
                </Link>
              </Button>

            </div>

          </div>
        </div>
      )}
          </header>
  );
}
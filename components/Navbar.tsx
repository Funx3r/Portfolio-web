"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = el.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-paper-white border-b-4 border-ink-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto">
        <div className="font-display text-headline-md text-ink-black uppercase tracking-tighter">
          Rangga
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-label-bold text-ink-black transition-all ${
                activeSection === link.href.slice(1)
                  ? "text-secondary underline decoration-4 underline-offset-8"
                  : "hover:text-secondary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex brutalist-button bg-primary-container px-6 py-2 font-display text-label-bold uppercase active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Let&apos;s Chat
          </a>

          {/* Hamburger button (mobile/tablet only) */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden brutalist-button bg-paper-white p-2 flex items-center justify-center active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden border-t-4 border-ink-black bg-paper-white overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-4 gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`font-display text-headline-md uppercase border-2 border-ink-black px-4 py-3 transition-all ${
                activeSection === link.href.slice(1)
                  ? "bg-primary-container"
                  : "bg-paper-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="brutalist-button bg-primary-container px-4 py-3 font-display text-headline-md uppercase text-center mt-2"
          >
            Let&apos;s Chat
          </a>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import logo from "../assets/images/logo.svg";
import Button from "./Button";

const links = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

const socials = [
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
];

function Chevron({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Navbar() {
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 md:px-24">
        {/* Logo image */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Odion" className="h-7 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-rothek text-base font-medium text-[#1F1D1D] transition-colors hover:text-[#4F46E5]"
            >
              {link.label}
            </a>
          ))}

          {/* Socials dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSocialsOpen(true)}
            onMouseLeave={() => setSocialsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSocialsOpen((v) => !v)}
              className="flex cursor-pointer items-center gap-1 font-rothek text-base font-medium text-[#1F1D1D] transition-colors hover:text-[#4F46E5]"
            >
              Socials
              <Chevron open={socialsOpen} />
            </button>

            {socialsOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
                <ul className="min-w-28 border border-gray-200 bg-white py-2 shadow-lg">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block px-5 py-2 font-rothek text-sm font-medium text-[#1F1D1D] hover:bg-gray-50 hover:text-[#4F46E5]"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Button href="#contact">Contact</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-[#1F1D1D]" />
          <span className="h-0.5 w-6 bg-[#1F1D1D]" />
          <span className="h-0.5 w-6 bg-[#1F1D1D]" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-200 px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-rothek text-base font-medium text-[#1F1D1D]"
            >
              {link.label}
            </a>
          ))}
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-rothek text-base font-medium text-[#1F1D1D]"
            >
              {s.label}
            </a>
          ))}
          <Button href="#contact">Contact</Button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
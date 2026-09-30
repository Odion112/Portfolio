import { useState } from "react";

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
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 md:px-24">
        {/* Logo */}
        <a
          href="/"
          className="font-rothek text-2xl font-extrabold italic text-neutral-900"
        >
          Odion
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-rothek text-base font-medium text-neutral-900 transition-colors hover:text-indigo-600"
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
              className="flex cursor-pointer items-center gap-1 font-rothek text-base font-medium text-neutral-900 transition-colors hover:text-indigo-600"
            >
              Socials
              <Chevron open={socialsOpen} />
            </button>

            {socialsOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
                <ul className="min-w-40 border border-gray-200 bg-white py-2 shadow-lg">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block px-5 py-2 font-rothek text-sm font-medium text-neutral-900 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact button */}
          <a
            href="#contact"
            className="bg-indigo-600 px-8 py-3.5 font-rothek text-base font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-neutral-900" />
          <span className="h-0.5 w-6 bg-neutral-900" />
          <span className="h-0.5 w-6 bg-neutral-900" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-gray-200 px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-rothek text-base font-medium text-neutral-900"
            >
              {link.label}
            </a>
          ))}
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-rothek text-base font-medium text-neutral-900"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-indigo-600 px-8 py-3.5 text-center font-rothek text-base font-medium text-white"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
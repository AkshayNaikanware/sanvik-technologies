import { useState } from "react";
import { Button } from "./Button";
import type { NavLink } from "../types";

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "College Projects", href: "/college-projects" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  links?: NavLink[];
  logo?: React.ReactNode;
  activeHref?: string;
}

/** Sticky top navigation. Collapses to a hamburger menu below the md breakpoint. */
export function Navbar({ links = defaultLinks, logo, activeHref }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-800 bg-graphite-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          {logo ?? (
            <>
              <span className="h-2.5 w-2.5 rounded-sm bg-copper" aria-hidden="true" />
              Vectra Engineering
            </>
          )}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-copper ${
                activeHref === link.href ? "text-copper" : "text-muted-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/quote" variant="primary" size="md">
            Get Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-line-800 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path
                d="M2.5 5h15M2.5 10h15M2.5 15h15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line-800 bg-graphite-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded px-2 py-3 text-sm font-medium text-muted-300 hover:bg-graphite-800 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="/quote" variant="primary" size="md" className="mt-4 w-full">
            Get Quote
          </Button>
        </nav>
      )}
    </header>
  );
}

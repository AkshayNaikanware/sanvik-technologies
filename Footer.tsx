import type { FooterColumn } from "../types";

const defaultColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Industries", href: "/industries" },
      { label: "College Projects", href: "/college-projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Embedded Systems", href: "/services#embedded" },
      { label: "Electronics Design", href: "/services#electronics" },
      { label: "Industrial Automation", href: "/services#automation" },
      { label: "IoT Solutions", href: "/services#iot" },
      { label: "Robotics", href: "/services#robotics" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

interface FooterProps {
  columns?: FooterColumn[];
  phone?: string;
  email?: string;
  address?: string;
  whatsapp?: string;
}

/** Site-wide footer: nav columns, contact block, socials, copyright. */
export function Footer({
  columns = defaultColumns,
  phone = "+91 98765 43210",
  email = "hello@vectraengineering.com",
  address = "Plot 14, Industrial Estate, Pune, Maharashtra 411001",
  whatsapp = "+91 98765 43210",
}: FooterProps) {
  return (
    <footer className="border-t border-line-800 bg-graphite-950">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <span className="h-2.5 w-2.5 rounded-sm bg-copper" aria-hidden="true" />
              Vectra Engineering
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-300">
              Embedded systems, electronics and industrial automation, engineered for real-world
              deployment.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-muted-300 hover:text-copper">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-300">
              <li>{phone}</li>
              <li>{email}</li>
              <li>{address}</li>
              <li>WhatsApp: {whatsapp}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-300">
            &copy; {new Date().getFullYear()} Vectra Engineering. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="text-sm text-muted-300 hover:text-copper">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

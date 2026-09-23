import type { ServiceItem } from "../types";

interface ServiceCardProps extends ServiceItem {
  /** Called when the card is clicked — typically opens the shared DetailModal. */
  onClick?: (service: ServiceItem) => void;
}

/** Card used in the Services grid. Clickable: opens a detail view via onClick, or navigates via href. */
export function ServiceCard({ onClick, ...service }: ServiceCardProps) {
  const { icon, title, description, href } = service;
  const Tag = onClick ? "button" : "a";

  return (
    <Tag
      {...(onClick ? { type: "button", onClick: () => onClick(service) } : { href: href ?? "#" })}
      className="group flex flex-col gap-4 rounded border border-line-200 bg-white p-7 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-copper/60 hover:shadow-[0_8px_24px_-12px_rgba(217,138,44,0.28)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded bg-graphite-950 text-copper">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-900">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-500">{description}</p>
      <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-copper-dark">
        Learn more
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-150 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M2 7h10M8 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Tag>
  );
}

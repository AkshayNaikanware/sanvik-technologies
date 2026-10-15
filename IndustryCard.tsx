import type { IndustryItem } from "../types";

interface IndustryCardProps extends IndustryItem {
  onClick?: (industry: IndustryItem) => void;
}

/** Card used in the Industries grid. Clickable: opens a detail view via onClick, or navigates via href. */
export function IndustryCard({ onClick, ...industry }: IndustryCardProps) {
  const { icon, image, name, href } = industry;
  const Tag = onClick ? "button" : "a";

  return (
    <Tag
      {...(onClick ? { type: "button", onClick: () => onClick(industry) } : { href: href ?? "#" })}
      className="group relative block w-full overflow-hidden rounded border border-line-800 text-left"
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-graphite-800 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-5xl opacity-80 transition-transform duration-300 group-hover:scale-105">
            {icon}
          </span>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-base font-semibold text-white">{name}</h3>
      </div>
    </Tag>
  );
}

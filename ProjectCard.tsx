import type { ProjectItem } from "../types";

interface ProjectCardProps extends ProjectItem {
  onClick?: (project: ProjectItem) => void;
}

/** Card used for project listings. Clickable: opens a detail view via onClick, or navigates via href. */
export function ProjectCard({ onClick, ...project }: ProjectCardProps) {
  const { icon, image, title, category, description, tags, href } = project;
  const Tag = onClick ? "button" : "a";

  return (
    <Tag
      {...(onClick ? { type: "button", onClick: () => onClick(project) } : { href: href ?? "#" })}
      className="group flex w-full flex-col overflow-hidden rounded border border-line-200 bg-white text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-copper/60"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-graphite-900 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-5xl opacity-90">{icon}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-copper-dark">{category}</span>
        <h3 className="font-display text-lg font-semibold text-ink-900">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-500">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-paper-50 px-2.5 py-1 text-xs font-medium text-muted-500">
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-2 flex items-center gap-1.5 text-sm font-medium text-copper-dark">
          View project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Tag>
  );
}

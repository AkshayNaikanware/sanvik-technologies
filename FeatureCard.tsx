import type { FeatureItem } from "../types";

/** Card used in "Why Choose Us" and similar feature-highlight grids. */
export function FeatureCard({ icon, title, description }: FeatureItem) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded border border-line-200 text-copper-dark">
        {icon}
      </div>
      <h3 className="font-display text-base font-semibold text-ink-900">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-500">{description}</p>
    </div>
  );
}

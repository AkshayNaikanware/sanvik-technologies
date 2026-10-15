import type { StatItem } from "../types";

/** Single stat block. Render a row of these inside a grid for the stats strip. */
export function StatCard({ value, label }: StatItem) {
  return (
    <div className="border-l border-line-800 pl-5 first:border-l-0 first:pl-0">
      <div className="font-display text-4xl font-semibold text-white sm:text-5xl">{value}</div>
      <div className="mt-1 text-sm text-muted-300">{label}</div>
    </div>
  );
}

export function StatsRow({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

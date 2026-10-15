interface TechBadgeProps {
  label: string;
  theme?: "light" | "dark";
}

/** Small badge used for technology names (STM32, ESP32, MQTT, etc). */
export function TechBadge({ label, theme = "light" }: TechBadgeProps) {
  const isDark = theme === "dark";
  return (
    <span
      className={`inline-flex items-center rounded border px-4 py-2 font-display text-sm font-medium transition-colors ${
        isDark
          ? "border-line-800 text-muted-300 hover:border-copper hover:text-copper"
          : "border-line-200 text-ink-900 hover:border-copper hover:text-copper-dark"
      }`}
    >
      {label}
    </span>
  );
}

export function TechBadgeRow({ items, theme = "light" }: { items: string[]; theme?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((label) => (
        <TechBadge key={label} label={label} theme={theme} />
      ))}
    </div>
  );
}

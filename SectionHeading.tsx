interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

/** Shared heading block used at the top of every page section. */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignCls} ${className}`}>
      {kicker && (
        <span
          className={`flex items-center gap-2 text-sm font-medium ${
            isDark ? "text-copper" : "text-copper-dark"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
          {kicker}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-semibold leading-tight ${
          isDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${isDark ? "text-muted-300" : "text-muted-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

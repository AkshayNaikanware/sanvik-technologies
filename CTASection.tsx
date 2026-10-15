import { Button } from "./Button";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/** Large dark call-to-action band, used at the base of most pages. */
export function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-graphite-950">
      <div
        className="absolute inset-0 bg-circuit-grid bg-grid opacity-[0.06]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-content px-6 py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-300">
            {description}
          </p>
        )}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryCta.href} variant="primary" size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

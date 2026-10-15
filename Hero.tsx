import type { ReactNode } from "react";
import { Button } from "./Button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: ReactNode;
}

/**
 * Shared hero section. Used full-width (Home) or condensed (inner pages, pass
 * `visual={undefined}` and shorter description for the compact variant).
 */
export function Hero({ eyebrow, title, description, primaryCta, secondaryCta, visual }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line-800 bg-graphite-950">
      <div
        className="absolute inset-0 bg-circuit-grid bg-grid opacity-[0.08]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-content gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          {eyebrow && (
            <span className="flex items-center gap-2 text-sm font-medium text-copper">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-300">{description}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {visual && <div className="relative">{visual}</div>}
      </div>
    </section>
  );
}

/** Default engineering-diagram visual for the hero — PCB traces, an MCU block, a gear and a target/sensor motif. */
export function CircuitHeroVisual() {
  return (
    <div className="relative aspect-square rounded border border-line-800 bg-graphite-800 overflow-hidden">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect x="30" y="30" width="340" height="340" rx="6" fill="none" stroke="#2B3247" strokeWidth="1.5" />
        <path d="M30 110 H150 V190 H280 V260" fill="none" stroke="#F2A649" strokeWidth="2" />
        <path d="M370 150 H260 V80" fill="none" stroke="#F2A649" strokeWidth="2" opacity="0.55" />
        <path d="M30 300 H110 V340" fill="none" stroke="#2B3247" strokeWidth="2" />
        <path d="M370 300 H300 V340" fill="none" stroke="#2B3247" strokeWidth="2" />
        <circle cx="150" cy="190" r="5" fill="#F2A649" />
        <circle cx="280" cy="190" r="5" fill="#F2A649" />
        <circle cx="280" cy="260" r="5" fill="#F2A649" />
        <rect x="165" y="160" width="70" height="60" rx="4" fill="#10131A" stroke="#F2A649" strokeWidth="1.5" />
        <text x="200" y="195" textAnchor="middle" fill="#F2A649" fontSize="11" fontFamily="monospace">
          MCU
        </text>
        <g stroke="#61636B" strokeWidth="1.2" fill="none" opacity="0.6">
          <circle cx="90" cy="90" r="18" />
          <path d="M90 72 L90 60 M90 108 L90 120 M72 90 L60 90 M108 90 L120 90" />
        </g>
        <g transform="translate(300,300)" opacity="0.75">
          <circle r="22" fill="none" stroke="#F2A649" strokeWidth="1.4" />
          <circle r="4" fill="#F2A649" />
          <path d="M0 -22 L0 -30 M22 0 L30 0 M0 22 L0 30 M-22 0 L-30 0" stroke="#F2A649" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

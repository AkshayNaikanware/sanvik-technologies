import { useEffect } from "react";
import { Button } from "./Button";
import type { DetailContent } from "../types";

interface DetailModalProps {
  content: DetailContent | null;
  onClose: () => void;
  ctaHref?: string;
  ctaLabel?: string;
}

/**
 * Shared detail panel opened by clicking a ServiceCard, IndustryCard or
 * ProjectCard. Pass `content={null}` to keep it closed; render it once near
 * the root of the page and drive it from a single piece of state.
 */
export function DetailModal({ content, onClose, ctaHref = "/contact", ctaLabel = "Discuss a similar project" }: DetailModalProps) {
  const isOpen = content !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-150 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-graphite-950/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative flex h-full items-end justify-center p-0 sm:items-center sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          className={`w-full max-h-[85vh] max-w-lg overflow-y-auto rounded-t-xl border border-line-800 bg-graphite-900 p-7 transition-transform duration-200 sm:rounded-xl ${
            isOpen ? "translate-y-0" : "translate-y-4"
          }`}
        >
          {content && (
            <>
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-graphite-800 text-2xl text-copper">
                  {content.icon}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded border border-line-800 text-muted-300 hover:border-copper hover:text-copper"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <span className="mt-5 block text-xs font-medium uppercase tracking-wide text-copper">
                {content.kicker}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">{content.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-300">{content.description}</p>

              {content.tags && content.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {content.tags.map((tag) => (
                    <span key={tag} className="rounded bg-graphite-800 px-2.5 py-1 text-xs font-medium text-muted-300">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {content.bullets && content.bullets.length > 0 && (
                <ul className="mt-5 flex flex-col gap-2">
                  {content.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <Button href={ctaHref} variant="primary" size="md" className="mt-7">
                {ctaLabel}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

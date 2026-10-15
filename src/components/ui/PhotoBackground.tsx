import type { ReactNode } from 'react';
import { cn } from './cn';

interface Props {
  image: string;
  /** Image opacity, 0–1. */
  opacity?: number;
  className?: string;
  children: ReactNode;
}

/** Wrapper that puts a decorative photo behind its children. */
export default function PhotoBackground({ image, opacity = 0.4, className, children }: Props) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img src={image} alt="" aria-hidden="true" style={{ opacity }} className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

import type { ReactNode } from 'react';
import { cn } from './cn';

/** White bordered card with a hover lift. */
export default function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-[14px] border border-line bg-white p-6 transition duration-150 hover:-translate-y-[3px] hover:border-brand/40 hover:shadow-card',
        className
      )}
    >
      {children}
    </div>
  );
}

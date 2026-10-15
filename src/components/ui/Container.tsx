import type { ReactNode } from 'react';
import { cn } from './cn';

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-content px-6', className)}>{children}</div>;
}

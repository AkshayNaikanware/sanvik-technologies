import type { ReactNode } from 'react';
import { cn } from './cn';
import Container from './Container';

interface Props {
  id?: string;
  tone?: 'white' | 'paper';
  className?: string;
  children: ReactNode;
}

/** Page section with consistent vertical rhythm and a centered container. */
export default function Section({ id, tone = 'white', className, children }: Props) {
  return (
    <section id={id} className={cn('py-[72px]', tone === 'paper' ? 'bg-paper' : 'bg-white', className)}>
      <Container>{children}</Container>
    </section>
  );
}

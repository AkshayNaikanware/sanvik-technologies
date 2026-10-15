import { cn } from './cn';

/** Small dotted label above a heading. */
export default function Kicker({ children, light, center }: { children: string; light?: boolean; center?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-[13px] font-semibold',
        light ? 'text-cyan' : 'text-brand',
        center && 'justify-center'
      )}
    >
      <span className={cn('h-[7px] w-[7px] rounded-full', light ? 'bg-cyan' : 'bg-brand')} />
      {children}
    </span>
  );
}

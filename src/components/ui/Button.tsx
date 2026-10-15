import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from './cn';

type Variant = 'primary' | 'cyan' | 'outline' | 'outlineNavy';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-colors';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  cyan: 'bg-cyan text-navy hover:bg-cyan-dark',
  outline: 'border-2 border-cyan bg-transparent text-white hover:bg-cyan/10',
  outlineNavy: 'border-2 border-brand bg-transparent text-brand hover:bg-brand/10',
};

type Common = { variant?: Variant; className?: string; children: ReactNode };
type AsLink = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>;
type AsButton = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

/** Pill button. Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button(props: AsLink | AsButton) {
  const { variant = 'primary', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);
  if ('href' in rest && rest.href !== undefined) {
    return <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>;
  }
  return <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}

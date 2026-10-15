import { cn } from './cn';

interface Props {
  value: string;
  label: string;
  /** "glass" for dark backgrounds, "plain" for light ones. */
  tone?: 'glass' | 'plain';
}

export default function StatTile({ value, label, tone = 'glass' }: Props) {
  const glass = tone === 'glass';
  return (
    <div
      className={cn(
        'rounded-xl border p-3.5',
        glass ? 'border-white/10 bg-white/5 text-center' : 'border-line bg-white p-5'
      )}
    >
      <b className={cn('block font-extrabold', glass ? 'text-[22px] text-white' : 'text-[26px] text-brand')}>{value}</b>
      <span className={cn('text-xs', glass ? 'text-[#AEB7D9]' : 'text-[13px] text-muted')}>{label}</span>
    </div>
  );
}

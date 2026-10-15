import type { ServiceItem } from '../../types';
import Card from '../ui/Card';
import { cn } from '../ui/cn';

interface Props {
  items: ServiceItem[];
  columns: 3 | 4;
}

/** Grid of icon + title + description cards (services, why-us). */
export default function IconCardGrid({ items, columns }: Props) {
  return (
    <div
      className={cn(
        'mt-10 grid gap-[22px]',
        columns === 3 ? 'grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3' : 'grid-cols-2 min-[860px]:grid-cols-4'
      )}
    >
      {items.map((s) => (
        <Card key={s.title} className="p-[26px]">
          <img src={s.icon} alt="" className="h-[46px] w-[46px] rounded-[10px] object-cover" />
          <h3 className="mb-1.5 mt-4 text-[16.5px] font-bold text-navy">{s.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{s.description}</p>
        </Card>
      ))}
    </div>
  );
}

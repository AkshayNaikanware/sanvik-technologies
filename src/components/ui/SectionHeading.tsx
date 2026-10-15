import { cn } from './cn';
import Kicker from './Kicker';

interface Props {
  kicker: string;
  title: string;
  description?: string;
  /** Put the description to the right of the title on wide screens. */
  split?: boolean;
}

export default function SectionHeading({ kicker, title, description, split }: Props) {
  return (
    <div className={cn('flex flex-col gap-2.5', split && 'md:flex-row md:items-end md:justify-between md:gap-10')}>
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-2.5 text-[28px] font-extrabold leading-tight text-navy md:text-4xl">{title}</h2>
      </div>
      {description && <p className="max-w-[620px] text-[15.5px] leading-[1.7] text-muted">{description}</p>}
    </div>
  );
}

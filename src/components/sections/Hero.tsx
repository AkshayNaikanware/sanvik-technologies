import type { ReactNode } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import PhotoBackground from '../ui/PhotoBackground';
import StatTile from '../ui/StatTile';
import Kicker from '../ui/Kicker';

interface Cta {
  label: string;
  href: string;
}

interface Props {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  primary: Cta;
  secondary: Cta;
  badges: string[];
  stats: { value: string; label: string }[];
  photo: string;
  photoAlt: string;
  background: string;
}

/** Dark hero with copy on the left and a photo + stats card on the right. */
export default function Hero({ id, eyebrow, title, lead, primary, secondary, badges, stats, photo, photoAlt, background }: Props) {
  return (
    <section id={id} className="border-b border-white/10 bg-hero-glow">
      <PhotoBackground image={background} opacity={0.4} className="py-[76px] pb-[84px]">
        <Container className="grid items-center gap-10 min-[960px]:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Kicker light>{eyebrow}</Kicker>
            <h1 className="mt-3.5 text-[34px] font-extrabold leading-[1.1] text-white sm:text-[44px] min-[960px]:text-[52px]">
              {title}
            </h1>
            <p className="mt-[18px] max-w-[540px] text-[17px] leading-[1.7] text-[#C7CEE8]">{lead}</p>
            <div className="mt-[30px] flex flex-wrap gap-3.5">
              <Button href={primary.href} variant="cyan">{primary.label}</Button>
              <Button href={secondary.href} variant="outline">{secondary.label}</Button>
            </div>
            <div className="mt-[34px] flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span key={b} className="rounded-full border border-white/20 bg-white/5 px-3.5 py-[7px] text-[12.5px] font-semibold text-[#DCE2F5]">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] border border-white/15 bg-gradient-to-br from-brand/35 to-cyan/10 p-7">
            <img src={photo} alt={photoAlt} className="mb-4 w-full rounded-xl" />
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((s) => (
                <StatTile key={s.label} {...s} />
              ))}
            </div>
          </div>
        </Container>
      </PhotoBackground>
    </section>
  );
}

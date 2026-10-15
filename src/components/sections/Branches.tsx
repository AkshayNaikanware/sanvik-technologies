import { branches } from '../../data/content';
import circuit from '../../assets/circuit.jpg';
import Section from '../ui/Section';
import Kicker from '../ui/Kicker';
import PhotoBackground from '../ui/PhotoBackground';

export default function Branches() {
  return (
    <Section id="branches">
      <PhotoBackground image={circuit} opacity={0.22} className="rounded-[20px] bg-navy px-7 py-11">
        <Kicker light>Our Branches</Kicker>
        <h2 className="mt-2.5 text-[28px] font-extrabold leading-tight text-white md:text-4xl">
          Building the Future, Today — Across 4 Cities
        </h2>
        <div className="mt-[30px] grid grid-cols-2 gap-[18px] min-[860px]:grid-cols-4">
          {branches.map((b) => (
            <div key={b.city} className="rounded-xl border border-white/15 bg-white/5 p-[18px] text-center">
              <b className="block text-[15px] font-bold text-white">{b.city}</b>
              <span className="mt-1 block text-xs text-cyan">{b.tagline}</span>
            </div>
          ))}
        </div>
      </PhotoBackground>
    </Section>
  );
}

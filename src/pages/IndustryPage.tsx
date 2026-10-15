import Hero from '../components/sections/Hero';
import DeviceSection from '../components/sections/DeviceSection';
import IconCardGrid from '../components/sections/IconCardGrid';
import Branches from '../components/sections/Branches';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Kicker from '../components/ui/Kicker';
import Button from '../components/ui/Button';
import StatTile from '../components/ui/StatTile';
import type { PageId } from '../types';
import { services, whyUs } from '../data/content';
import chipAi from '../assets/chip-ai.jpg';
import about from '../assets/about.jpg';
import servicesImg from '../assets/services.jpg';

export default function IndustryPage({ go }: { go: (p: PageId, anchor?: string) => void }) {
  return (
    <main>
      <Hero
        id="top"
        eyebrow="Embedded Solutions · Electronics Design · Industrial Automation"
        title={<>Embedded Solutions <span className="text-cyan">for Industry.</span></>}
        lead="From idea to real-world product — Sanvik Technologies designs and builds custom electronics, IoT devices and industrial automation systems for industry, research and education."
        primary={{ label: 'View Our Devices', href: '#industry' }}
        secondary={{ label: 'Talk to Us', href: '#contact-section' }}
        badges={['Custom Hardware & Firmware', 'PCB Design & Manufacturing', 'IoT & Industrial Automation']}
        stats={[
          { value: '4', label: 'Branches' },
          { value: '12', label: 'Devices Showcased' },
          { value: '6', label: 'Core Services' },
          { value: 'On-Time', label: 'Delivery' },
        ]}
        photo={chipAi}
        photoAlt="Glowing AI microcontroller chip on a circuit board"
        background={chipAi}
      />

      <Section id="about">
        <div className="grid gap-11 min-[900px]:grid-cols-2 min-[900px]:items-center">
          <div>
            <Kicker>Who We Are</Kicker>
            <h2 className="mt-2.5 text-[28px] font-extrabold leading-tight text-navy md:text-4xl">
              A Trusted Name in Electronics Design &amp; Manufacturing
            </h2>
            <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-muted">
              Sanvik Technologies is a trusted name in electronics design, manufacturing and technology solutions. We are
              committed to quality, reliability and customer satisfaction on every project.
            </p>
            <p className="mt-1 max-w-[620px] text-[15.5px] leading-[1.7] text-muted">
              Custom electronics and embedded solutions for industry, research and education — from first prototype to
              production support.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-3.5">
              <Button href="#industry">See Our Devices</Button>
              <Button variant="outlineNavy" onClick={() => go('students')}>For Students →</Button>
            </div>
          </div>
          <div>
            <img src={about} alt="Close-up of a circuit board with a microcontroller" className="w-full rounded-2xl border border-line" />
            <div className="mt-[18px] grid grid-cols-2 gap-[18px]">
              <StatTile tone="plain" value="Embedded" label="C, RTOS, STM32, Arduino, PIC & more" />
              <StatTile tone="plain" value="PCB Design" label="Altium, KiCad, Proteus, OrCAD Allegro" />
            </div>
          </div>
        </div>
      </Section>

      <DeviceSection />

      <Section id="services">
        <SectionHeading
          kicker="Our Services"
          title="Electronics, Manufacturing & Industrial Solutions"
          description="Custom electronics and embedded solutions for industry, research and education."
        />
        <IconCardGrid items={services} columns={3} />
        <img src={servicesImg} alt="Circuit board close-up" className="mt-[30px] w-full rounded-2xl border border-line" />
      </Section>

      <Section tone="paper">
        <SectionHeading kicker="Why Sanvik Technologies" title="What Sets Us Apart" />
        <IconCardGrid items={whyUs} columns={4} />
      </Section>

      <Branches />
    </main>
  );
}

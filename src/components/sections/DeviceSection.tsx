import { useState } from 'react';
import { devices } from '../../data/devices';
import type { Device } from '../../types';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Modal from '../ui/Modal';
import Badge from '../ui/Badge';
import DeviceCard from './DeviceCard';

export default function DeviceSection() {
  const [selected, setSelected] = useState<Device | null>(null);

  return (
    <Section id="industry">
      <SectionHeading
        split
        kicker="Our Core Focus"
        title="Embedded Solutions for Industry"
        description="From concept to production — real devices we've designed, built and deployed. Tap any device for a quick overview."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 min-[960px]:grid-cols-4">
        {devices.map((d) => (
          <DeviceCard key={d.name} device={d} onSelect={setSelected} />
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} label={selected?.name ?? 'Device details'}>
        {selected && (
          <>
            <img src={selected.image} alt={selected.name} className="aspect-[4/3] w-full bg-paper object-cover" />
            <div className="px-6 pb-[26px] pt-[22px]">
              <Badge>{selected.tag}</Badge>
              <h3 className="mb-2.5 mt-2.5 text-[19px] font-bold text-navy">{selected.name}</h3>
              <p className="text-[14.5px] leading-[1.7] text-muted">{selected.desc}</p>
            </div>
          </>
        )}
      </Modal>
    </Section>
  );
}

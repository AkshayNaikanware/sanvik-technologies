import type { Device } from '../../types';

/** Clickable product tile showing a device image, name and tag. */
export default function DeviceCard({ device, onSelect }: { device: Device; onSelect: (d: Device) => void }) {
  return (
    <button
      onClick={() => onSelect(device)}
      className="overflow-hidden rounded-[14px] border border-line bg-white p-0 text-left transition duration-150 hover:-translate-y-[3px] hover:border-brand/40 hover:shadow-card"
    >
      <img src={device.image} alt={device.name} className="aspect-square w-full bg-paper object-cover" />
      <div className="px-3.5 pb-4 pt-3.5">
        <h4 className="text-[13.5px] font-bold leading-snug text-navy">{device.name}</h4>
        <span className="mt-1 block text-[11.5px] text-muted">{device.tag}</span>
        <span className="mt-2 inline-flex text-[11px] font-semibold text-brand">View details →</span>
      </div>
    </button>
  );
}

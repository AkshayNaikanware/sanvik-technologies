import { useState } from 'react';
import type { PageId } from '../types';
import { cn } from './ui/cn';
import Button from './ui/Button';
import logo from '../assets/logo.png';

interface Props {
  page: PageId;
  go: (p: PageId, anchor?: string) => void;
}

const tabs: { id: PageId; label: string }[] = [
  { id: 'industry', label: 'Embedded Solutions' },
  { id: 'students', label: 'For Students' },
];

/** Reusable pill tab used in both the desktop bar and the mobile menu. */
function Tab({ active, onClick, children, block }: { active: boolean; onClick: () => void; children: string; block?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border-[1.5px] px-[18px] py-2 text-[13.5px] font-bold transition',
        active ? 'border-navy bg-navy text-white' : 'border-line text-ink hover:border-brand hover:text-brand',
        block && 'w-full rounded-[10px] px-4 py-3 text-left'
      )}
    >
      {children}
    </button>
  );
}

export default function Navbar({ page, go }: Props) {
  const [open, setOpen] = useState(false);
  const choose = (id: PageId) => {
    setOpen(false);
    go(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <a
          href="#/industry"
          onClick={(e) => {
            e.preventDefault();
            choose('industry');
          }}
          className="flex items-center gap-2.5 text-lg font-bold text-navy"
        >
          <img src={logo} alt="Sanvik Technologies logo" className="h-[38px] w-[38px] rounded-full" />
          Sanvik Technologies
        </a>

        <nav className="hidden items-center gap-2.5 min-[960px]:flex">
          {tabs.map((t) => (
            <Tab key={t.id} active={page === t.id} onClick={() => choose(t.id)}>
              {t.label}
            </Tab>
          ))}
          <a href="#contact-section" className="ml-4 text-sm font-semibold hover:text-brand">
            Contact
          </a>
        </nav>

        <Button href="#contact-section" className="hidden min-[960px]:inline-flex">
          Get in Touch
        </Button>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-[42px] w-[42px] items-center justify-center rounded-lg border border-line min-[960px]:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 5h15M2.5 10h15M2.5 15h15" stroke="#101A33" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="space-y-2 border-t border-line bg-white px-6 py-4 min-[960px]:hidden">
          {tabs.map((t) => (
            <Tab key={t.id} block active={page === t.id} onClick={() => choose(t.id)}>
              {t.label}
            </Tab>
          ))}
          <a href="#contact-section" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-semibold">
            Contact
          </a>
          <Button href="#contact-section" className="w-full" onClick={() => setOpen(false)}>
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}

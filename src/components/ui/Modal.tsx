import { useEffect, type ReactNode } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}

/** Accessible overlay dialog: closes on Esc, overlay click, or the × button. */
export default function Modal({ open, onClose, label, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-5 backdrop-blur-[2px]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative max-h-[90vh] w-full max-w-[420px] overflow-y-auto rounded-[18px] bg-white"
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-navy/60 text-lg leading-none text-white"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import type { PageId } from './types';

const parse = (): PageId => (/^#\/students/.test(window.location.hash) ? 'students' : 'industry');

/** Tiny hash router: #/industry and #/students. */
export function usePage(): [PageId, (p: PageId, anchor?: string) => void] {
  const [page, setPage] = useState<PageId>(parse);

  useEffect(() => {
    const onHash = () => setPage(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const go = (p: PageId, anchor?: string) => {
    setPage(p);
    window.history.replaceState(null, '', `#/${p}`);
    // wait for the page to render, then scroll
    requestAnimationFrame(() => {
      const el = anchor ? document.getElementById(anchor) : null;
      if (el) el.scrollIntoView();
      else window.scrollTo(0, 0);
    });
  };

  return [page, go];
}

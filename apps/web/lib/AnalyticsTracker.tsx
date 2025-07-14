'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, trackPageview } from './analytics';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    if (pathname) {
      trackPageview(pathname);
    }
  }, [pathname, searchParams]);

  return null;
}

'use client';

import React from 'react';
import Link from 'next/link';
import { trackLinkClick } from '../lib/analytics';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  trackingName?: string;
  linkType?: 'internal' | 'external';
  page?: string;
}

export default function TrackedLink({ 
  href, 
  children, 
  className, 
  trackingName = 'link',
  linkType = 'internal',
  page = 'unknown'
}: TrackedLinkProps) {
  const handleClick = () => {
    trackLinkClick(trackingName, page, href, linkType);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
} 
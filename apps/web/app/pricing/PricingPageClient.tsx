'use client';

import Link from 'next/link';
import {
  useTimeTracking,
  useScrollTracking,
  trackButtonClick,
  trackPricingView,
  trackConversion,
} from '../../lib/analytics';
import { useEffect } from 'react';

export default function PricingPageClient() {
  // Отслеживание времени на странице и скролла
  useTimeTracking('pricing');
  useScrollTracking('pricing');

  // Отслеживание просмотра тарифов
  useEffect(() => {
    trackPricingView('all_plans', 'view');
  }, []);

  const handlePlanClick = (planName: string, planPrice: number) => {
    trackButtonClick(
      `pricing_${planName.toLowerCase()}`,
      'pricing',
      'cta',
      'pricing_cards'
    );
    trackPricingView(planName, 'click');
    trackConversion('pricing_click', planPrice);
  };

  return (
    <div className="min-h-screen">
      {/* ...rest of the PricingPage JSX... */}
    </div>
  );
}

export interface Slot {
  id: string;
  userId: string;
  name: string;
  platform: 'vk' | 'yandex';
  status: 'draft' | 'running' | 'completed' | 'paused';
  createdAt: Date;
  updatedAt: Date;
  demo?: boolean;
  
  // A/B test configuration
  variants: SlotVariant[];
  targetMetric: 'ctr' | 'conversion' | 'roas';
  testDuration: number; // in days
  confidenceLevel: number; // 0.95, 0.99, etc.
  
  // Results
  results?: SlotResults;
}

export interface SlotVariant {
  id: string;
  name: string;
  type: 'control' | 'test';
  content: {
    title: string;
    description: string;
    imageUrl?: string;
  };
  metrics: {
    impressions: number;
    clicks: number;
    ctr: number;
    conversions?: number;
    conversionRate?: number;
    cost?: number;
    roas?: number;
  };
}

export interface SlotResults {
  winner?: string; // variant ID
  confidence: number;
  pValue: number;
  lift: number; // percentage improvement
  isSignificant: boolean;
  testEndDate: Date;
} 
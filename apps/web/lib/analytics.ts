'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Инициализация GA4
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Добавляем GA4 скрипт
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: GtagArgs) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    window.gtag = gtag;
    if (process.env.NODE_ENV === 'development') {
      (window as Window & typeof globalThis & { gtag_debug: boolean }).gtag_debug = true;
    }
  }
};

const isGAInitialized = () => {
  return typeof window !== 'undefined' && (window as Window & typeof globalThis & { gtag: Gtag.Gtag }).gtag;
};

export const trackPageview = (url: string) => {
  if (isGAInitialized()) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
      page_path: url,
    });
  }
};

// Type for gtag arguments
export type GtagArgs =
  | ['js', Date]
  | ['config', string, Record<string, unknown>?]
  | ['event', string, Record<string, unknown>?];

// Interface for event parameters
interface EventParams {
  event_category: string;
  event_label?: string;
  value?: number;
  timestamp: number;
  user_agent: string;
  screen_resolution: string;
  [key: string]: unknown;
}

// Расширенное отслеживание событий
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
  customParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventParams: EventParams = {
      event_category: category,
      event_label: label,
      value: value,
      timestamp: Date.now(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      ...customParams,
    };
    window.gtag('event', action, eventParams);

    // Также отправляем в консоль для отладки
    console.log('Analytics Event:', {
      action,
      category,
      label,
      value,
      customParams,
    });
  }
};

// Отслеживание кликов по кнопкам с деталями
export const trackButtonClick = (
  buttonName: string,
  page: string,
  buttonType: 'primary' | 'secondary' | 'cta' = 'primary',
  position?: string
) => {
  trackEvent('button_click', 'engagement', `${page}_${buttonName}`, undefined, {
    button_type: buttonType,
    button_position: position,
    page_section: getPageSection(),
  });
};

// Отслеживание кликов по ссылкам
export const trackLinkClick = (
  linkName: string,
  page: string,
  destination: string,
  linkType: 'internal' | 'external' = 'internal'
) => {
  trackEvent('link_click', 'navigation', `${page}_${linkName}`, undefined, {
    destination_url: destination,
    link_type: linkType,
    page_section: getPageSection(),
  });
};

// Отслеживание времени на странице с деталями
export const trackTimeOnPage = (
  page: string,
  timeSpent: number,
  scrollDepth: number = 0
) => {
  trackEvent('time_on_page', 'engagement', page, Math.round(timeSpent / 1000), {
    scroll_depth: scrollDepth,
    page_sections_viewed: getViewedSections(),
  });
};

// Отслеживание скролла с деталями
export const trackScroll = (
  page: string,
  scrollDepth: number,
  timeToScroll: number
) => {
  trackEvent('scroll', 'engagement', `${page}_${scrollDepth}%`, undefined, {
    time_to_scroll: timeToScroll,
    page_section: getPageSection(),
  });
};

// Отслеживание времени чтения контента
export const trackReadingTime = (
  page: string,
  section: string,
  timeSpent: number,
  contentLength: number
) => {
  const readingSpeed = contentLength / (timeSpent / 1000); // символов в секунду
  trackEvent(
    'reading_time',
    'engagement',
    `${page}_${section}`,
    Math.round(timeSpent / 1000),
    {
      content_length: contentLength,
      reading_speed: Math.round(readingSpeed),
      section_name: section,
    }
  );
};

// Отслеживание формы с деталями
export const trackFormSubmission = (
  formName: string,
  success: boolean,
  formData?: Record<string, unknown>
) => {
  trackEvent(
    'form_submit',
    'conversion',
    `${formName}_${success ? 'success' : 'error'}`,
    undefined,
    {
      form_fields_count: formData ? Object.keys(formData).length : 0,
      form_data: formData,
    }
  );
};

// Отслеживание входа пользователя
export const trackLogin = (
  method: 'email' | 'google',
  success: boolean,
  errorMessage?: string
) => {
  trackEvent('login', 'authentication', method, undefined, {
    success: success,
    error_message: errorMessage,
  });
};

// Отслеживание создания теста
export const trackTestCreation = (
  testType: string,
  testConfig?: Record<string, unknown>
) => {
  trackEvent('test_created', 'conversion', testType, undefined, {
    test_config: testConfig,
  });
};

// Отслеживание просмотра тарифов
export const trackPricingView = (
  planName: string,
  action: 'view' | 'click' | 'select'
) => {
  trackEvent(
    'pricing_interaction',
    'conversion',
    `${planName}_${action}`,
    undefined,
    {
      plan_name: planName,
      action_type: action,
    }
  );
};

// Отслеживание конверсий
export const trackConversion = (
  conversionType: string,
  value?: number,
  currency: string = 'RUB'
) => {
  trackEvent('conversion', 'revenue', conversionType, value, {
    currency: currency,
    conversion_type: conversionType,
  });
};

// Отслеживание ошибок
export const trackError = (
  errorType: string,
  errorMessage: string,
  page: string
) => {
  trackEvent('error', 'technical', `${page}_${errorType}`, undefined, {
    error_message: errorMessage,
    error_type: errorType,
  });
};

// Отслеживание производительности
export const trackPerformance = (
  metric: string,
  value: number,
  page: string
) => {
  trackEvent('performance', 'technical', `${page}_${metric}`, value, {
    metric_name: metric,
  });
};

// Хук для отслеживания страниц с деталями
export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (GA_TRACKING_ID && typeof window !== 'undefined') {
      const url = pathname + searchParams.toString();
      const pageTitle = document.title;

      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
        page_title: pageTitle,
        page_location: window.location.href,
      });

      // Отслеживаем просмотр страницы
      trackEvent('page_view', 'navigation', pathname, undefined, {
        page_title: pageTitle,
        referrer: document.referrer,
        utm_source: searchParams.get('utm_source'),
        utm_medium: searchParams.get('utm_medium'),
        utm_campaign: searchParams.get('utm_campaign'),
      });
    }
  }, [pathname, searchParams]);
};

// Хук для отслеживания времени на странице с деталями
export const useTimeTracking = (pageName: string) => {
  const startTimeRef = useRef(Date.now());
  const scrollDepthRef = useRef(0);
  const sectionsViewedRef = useRef(new Set<string>());

  useEffect(() => {
    startTimeRef.current = Date.now();
    scrollDepthRef.current = 0;
    sectionsViewedRef.current.clear();

    // Отслеживаем скролл для определения глубины
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      scrollDepthRef.current = Math.max(scrollDepthRef.current, scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      const timeSpent = Date.now() - startTimeRef.current;
      if (timeSpent > 1000) {
        // Отслеживаем только если провели больше 1 секунды
        trackTimeOnPage(pageName, timeSpent, scrollDepthRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageName]);
};

// Хук для отслеживания скролла с деталями
export const useScrollTracking = (pageName: string) => {
  const scrollStartTimeRef = useRef(Date.now());
  const scrollTrackedRef = useRef(new Set<number>());

  useEffect(() => {
    scrollStartTimeRef.current = Date.now();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Отслеживаем каждые 25% скролла
      const scrollMilestone = Math.floor(scrollPercent / 25) * 25;

      if (
        scrollMilestone > 0 &&
        !scrollTrackedRef.current.has(scrollMilestone)
      ) {
        scrollTrackedRef.current.add(scrollMilestone);
        const timeToScroll = Date.now() - scrollStartTimeRef.current;
        trackScroll(pageName, scrollMilestone, timeToScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageName]);
};

// Хук для отслеживания времени чтения
export const useReadingTracking = (
  pageName: string,
  sectionName: string,
  contentRef: React.RefObject<HTMLElement | null>
) => {
  const readingStartTimeRef = useRef(Date.now());
  const isInViewRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInViewRef.current) {
          // Начали читать секцию
          isInViewRef.current = true;
          readingStartTimeRef.current = Date.now();
        } else if (!entry.isIntersecting && isInViewRef.current) {
          // Закончили читать секцию
          isInViewRef.current = false;
          const timeSpent = Date.now() - readingStartTimeRef.current;
          const contentLength = entry.target.textContent?.length || 0;

          if (timeSpent > 2000) {
            // Отслеживаем только если читали больше 2 секунд
            trackReadingTime(pageName, sectionName, timeSpent, contentLength);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, [pageName, sectionName, contentRef]);
};

// Вспомогательные функции
function getPageSection(): string {
  if (typeof window === 'undefined') return 'unknown';

  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop < windowHeight) return 'hero';
  if (scrollTop < windowHeight * 2) return 'content';
  if (scrollTop < windowHeight * 3) return 'features';
  if (scrollTop < windowHeight * 4) return 'pricing';
  if (scrollTop < windowHeight * 5) return 'testimonials';
  return 'footer';
}

function getViewedSections(): string[] {
  if (typeof window === 'undefined') return [];

  const sections = [
    'hero',
    'content',
    'features',
    'pricing',
    'testimonials',
    'footer',
  ];
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;

  return sections.filter((_, index) => scrollTop >= windowHeight * index);
}

// Типы для TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: GtagArgs) => void;
  }
}

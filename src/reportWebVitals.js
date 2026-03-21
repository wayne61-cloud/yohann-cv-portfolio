import { onCLS, onINP, onLCP } from 'web-vitals';

function pushMetric(metric) {
  if (typeof window !== 'undefined') {
    const list = window.__YAB_WEB_VITALS__ ?? [];
    list.push({
      name: metric.name,
      value: Number(metric.value.toFixed(2)),
      id: metric.id,
      rating: metric.rating,
    });
    window.__YAB_WEB_VITALS__ = list;
  }

  if (import.meta.env.DEV) {
    console.info(
      `[WebVitals] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`,
      metric,
    );
  }
}

export function initWebVitals() {
  onCLS(pushMetric);
  onINP(pushMetric);
  onLCP(pushMetric);
}

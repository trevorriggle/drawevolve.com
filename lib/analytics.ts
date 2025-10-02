/**
 * Minimal analytics helper for tracking events.
 * Safe no-op if analytics key is not configured.
 */

type EventProperties = Record<string, string | number | boolean | undefined>;

export function track(event: string, properties?: EventProperties): void {
  const analyticsKey =
    process.env.NEXT_PUBLIC_POSTHOG_KEY ||
    process.env.NEXT_PUBLIC_ANALYTICS_KEY;

  if (!analyticsKey) {
    // Safe no-op: log to console if no analytics configured
    console.info(`[analytics] ${event}`, properties || {});
    return;
  }

  // TODO: Integrate with PostHog, Amplitude, or preferred analytics service
  // Example for PostHog:
  // if (typeof window !== "undefined" && window.posthog) {
  //   window.posthog.capture(event, properties);
  // }

  console.info(`[analytics] ${event}`, properties || {});
}

// Track page view (call from client components if needed)
export function trackPageView(path: string): void {
  track("page_view", { path });
}

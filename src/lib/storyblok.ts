/**
 * Transform a Storyblok asset URL through the Storyblok image service.
 *
 * @param url    Original Storyblok CDN URL (a.storyblok.com/…)
 * @param width  Target width in px – 0 means "auto"
 * @param height Target height in px – 0 means "auto"
 * @param format Output format (default: 'webp')
 */
export function sbImg(
  url: string,
  width = 0,
  height = 0,
  format: 'webp' | 'jpeg' | 'png' | null = 'webp'
): string {
  if (!url) return '';
  const size = `${width}x${height}`;
  const filters = format ? `/filters:format(${format})` : '';
  const path = url.replace(/^https?:\/\/[^/]+/, '');
  return `https://img2.storyblok.com/${size}${filters}${path}`;
}

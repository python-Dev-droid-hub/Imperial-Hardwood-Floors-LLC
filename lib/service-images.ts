import type { ServicePage } from "@/content/services";

export type MediaImage = { src: string; alt: string };

/** Repeat gallery images to fill N slots for shared homepage sections. */
export function pickServiceImages(
  service: ServicePage,
  count: number,
): MediaImage[] {
  const pool: MediaImage[] =
    service.gallery && service.gallery.length > 0
      ? service.gallery
      : [{ src: service.image, alt: service.imageAlt }];

  return Array.from({ length: count }, (_, index) => pool[index % pool.length]);
}

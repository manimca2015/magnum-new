import type { Slide } from '@/components/Carousel';

/* Shared operations imagery — used by the About gallery and the
   Why Magnum slider, so both stay in step.

   Sources are resized to 1920px wide WebP; each carries a 16px inline
   placeholder so the slider paints something before the file lands. */
export const gallerySlides: Slide[] = [
  {
    src: '/gallery/Magnum1.webp',
    alt: 'Palletised and shrink-wrapped auto parts stacked along the Magnum Auto warehouse in Dubai',
    caption: '',
    blurDataURL:
      'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoQAAsAA4BaJZACdACRq/SwAP5g/KNSWfdCk4mBuxWmBUuZUDUhW+QiHcSEvYkjgB9RkAaL2IEU+4qqHGUAAA==',
  },
  {
    src: '/gallery/Magnum2.webp',
    alt: 'Export cartons stacked on pallets under the warehouse roof, staged ahead of consolidation',
    caption: '',
    blurDataURL:
      'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQAAsAA4BaJYgCdAD1ZSZIwAAAy0SBx75aIJyCY789CkC+YXnLk0/VUxx0z7latZWgc6ZTK8ZoLt8jk5fwAA==',
  },
  {
    src: '/gallery/Magnum3.webp',
    alt: 'Labelled cartons of genuine auto parts held in the Dubai warehouse',
    caption: '',
    blurDataURL:
      'data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoQAAsAA4BaJQBOgCPUQhL4fhYAAP7uxc01xFuyXR28VLypzo9ELvs8VgaVNE3ckpas6ZoJ3fCe3aXV82jkGXXX7pw8HD+KSXjCPpaMAAA=',
  },
  {
    src: '/gallery/Magnum4.webp',
    alt: 'Magnum Auto warehouse team in hi-vis vests repacking and sealing an export carton',
    caption: '',
    blurDataURL:
      'data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoQAAsAA4BaJaACdAC9SN33M0AA/q3SVjeQ0bRfFDYQOc/OgpHBSGugMH8nXs6Ut1oY/4DdSxHv8YghPOEd08Ifq6tYcm68bfMQT24AAAA=',
  },
  {
    src: '/gallery/Magnum5.webp',
    alt: 'Rows of branded parts cartons on pallets running the length of the warehouse aisle',
    caption: '',
    blurDataURL:
      'data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoQAAsAA4BaJZACdAChnwqAghgA/n3aAxnAid1hOwF0/vjP4NhgX2tckhurE1Kl+YEEJ/HR0tx+NopU/SxBvgkU4o+ok65nSAA=',
  },
  {
    src: '/gallery/Magnum6.webp',
    alt: 'Forklift moving a pallet of genuine parts cartons across the Dubai warehouse floor',
    caption: '',
    blurDataURL:
      'data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABQAgCdASoQAAsAA4BaJagCdAYsFVj2amP4wAAA/pk3jTfVCNq8oxtDuHG0+yRdEVZq2Iw4Sy2O40q+LOYMekh5QiUfgvqDdowiGBhRLGQwAo5MK3C3tmvMyAA=',
  },
  {
    src: '/gallery/Magnum7.webp',
    alt: 'Close-up of genuine spark plugs and their boxes resting on a parts carton',
    caption: '',
    blurDataURL:
      'data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoQAAsAA4BaJagCdAD2BaNbGBdAAPamnel2ZAaPC4lZS59SHFSmBSyPJ5ROEbfhTNErD2WnepumuSbM+He7M2Xe7NYXqiAA',
  },
];

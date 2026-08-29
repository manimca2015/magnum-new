'use client';

import React, { useState } from 'react';

export type Slide = {
  src: string;
  alt: string;
  caption: string;
};

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Magnum Auto operations"
      className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/7]"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.caption}
          aria-hidden={i !== index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          <span className="sr-only">{slide.alt}</span>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      {/* Caption */}
      <p
        aria-live="polite"
        className="absolute bottom-6 left-6 max-w-md text-[11px] font-semibold uppercase tracking-[0.16em] text-white sm:bottom-8 sm:left-8"
      >
        {slides[index].caption}
      </p>

      {/* Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 sm:bottom-8 sm:right-8">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center border border-white/50 text-white transition-colors hover:bg-white hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span aria-hidden="true">←︎</span>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center border border-white/50 text-white transition-colors hover:bg-white hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span aria-hidden="true">→︎</span>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-10">
        {slides.map((slide, i) => (
          <button
            key={slide.caption}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

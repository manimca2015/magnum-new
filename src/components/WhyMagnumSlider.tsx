'use client';

import React, { useEffect, useState } from 'react';
import { gallerySlides } from '@/lib/gallery';

const AUTOPLAY_MS = 5000;

export default function WhyMagnumSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next: number) => setIndex((next + gallerySlides.length) % gallerySlides.length);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % gallerySlides.length),
      AUTOPLAY_MS
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Magnum Auto operations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative flex min-h-[22rem] flex-col justify-end lg:min-h-[34rem]"
    >
      {gallerySlides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          <span className="sr-only">{slide.alt}</span>
        </div>
      ))}

      <div className="absolute inset-0 bg-black/25"></div>

      {/* Caption bar — controls sit between the two labels */}
      <div className="relative z-10 px-8 pb-8 sm:px-12 sm:pb-10">
        <div className="border-t border-white/25 pt-5">
          <div className="flex items-center justify-between gap-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            <span>Dubai, UAE</span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:text-white"
              >
                <span aria-hidden="true">←︎</span>
              </button>

              <div className="flex items-center gap-2">
                {gallerySlides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:text-white"
              >
                <span aria-hidden="true">→︎</span>
              </button>
            </div>

            <span>Export operations</span>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from '@phosphor-icons/react/dist/ssr';

/* Client leaf so the rest of the hero stays a Server Component. The only state
   here is whether the footage is running, which drives the play mark. */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const video = videoRef.current;
    if (!video) return;

    /* Autoplay is a decorative motion, so anyone asking for reduced motion
       gets a still poster and the play mark instead. */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
    }

    /* Read the real state rather than trusting the autoplay attribute: a
       browser may refuse to start it, and the mark has to reflect that. */
    setPlaying(!video.paused);
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    /* Same radius as the slab behind, so the two curves are concentric.
       overflow-hidden clips the video and the tint layer to the rounded
       frame. */
    <div className="relative isolate overflow-hidden rounded-xl border border-white/20 shadow-2xl shadow-pitch/50">
      <video
        ref={videoRef}
        className="aspect-[16/9] w-full object-cover lg:aspect-[16/10]"
        width={960}
        height={540}
        poster="/magnum-hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="Genuine parts crated and palletised in the Magnum Auto warehouse in Dubai"
      >
        <source src="/magnum-hero.webm" type="video/webm" />
        <source src="/magnum-hero.mp4" type="video/mp4" />
      </video>

      {/* Ties the footage into the navy palette. Click-through so it never
          sits between the viewer and the native controls. */}
      <div className="pointer-events-none absolute inset-0 bg-bark/25 mix-blend-color" aria-hidden="true"></div>

      {/* Play mark. Centred so it clears the control bar along the bottom, and
          it fades out once the footage is running so a live video is never
          sitting under a control that appears to do nothing. While playing it
          is inert and invisible, so it cannot swallow a tap meant for the
          video; hovering the panel brings back a pause mark. Rendered only
          after hydration, since before that the button could not act on a
          click anyway. */}
      {hydrated && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b28d30] ${
            playing
              ? 'pointer-events-none opacity-0 hover:pointer-events-auto group-hover/video:pointer-events-auto group-hover/video:opacity-100'
              : 'opacity-100'
          }`}
        >
          <span className="transition-transform duration-300 group-hover/video:scale-105">
            {playing ? (
              <Pause
                size={64}
                weight="fill"
                aria-hidden="true"
                className="text-[#b28d30] drop-shadow-[0_2px_10px_rgb(3_10_28/0.65)]"
              />
            ) : (
              <Play
                size={64}
                weight="fill"
                aria-hidden="true"
                className="text-[#b28d30] drop-shadow-[0_2px_10px_rgb(3_10_28/0.65)]"
              />
            )}
          </span>
        </button>
      )}
    </div>
  );
}

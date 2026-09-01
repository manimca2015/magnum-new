import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex w-full min-h-[100dvh] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/warehouse-hero.webp)' }}
    >
      {/* Overlay, three layers with one job each.

          1. Multiply, not colour-blend. Colour-blend flattened the warehouse
             into a single navy value and killed the depth in the shot;
             multiply tints it while the original luminance survives.
          2. One diagonal pool of shadow anchored bottom-left, under the copy,
             opening up toward the top-right where the video panel sits. This
             replaces the two flat scrims that used to cancel each other into
             an even fog.
          3. A short scrim at each edge: enough for the fixed header at the
             top and for the seam into the cream section at the bottom,
             transparent through the middle so the photo is never veiled. */}
      <div className="absolute inset-0 bg-bark/50 mix-blend-multiply" aria-hidden="true"></div>
      <div
        className="absolute inset-0 bg-[radial-gradient(125%_105%_at_12%_88%,rgb(3_10_28/0.94)_0%,rgb(3_10_28/0.62)_34%,rgb(8_23_60/0.24)_66%,transparent_100%)]"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(3_10_28/0.72)_0%,transparent_26%,transparent_74%,rgb(3_10_28/0.62)_100%)]"
        aria-hidden="true"
      ></div>

      {/* Content — same gutters as the header so text lines up with the logo.
          Copy on the left, warehouse footage on the right from lg up; below
          that the video stacks underneath the CTAs. */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
          {/* Eyebrow */}
          <p className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-[0.18em]">
            Wholesale · Consistent supply · Multi-brand consolidation
          </p>

          {/* Main heading */}
          <h1
            className="mt-6 text-white"
            style={{ font: '400 clamp(48px, 6vw, 78px)/.94 Georgia, serif' }}
          >
            Genuine Auto Parts
            <br />
            &amp; Lubricants
            <br />
            <span className="italic text-[#c3cee4]">from Dubai</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-white/80 text-base sm:text-lg leading-[1.7]">
            Stock and forward-order supply for automotive wholesalers, importers and
            distributors worldwide, with competitive pricing, clear lead times and
            consolidated multi-brand shipments from Dubai.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#send-rfq"
              className="inline-flex items-center justify-between gap-6 min-w-[15rem] border-2 border-white bg-white text-black px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 hover:bg-transparent hover:text-white"
            >
              Send your RFQ
              <span aria-hidden="true">↗︎</span>
            </a>
            <a
              href="#whatsapp"
              className="inline-flex items-center justify-between gap-6 min-w-[15rem] border-2 border-white text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 hover:bg-white hover:text-black"
            >
              WhatsApp sales
              <span aria-hidden="true">↗︎</span>
            </a>
          </div>

          {/* Footer note */}
          <p className="mt-10 flex items-center gap-3 text-white/60 text-xs sm:text-sm uppercase tracking-[0.14em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60"></span>
            Wholesale enquiries from USD 20,000
          </p>
          </div>

          {/* Warehouse footage — decorative, so it is muted, looping and
              unattended. The poster carries the frame until the file is
              decoded, and WebM is offered first with an H.264 fallback for
              older iOS. Kept to a shallow 16:10 band so it sits beside the
              copy without stretching the fold. */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Three solid slabs stacked behind the panel, down and to the
                  left. That direction is deliberate: to the right there is
                  only the 24px page gutter before the viewport edge, which
                  caps the bands at a barely-readable 8px, while to the left
                  sits the 48px column gap. Stepping into it gives 14px bands
                  at lg, wide enough to actually register against a busy
                  photograph. Painted furthest first: brass on the outside,
                  then navy, then white giving the video a crisp edge to sit
                  against. Below lg the
                  panel is full width, so the steps fall back to 8px and stop
                  at the gutter. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden -translate-x-6 translate-y-6 bg-[#bf882b] sm:block lg:-translate-x-[42px] lg:translate-y-[42px]"
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden -translate-x-4 translate-y-4 bg-navy-soft sm:block lg:-translate-x-7 lg:translate-y-7"
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden -translate-x-2 translate-y-2 bg-white sm:block lg:-translate-x-3.5 lg:translate-y-3.5"
              ></span>

              <div className="relative isolate overflow-hidden border border-white/20 shadow-2xl shadow-pitch/50">
                <video
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
                  aria-label="Genuine parts crated and palletised in the Magnum Auto warehouse in Dubai"
                >
                  <source src="/magnum-hero.webm" type="video/webm" />
                  <source src="/magnum-hero.mp4" type="video/mp4" />
                </video>
  
                {/* Ties the footage into the navy palette. Click-through so it
                    never sits between the viewer and the native controls. */}
                <div className="pointer-events-none absolute inset-0 bg-bark/25 mix-blend-color" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

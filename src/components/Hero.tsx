import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative flex w-full min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/warehouse-hero.webp)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content — same gutters as the header so text lines up with the logo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-[0.18em]">
            Wholesale · Consistent supply · Multi-brand consolidation
          </p>

          {/* Main heading */}
          <h1
            className="mt-6 text-white"
            style={{ font: '400 clamp(48px, 6vw, 82px)/.94 Georgia, serif' }}
          >
            Genuine Auto Parts
            <br />
            &amp; Lubricants
            <br />
            <span className="italic text-[#dccbbb]">from Dubai</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-white/80 text-base sm:text-lg leading-[1.7]">
            Stock and forward-order supply for automotive wholesalers, importers and
            distributors worldwide—with competitive pricing, clear lead times and
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
      </div>
    </section>
  );
}

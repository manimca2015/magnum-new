import React from 'react';
import { coreBrands, otherBrands } from '@/lib/brands';


export default function BrandCoverage() {
  return (
    <section id="brands" className="w-full bg-cream py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading row */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Brands we supply
            </p>
          </div>

          <div className="lg:col-span-6 border-l border-espresso/35 pl-6">
            <p className="max-w-lg text-[15px] leading-[1.7] text-charcoal">
              Our brand coverage reflects the vehicle lines we regularly source and supply
              to international parts buyers.
            </p>
          </div>
        </div>

        {/* Core brands — dark panel */}
        <div className="mt-10 bg-cocoa px-6 pt-8 sm:px-8 sm:pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Core brands
          </p>

          <div className="mt-6 grid grid-cols-2 border-t border-white/15 sm:grid-cols-3 lg:grid-cols-5">
            {coreBrands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col border-b border-white/10 px-4 pt-5 pb-10 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pb-16"
              >
                <span className="text-[11px] tracking-[0.12em] text-gold/70">
                  {brand.number}
                </span>

                <span className="mt-10 text-center font-bold text-3xl sm:text-4xl leading-none tracking-[-0.02em] text-white">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Other brands — light panel */}
        <div className="grid grid-cols-1 border-b border-charcoal/15 bg-shell lg:grid-cols-12">
          <div className="px-6 py-8 sm:px-8 lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Other brands we supply
            </p>
            <p className="mt-2 text-[13px] leading-[1.6] text-charcoal/60">
              Subject to requirement and availability
            </p>
          </div>

          <div className="grid grid-cols-3 lg:col-span-8 lg:grid-cols-6">
            {otherBrands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center border-t border-l border-charcoal/15 px-3 py-7 lg:border-t-0"
              >
                <span className="font-bold text-lg sm:text-xl leading-none tracking-[-0.01em] text-charcoal">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Consolidated export */}
        <div className="grid grid-cols-1 gap-4 px-6 py-8 sm:px-8 lg:grid-cols-12 lg:gap-10">
          <p className="lg:col-span-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
            Consolidated export
          </p>

          <p className="lg:col-span-9 border-l border-charcoal/20 pl-6 text-[15px] leading-[1.7] text-charcoal">
            Multiple brands can be repacked and combined into one consolidated shipment
            from Dubai.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const reasons = [
  {
    number: '01',
    title: 'Multi-brand capability',
    body: 'Combine requirements across several vehicle lines.',
  },
  {
    number: '02',
    title: 'International sourcing',
    body: 'Established supply routes across multiple markets.',
  },
  {
    number: '03',
    title: 'Dubai export base',
    body: 'Consolidation, documentation and shipment coordination.',
  },
];

export default function WhyMagnum() {
  return (
    /* Full-bleed: the image runs to the left viewport edge, the panel to the right. */
    <section id="why-magnum" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
        {/* Left — warehouse image with a footer caption bar */}
        <div
          className="relative flex min-h-[22rem] flex-col justify-end bg-cover bg-center lg:min-h-[34rem]"
          style={{ backgroundImage: 'url(/warehouse-hero.webp)' }}
        >
          <div className="absolute inset-0 bg-black/25"></div>

          <div className="relative z-10 px-8 pb-8 sm:px-12 sm:pb-10">
            <div className="border-t border-white/25 pt-5">
              <div className="flex items-center justify-between gap-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                <span>Dubai, UAE</span>
                <span>Export operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — reasons panel */}
        <div className="flex flex-col justify-center bg-bark px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Why Magnum
          </p>

          <h2 className="mt-6 font-medium text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-[-0.01em] text-white">
            Commercial detail before commitment.
          </h2>

          <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-white/70">
            Every RFQ is evaluated across part numbers, quantities, sourcing route,
            availability, lead time, packing and shipment requirements.
          </p>

          <dl className="mt-9 border-t border-white/15 divide-y divide-white/15">
            {reasons.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[3.5rem_1fr] items-baseline py-5"
              >
                <span className="italic text-xs text-white/40">
                  {item.number}
                </span>

                <div>
                  <dt className="font-medium text-xl sm:text-[1.375rem] leading-snug text-white">
                    {item.title}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-relaxed text-white/55">
                    {item.body}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const coverage = [
  { number: '01', region: 'Korean', brands: ['Hyundai', 'Kia', 'Genesis'] },
  { number: '02', region: 'Japanese', brands: ['Toyota', 'Nissan', 'Mazda', 'Mitsubishi', 'Subaru'] },
  { number: '03', region: 'American', brands: ['Ford', 'Chevrolet', 'Jeep'] },
  { number: '04', region: 'European', brands: ['Renault', 'Peugeot', 'Citroën'] },
  { number: '05', region: 'Chinese', brands: ['BYD', 'MG', 'Chery'] },
];

export default function BrandCoverage() {
  return (
    <section id="brands" className="w-full bg-shell py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — pitch */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Brand coverage
            </p>

            <h2 className="mt-6 max-w-[26rem] font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.01em] text-charcoal">
              Multiple vehicle lines. One consolidated order.
            </h2>

            <p className="mt-6 max-w-sm text-[15px] leading-[1.7] text-ink">
              Coverage is focused on genuine parts programmes with practical availability,
              pricing and export potential.
            </p>

            <a
              href="#send-rfq"
              className="mt-8 inline-flex items-center justify-between gap-8 min-w-[17.5rem] border border-espresso bg-espresso px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-transparent hover:text-espresso"
            >
              Check availability
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Right — coverage table */}
          <div className="lg:col-span-7">
            <dl className="border-y border-charcoal/15 divide-y divide-charcoal/15">
              {coverage.map((row) => (
                <div
                  key={row.region}
                  className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_8.5rem_1fr] items-center gap-x-4 gap-y-3 py-6 sm:py-7"
                >
                  <span className="font-serif italic text-xs text-charcoal/40">
                    {row.number}
                  </span>

                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                    {row.region}
                  </dt>

                  <dd className="col-span-2 sm:col-span-1 font-serif text-xl sm:text-2xl leading-snug text-charcoal">
                    {row.brands.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

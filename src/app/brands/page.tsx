import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadyToSource from '@/components/ReadyToSource';

export const metadata: Metadata = {
  title: 'Brands | MAGNUM AUTO',
  description:
    'Genuine parts coverage across Korean, Japanese, American, European and Chinese vehicle lines, consolidated and exported from Dubai.',
};

const coverage = [
  { number: '01', region: 'Korean', brands: ['Hyundai', 'Kia', 'Genesis'] },
  { number: '02', region: 'Japanese', brands: ['Toyota', 'Nissan', 'Mazda', 'Mitsubishi'] },
  { number: '03', region: 'American', brands: ['Chevrolet', 'Ford', 'Jeep'] },
  { number: '04', region: 'European', brands: ['Renault', 'Peugeot', 'Citroën'] },
  { number: '05', region: 'Chinese', brands: ['BYD', 'MG', 'Chery'] },
];

export default function Brands() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Dark band keeps the fixed header legible */}
        <section className="w-full bg-bark px-6 pb-14 pt-32 sm:pb-16 sm:pt-36">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Brands
            </p>
            <h1 className="mt-6 max-w-3xl font-medium text-4xl leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl">
              Capability matters more than a static catalogue.
            </h1>
          </div>
        </section>

        {/* Coverage table */}
        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <dl className="border-y border-charcoal/15 divide-y divide-charcoal/15">
              {coverage.map((row) => (
                <div
                  key={row.region}
                  className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_8.5rem_1fr] items-center gap-x-4 gap-y-3 py-6 sm:py-7"
                >
                  <span className="italic text-xs text-charcoal/40">{row.number}</span>

                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                    {row.region}
                  </dt>

                  <dd className="col-span-2 sm:col-span-1 font-medium text-xl sm:text-2xl leading-snug text-charcoal">
                    {row.brands.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ReadyToSource />
      </main>

      <Footer />
    </div>
  );
}

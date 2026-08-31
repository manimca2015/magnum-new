import React from 'react';

const audiences = [
  {
    number: '01',
    title: 'Wholesalers & Stockists',
    body: 'Parts wholesalers and stockists purchasing for inventory, regular supply and resale.',
  },
  {
    number: '02',
    title: 'Service & Workshop Networks',
    body: 'Service and workshop groups sourcing genuine parts for maintenance and mechanical repair.',
  },
  {
    number: '03',
    title: 'Insurance Parts Procurement Specialists',
    body: 'Specialist buyers coordinating genuine spare parts for insurer-approved accident-repair requirements.',
  },
  {
    number: '04',
    title: 'Multi-Brand Franchise Dealers',
    body: 'Franchise dealer groups requiring genuine spare parts across multiple vehicle brands and locations.',
  },
  {
    number: '05',
    title: 'Parts Traders & Distributors',
    body: 'Importers, exporters, distributors and trading companies supplying parts within and across their markets.',
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="w-full bg-shell py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading row */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Who we serve
            </p>
          </div>

          <p className="lg:col-span-6 max-w-xl border-l border-espresso/40 pl-6 text-[15px] leading-[1.7] text-ink">
            Supplying genuine automotive spare parts to trade, dealer, service and
            specialist procurement networks worldwide.
          </p>
        </div>

        {/* Audience cards — one continuous strip; the gap-px on a tinted
            container draws the hairlines at every column and row break. */}
        <div className="mt-10 grid grid-cols-1 gap-px border border-charcoal/15 bg-charcoal/15 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((item) => (
            <a
              key={item.number}
              href="#send-rfq"
              className="flex min-h-[21rem] flex-col bg-cream p-7 transition duration-300 hover:bg-[#f1e7dc]"
            >
              <span className="font-bold text-5xl sm:text-6xl leading-none tracking-[-0.02em] text-charcoal/25">
                {item.number}
              </span>

              {/* mt-auto bottom-anchors the title block, so a three-line card still
                  lines its last line up with the others. */}
              <h3 className="mt-auto font-bold text-xl sm:text-2xl leading-[1.2] tracking-[-0.01em] text-charcoal">
                {item.title}
              </h3>

              <p className="mt-5 text-[13px] leading-[1.65] text-charcoal/65">
                {item.body}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        {/* Label left, standfirst set against it on the right, on the same
            row. Same header rhythm the other sections use. */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Who we serve
            </p>
          </div>

          <p className="max-w-xl border-l border-espresso/40 pl-6 text-[15px] leading-[1.7] text-ink lg:col-span-6">
            Supplying genuine automotive spare parts to trade, dealer, service and
            specialist procurement networks worldwide.
          </p>
        </div>

        {/* Horizontal track. Below lg the row scrolls and snaps, one segment at
            a time, which keeps the type readable instead of crushing five
            columns into a phone. The negative margin lets it bleed to the
            screen edge so the cut-off card reads as "there is more". */}
        <div className="mt-14 -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          <ul className="relative flex min-w-max snap-x snap-mandatory gap-8 lg:grid lg:min-w-0 lg:grid-cols-5 lg:gap-10">
            {audiences.map((item, i) => (
              <li
                key={item.number}
                className="relative w-[17rem] shrink-0 snap-start lg:w-auto"
              >
                {/* One rail segment per hop, drawn from this marker edge to
                    the next one across the gap, so it stays aligned whatever
                    the column width works out to. A single absolute rule
                    across the row could not do that once the grid gap ate
                    into the column. The gradient arrives rather than fades,
                    pulling the eye toward the next step. */}
                {i < audiences.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-11 -right-8 top-[1.375rem] h-px bg-[linear-gradient(to_right,rgb(8_23_60/0.10),rgb(8_23_60/0.38))] lg:-right-10"
                  ></span>
                )}
                <a href="#send-rfq" className="group block focus-visible:outline-none">
                  {/* Sits above the segment, so the rail meets a clean edge. */}
                  <span className="relative flex h-11 w-11 items-center justify-center bg-bark text-[11px] font-semibold tracking-[0.16em] text-white transition-colors duration-300 group-hover:bg-cocoa group-focus-visible:ring-2 group-focus-visible:ring-charcoal/40 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-shell">
                    {item.number}
                  </span>

                  <h3 className="mt-7 font-bold text-xl leading-[1.2] tracking-[-0.01em] text-charcoal decoration-charcoal/30 underline-offset-[6px] transition group-hover:underline sm:text-[1.375rem]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-[1.65] text-charcoal/65">
                    {item.body}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

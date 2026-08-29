import React from 'react';

const audiences = [
  { number: '01', title: 'Importers & distributors' },
  { number: '02', title: 'Automotive parts wholesalers' },
  { number: '03', title: 'Exporters & trading companies' },
  { number: '04', title: 'Fleet & commercial supply' },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="w-full bg-shell py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading row — copy sits on the heading's last line */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Who we serve
            </p>
            <h2 className="mt-6 font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.01em] text-charcoal">
              Built for professional
              <br />
              parts buyers.
            </h2>
          </div>

          <p className="lg:col-span-5 lg:self-end lg:pb-3 max-w-md text-[15px] leading-[1.7] text-ink">
            Our operation is structured around commercial orders, not individual retail
            requirements.
          </p>
        </div>

        {/* Audience cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <a
              key={item.number}
              href="#send-rfq"
              className="group flex min-h-[14rem] flex-col bg-sand p-6 transition duration-300 hover:bg-[#e5dcd0]"
            >
              <span className="italic text-xs text-charcoal/45">
                {item.number}
              </span>

              {/* mt-auto bottom-anchors the title, so a three-line card still
                  lines its last line up with the others. */}
              <h3 className="mt-auto font-medium text-2xl leading-[1.25] text-charcoal">
                {item.title}
              </h3>

              <span
                aria-hidden="true"
                className="mt-6 self-end text-charcoal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗︎
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

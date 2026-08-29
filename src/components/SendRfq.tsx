import React from 'react';

const fileTypes = ['XLS', 'XLSX', 'CSV', 'PDF'];

const fields = [
  { id: 'name', label: 'Full name', placeholder: 'Your name', type: 'text', autoComplete: 'name' },
  { id: 'company', label: 'Company', placeholder: 'Company name', type: 'text', autoComplete: 'organization' },
  { id: 'country', label: 'Country', placeholder: 'Country', type: 'text', autoComplete: 'country-name' },
  { id: 'email', label: 'Business email', placeholder: 'you@company.com', type: 'email', autoComplete: 'email' },
  { id: 'phone', label: 'WhatsApp / phone', placeholder: '+971…', type: 'tel', autoComplete: 'tel' },
  { id: 'brands', label: 'Brands required', placeholder: 'Hyundai, Kia, Toyota…', type: 'text', autoComplete: 'off' },
];

const inputClass =
  'mt-3 w-full border-b border-charcoal/25 bg-transparent pb-2 text-[15px] text-charcoal placeholder:text-charcoal/40 focus:border-bark focus:outline-none transition-colors';

const labelClass =
  'block text-[10px] font-semibold uppercase tracking-[0.16em] text-espresso';

type Variant = 'dark' | 'light';

/* 'light' is used on the contact page, where the section sits on cream. */
const theme = {
  dark: {
    section: 'bg-bark',
    eyebrow: 'text-white/60',
    heading: 'text-white',
    body: 'text-white/70',
    chip: 'border-white/25 text-white',
    rule: 'border-white/20',
    contact: 'text-white',
    card: 'bg-shell',
  },
  light: {
    section: 'bg-cream',
    eyebrow: 'text-espresso',
    heading: 'text-charcoal',
    body: 'text-ink',
    chip: 'border-charcoal/25 text-charcoal',
    rule: 'border-charcoal/20',
    contact: 'text-charcoal',
    card: 'bg-white border border-charcoal/10',
  },
};

export default function SendRfq({ variant = 'dark' }: { variant?: Variant }) {
  const t = theme[variant];

  return (
    <section id="send-rfq" className={`w-full ${t.section} py-14 sm:py-16`}>
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — pitch and contact */}
          <div className="lg:col-span-5">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${t.eyebrow}`}>
              Send your RFQ
            </p>

            <h2 className={`mt-6 max-w-sm font-medium text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.01em] ${t.heading}`}>
              Already have a part-number list?
            </h2>

            <p className={`mt-5 max-w-md text-[15px] leading-[1.7] ${t.body}`}>
              Upload it directly. Our sales team will review the brands, quantities,
              availability and expected lead times.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {fileTypes.map((type) => (
                <li
                  key={type}
                  className={`border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${t.chip}`}
                >
                  {type}
                </li>
              ))}
            </ul>

            <div className={`mt-8 space-y-2 border-t ${t.rule} pt-6 font-medium text-xl ${t.contact}`}>
              <p>
                <a href="mailto:trade@magnumautofz.com" className="hover:underline">
                  trade@magnumautofz.com
                </a>
              </p>
              <p>
                <a href="tel:+971569009877" className="hover:underline">
                  +971 56 900 9877
                </a>
              </p>
            </div>
          </div>

          {/* Right — RFQ form */}
          <div className="lg:col-span-7">
            <form className={`${t.card} p-8 sm:p-9 lg:p-10`}>
              <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className={labelClass}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>

              {/* Upload — the whole dashed box is the file picker's label */}
              <label
                htmlFor="rfq-file"
                className="mt-8 flex cursor-pointer items-center gap-5 border border-dashed border-charcoal/35 p-4 transition-colors hover:border-bark"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-charcoal/25 text-bark"
                >
                  ↑︎
                </span>
                <span>
                  <span className="block text-[13px] font-bold uppercase tracking-[0.12em] text-charcoal">
                    Upload your RFQ
                  </span>
                  <span className="mt-1.5 block text-[11px] uppercase tracking-[0.08em] text-charcoal/60">
                    XLS, XLSX, CSV or PDF · up to 20 MB
                  </span>
                </span>
                <input
                  id="rfq-file"
                  name="rfq-file"
                  type="file"
                  accept=".xls,.xlsx,.csv,.pdf"
                  className="sr-only"
                />
              </label>

              <div className="mt-6">
                <label htmlFor="notes" className={labelClass}>
                  Additional notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  placeholder="Quantities, required timing or commercial requirements"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-between bg-bark px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-cocoa"
              >
                Submit RFQ
                <span aria-hidden="true">↗︎</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

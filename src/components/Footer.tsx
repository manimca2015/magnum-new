import React from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Brands', href: '#brands' },
  { label: 'Send RFQ', href: '#send-rfq' },
];

const contact = [
  { label: 'trade@magnumautofz.com', href: 'mailto:trade@magnumautofz.com' },
  { label: '+971 56 900 9877', href: 'tel:+971569009877' },
  { label: 'Dubai, UAE' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-pitch py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Logo */}
          <div className="lg:col-span-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
              <span className="text-lg font-bold text-white">M</span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-white">MAGNUM</div>
              <div className="text-xs tracking-[0.28em] text-white/70">AUTO</div>
            </div>
          </div>

          {/* Blurb */}
          <p className="lg:col-span-4 max-w-sm text-[14px] leading-[1.7] text-white/60">
            Genuine automotive spare parts and lubricants for international wholesale
            supply, consolidated and exported from Dubai.
          </p>

          {/* Navigation */}
          <nav className="lg:col-span-2">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <ul className="lg:col-span-3 space-y-4">
            {contact.map((item) => (
              <li
                key={item.label}
                className="text-[13px] uppercase tracking-[0.1em] text-white/70"
              >
                {item.href ? (
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <p className="max-w-4xl text-[11px] leading-[1.6] text-white/35">
            All trademarks and vehicle manufacturer names are the property of their
            respective owners. Magnum Auto is an independent automotive spare parts
            distributor and is not affiliated with or endorsed by the manufacturers listed
            unless expressly stated.
          </p>
          <p className="shrink-0 text-[11px] text-white/35">
            © {new Date().getFullYear()} Magnum Auto
          </p>
        </div>
      </div>
    </footer>
  );
}

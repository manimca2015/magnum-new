'use client';

import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    /* Transparent at the top of the page; the blur and tint only appear once
       the header is actually overlapping scrolled content. */
    <header
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-sm border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div>
            <div className="text-white font-semibold text-sm tracking-wide">MAGNUM</div>
            <div className="text-white/70 text-xs tracking-widest">AUTO</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition">
            ABOUT
          </a>
          <a href="#capabilities" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition">
            CAPABILITIES
          </a>
          <a href="#brands" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition">
            BRANDS
          </a>
          <a href="#send-rfq" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition">
            SEND RFQ
          </a>
        </nav>

        {/* Submit Enquiry Button */}
        <button className="inline-flex items-center gap-3 border-2 border-white text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] hover:bg-white hover:text-black transition duration-300">
          SUBMIT ENQUIRY <span aria-hidden="true">↗</span>
        </button>
      </div>
    </header>
  );
}

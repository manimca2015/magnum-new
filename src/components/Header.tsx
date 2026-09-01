'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/* The nav is one-page: every entry targets a section of the homepage. The
   standalone routes (/about, /what-we-do, ...) still exist and stay reachable
   by URL — they are simply no longer surfaced in the menu. */
const navLinks = [
  { label: 'Home', href: '/#home', section: 'home' },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'What We Do', href: '/#capabilities', section: 'capabilities' },
  { label: 'Brands', href: '/#brands', section: 'brands' },
  { label: 'Contact Us', href: '/#send-rfq', section: 'send-rfq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const onHome = pathname === '/';

  /* Anchors only light up while we are actually on the homepage; on the
     standalone routes no menu item is current. */
  const isActive = (section: string) => onHome && activeSection === section;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll spy: the current section is the last one whose top has passed
     under the header. Recomputed on scroll and resize so it survives layout
     shifts from images loading. */
  useEffect(() => {
    if (!onHome) return;

    const spy = () => {
      const offset = 96;
      let current = navLinks[0].section;
      for (const link of navLinks) {
        const el = document.getElementById(link.section);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = link.section;
      }
      /* The last section can be too short to ever reach the offset line, so
         the bottom of the page always resolves to the final entry. */
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = navLinks[navLinks.length - 1].section;
      }
      setActiveSection(current);
    };

    spy();
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);
    return () => {
      window.removeEventListener('scroll', spy);
      window.removeEventListener('resize', spy);
    };
  }, [onHome]);

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
        <Link href="/" aria-label="Magnum Auto — home" className="flex items-center">
          <Image
            src="/magnum-logo.png"
            alt="Magnum Auto"
            width={230}
            height={60}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.section);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? 'true' : undefined}
                className={`text-sm font-medium uppercase tracking-wide transition ${
                  active
                    ? 'text-white underline decoration-white/50 underline-offset-[10px]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Submit Enquiry Button */}
        <Link
          href="/#send-rfq"
          className="inline-flex items-center gap-3 border-2 border-white text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] hover:bg-white hover:text-black transition duration-300"
        >
          SUBMIT ENQUIRY <span aria-hidden="true">↗︎</span>
        </Link>
      </div>
    </header>
  );
}

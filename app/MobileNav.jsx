'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/stories', label: 'Stories' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/playbooks', label: 'Playbooks' },
    { href: '/impact', label: 'Impact' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors"
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <svg className="w-6 h-6 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-brand-900/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[73px] right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-soft-xl animate-slide-in">
            <nav className="p-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-neutral-700 hover:bg-brand-50 hover:text-brand-700 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

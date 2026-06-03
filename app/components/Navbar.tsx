'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-[#334155]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#334155] group-hover:border-[#00897B] transition-colors duration-300">
              <Image src="/logo.jpg" alt="BâtiControls" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-white font-bold text-lg tracking-tight">BÂTI</span>
                <span className="text-[#00897B] font-bold text-lg tracking-tight">CONTROLS</span>
              </div>
              <p className="text-[#94A3B8] text-xs">Spécialiste GTB</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#00897B] bg-[#00897B]/10'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#1E293B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-[#00897B] hover:bg-[#00695C] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer glow-emerald-sm hover:glow-emerald"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Mobile */}
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 border-t border-[#334155] pt-4 bg-[#0F172A]/95 backdrop-blur-md">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className={`block py-3 px-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? 'text-[#00897B]' : 'text-[#94A3B8] hover:text-white'
                }`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="mt-4 block text-center bg-[#00897B] text-white font-semibold px-5 py-3 rounded-xl">
              Demander un devis
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

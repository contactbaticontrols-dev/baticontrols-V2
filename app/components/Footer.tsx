import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A1120] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-white font-bold text-2xl">BÂTI</span>
              <span className="text-[#00897B] font-bold text-2xl">CONTROLS</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              Électricien installateur & prestataire spécialisé GTB. Une équipe de 8 experts techniques, partout en France.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="w-2 h-2 bg-[#00897B] rounded-full animate-pulse"></span>
              <span className="text-[#00897B] text-sm font-medium">Intervention sur toute la France</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/realisations', label: 'Réalisations' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#94A3B8] hover:text-[#00897B] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:0615084962" className="text-[#94A3B8] hover:text-[#00897B] transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00897B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06 15 08 49 62
                </a>
              </li>
              <li>
                <a href="mailto:Contact.baticontrols@gmail.com" className="text-[#94A3B8] hover:text-[#00897B] transition-colors text-sm flex items-center gap-2 break-all">
                  <svg className="w-4 h-4 text-[#00897B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact.baticontrols@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#475569] text-xs">© {new Date().getFullYear()} BâtiControls. Tous droits réservés.</p>
          <p className="text-[#475569] text-xs">Prestataire & sous-traitant spécialisé GTB</p>
        </div>
      </div>
    </footer>
  );
}

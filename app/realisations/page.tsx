import Link from 'next/link';

const hotellerieGroupes = [
  {
    categorie: "Hôtels 4 étoiles",
    nb: 4,
    lieux: "Nantes & Pornic",
    desc: "Déploiement GTB/CVC complet sur 4 établissements haut de gamme : supervision centralisée, régulation thermique par chambre, gestion éclairage LED dimmable, comptage énergie en temps réel et optimisation des consommations.",
    tags: ["GTB", "CVC", "KNX", "BACnet", "LED", "Énergie"],
    accent: true,
  },
  {
    categorie: "Châteaux classés Monuments Historiques",
    nb: 3,
    lieux: "Loire-Atlantique & Maine-et-Loire",
    desc: "Intégration GTB discrète et respectueuse du patrimoine sur 3 châteaux classés. Régulation chaufferie basse température, supervision énergétique et éclairage LED patrimonial adaptés aux contraintes des bâtiments historiques.",
    tags: ["Monument Historique", "GTB", "Patrimoine", "Chauffage BT"],
    accent: false,
    mh: true,
  },
  {
    categorie: "Hôtels 2 & 3 étoiles",
    nb: 9,
    lieux: "Nantes & Pornic",
    desc: "Installation GTB, câblage et mise en service sur 9 établissements. Gestion chaufferie, vannes thermostatiques, comptage énergie et supervision des équipements techniques.",
    tags: ["GTB", "CVC", "Modbus", "Énergie", "Câblage"],
    accent: false,
  },
];

const autres = [
  { client: "Sport 2000 & Intersport", secteur: "Retail & Sport", desc: "Déploiement GTB et supervision énergétique sur plusieurs enseignes en France. Gestion CVC des surfaces de vente et comptage énergie.", tags: ["GTB", "Retail", "Énergie"], highlight: false },
  { client: "UTTI de Tourcoing", secteur: "Tertiaire — 90 000 m²", desc: "Installation GTB sur 90 000 m² — l'un de nos plus grands chantiers tertiaires.", tags: ["GTB", "90 000 m²", "Tertiaire"], highlight: true },
  { client: "E.Leclerc / Carrefour", secteur: "Grande Distribution", desc: "GTB et supervision énergétique sur plusieurs hypermarchés. Régulation CVC, comptage énergie et gestion équipements frigorifiques.", tags: ["GTB", "Grande Distribution", "CVC"], highlight: false },
  { client: "Entrepôts Logistiques", secteur: "Logistique & Industrie", desc: "GTB sur plusieurs entrepôts. Gestion aérothermes, déstratificateurs et régulation thermique des grands volumes.", tags: ["GTB", "Logistique", "Aérothermes"], highlight: false },
  { client: "Studio de cinéma", secteur: "Audiovisuel — Le Perray-en-Yvelines", desc: "Mise en service équipements GTB d'un studio de cinéma professionnel.", tags: ["GTB", "Culture"], highlight: false },
];

const stats = [
  { value: "16+", label: "Hôtels équipés" },
  { value: "4", label: "Hôtels 4 étoiles" },
  { value: "3", label: "Châteaux MH" },
  { value: "90 000 m²", label: "UTTI Tourcoing" },
];

export default function Realisations() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#D1DAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F5C] mt-2 mb-4">Nos réalisations</h1>
          <p className="text-[#5A6B9A] text-lg max-w-2xl">Hôtellerie, retail, grande distribution, logistique — partout en France.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0D1F5C] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-blue-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hôtellerie */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-12 h-12 bg-[#E8611A]/10 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#E8611A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest block">Secteur prioritaire</span>
              <h2 className="text-3xl font-black text-[#0D1F5C]">Hôtellerie — 16 établissements</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hotellerieGroupes.map((g) => (
              <div key={g.categorie} className={`rounded-2xl p-10 border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
                g.accent
                  ? 'border-[#E8611A]/40 bg-white hover:shadow-[#E8611A]/10'
                  : g.mh
                  ? 'border-[#1B3B8A]/30 bg-white hover:shadow-[#1B3B8A]/10'
                  : 'border-[#D1DAFB] bg-white hover:border-[#1B3B8A]/30'
              }`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-4xl font-black ${g.accent ? 'text-[#E8611A]' : 'text-[#1B3B8A]'}`}>{g.nb}</div>
                  {g.mh && (
                    <span className="inline-flex items-center gap-1.5 bg-[#1B3B8A] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 01.894.553l1.618 3.272 3.611.526a1 1 0 01.554 1.706l-2.614 2.548.617 3.598a1 1 0 01-1.45 1.054L10 13.693l-3.23 1.698a1 1 0 01-1.45-1.054l.617-3.598L3.323 8.057a1 1 0 01.554-1.706l3.611-.526L9.106 2.553A1 1 0 0110 2z" clipRule="evenodd" /></svg>
                      MH
                    </span>
                  )}
                  {g.accent && (
                    <div className="flex gap-0.5">
                      {[1,2,3,4].map(i => (
                        <svg key={i} className="w-4 h-4 text-[#E8611A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                  )}
                </div>
                <h3 className="font-black text-[#0D1F5C] text-xl mb-2">{g.categorie}</h3>
                <p className={`text-sm font-semibold mb-5 ${g.accent ? 'text-[#E8611A]' : 'text-[#1B3B8A]'}`}>{g.lieux}</p>
                <div className="border-t border-[#F0F4FF] mb-5" />
                <p className="text-[#5A6B9A] text-sm leading-loose mb-6">{g.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map(t => (
                    <span key={t} className={`text-xs px-3 py-1.5 rounded-full border ${
                      g.accent ? 'text-[#E8611A] border-[#E8611A]/25 bg-[#E8611A]/5' :
                      g.mh ? 'text-[#1B3B8A] border-[#1B3B8A]/25 bg-[#1B3B8A]/5' :
                      'text-[#5A6B9A] border-[#D1DAFB] bg-[#F0F4FF]'
                    }`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres secteurs */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Autres secteurs</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Retail, industrie & tertiaire</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {autres.map((r) => (
              <div key={r.client} className={`bg-white rounded-2xl p-10 border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                r.highlight ? 'border-[#E8611A] shadow-md shadow-[#E8611A]/10' : 'border-[#D1DAFB] hover:border-[#1B3B8A]/40'
              }`}>
                {r.highlight && (
                  <span className="inline-block bg-[#E8611A] text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">Grand chantier</span>
                )}
                <div className="mb-5">
                  <h3 className="font-bold text-[#0D1F5C] text-lg leading-snug">{r.client}</h3>
                  <p className="text-[#1B3B8A] text-sm mt-1 font-medium">{r.secteur}</p>
                </div>
                <div className="border-t border-[#F0F4FF] mb-5" />
                <p className="text-[#5A6B9A] text-sm leading-loose mb-6">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#5A6B9A] border border-[#D1DAFB] bg-[#F0F4FF] px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1F5C] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-[#E8611A]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">Votre projet sera notre prochaine réalisation</h2>
          <p className="text-blue-200 mb-8">Contactez-nous pour discuter de vos besoins GTB/CVC.</p>
          <Link href="/contact" className="bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer inline-block shadow-lg shadow-[#E8611A]/25">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}

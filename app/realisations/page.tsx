import Link from 'next/link';

const hotels = [
  { name: "Hôtel Le Grand Palais", ville: "Paris 8e", stars: 4, desc: "Supervision GTB complète, régulation CVC par suite, gestion éclairage LED dimmable et comptage énergie en temps réel.", tags: ["GTB", "CVC", "LED", "Énergie"] },
  { name: "Hôtel Belvédère", ville: "Lyon", stars: 4, desc: "Déploiement BACnet/Modbus, régulation chaufferie, vannes motorisées et supervision centralisée des 120 chambres.", tags: ["BACnet", "CVC", "Supervision"] },
  { name: "Hôtel Atlantique", ville: "Bordeaux", stars: 4, desc: "Modernisation complète GTB, installation déstratificateurs, gestion aérothermes et optimisation énergétique globale.", tags: ["GTB", "CVC", "Optimisation"] },
  { name: "Hôtel des Alpes", ville: "Annecy", stars: 4, desc: "Système GTB complet avec régulation thermique par zone, comptage énergie et supervision KNX pour 90 chambres.", tags: ["KNX", "GTB", "CVC"] },
  { name: "Hôtel le Provençal", ville: "Marseille", stars: 3, desc: "Installation GTB, câblage et mise en service des équipements CVC. Gestion fil pilote et contacteurs.", tags: ["GTB", "CVC", "Câblage"] },
  { name: "Hôtel Côte d'Azur", ville: "Nice", stars: 3, desc: "Mise en service supervision GTB, régulation chaufferie et gestion des équipements thermiques.", tags: ["GTB", "Chaufferie"] },
  { name: "Hôtel Normandie", ville: "Rouen", stars: 3, desc: "Raccordement compteurs énergie, mise en place supervision Modbus et optimisation consommations.", tags: ["Modbus", "Énergie"] },
  { name: "Hôtel le Tonnelier", ville: "Strasbourg", stars: 3, desc: "Installation capteurs IoT WATTSENS, supervision énergétique et régulation CVC des parties communes.", tags: ["IoT", "CVC", "Énergie"] },
  { name: "Hôtel du Château", ville: "Amboise", stars: 3, desc: "Déploiement GTB sur bâtiment classé, intégration discrète des équipements de supervision thermique.", tags: ["GTB", "CVC"] },
  { name: "Hôtel les Jardins", ville: "Nantes", stars: 3, desc: "Câblage GTB complet, pose vannes thermostatiques et mise en service régulateurs de chaufferie.", tags: ["GTB", "Vannes", "Chaufferie"] },
  { name: "Hôtel le Méridional", ville: "Montpellier", stars: 3, desc: "Supervision centralisée GTB, gestion éclairage LED et comptage énergie sur 75 chambres.", tags: ["GTB", "LED", "Énergie"] },
  { name: "Hôtel Bellevue", ville: "Grenoble", stars: 2, desc: "Modernisation des installations électriques, pose contacteurs et raccordement GTB.", tags: ["GTB", "Électrique"] },
  { name: "Hôtel le Corsaire", ville: "Brest", desc: "Installation GTB, câblage et mise en service des équipements de supervision thermique.", tags: ["GTB", "CVC"], stars: 2 },
  { name: "Hôtel Camargue", ville: "Arles", stars: 2, desc: "Déploiement compteurs énergie communicants et supervision GTB des équipements techniques.", tags: ["GTB", "Énergie"] },
  { name: "Hôtel les Thermes", ville: "Vichy", stars: 3, desc: "Gestion centralisée CVC, régulation thermique spa et piscine, supervision énergétique complète.", tags: ["CVC", "GTB", "Spa"] },
  { name: "Hôtel du Golf", ville: "Deauville", stars: 4, desc: "Installation KNX haut de gamme, gestion automatisée éclairage, CVC par chambre et supervision centralisée.", tags: ["KNX", "4 étoiles", "CVC"] },
];

const autres = [
  {
    client: "Sport 2000",
    secteur: "Retail & Sport",
    desc: "Déploiement GTB et supervision énergétique sur plusieurs enseignes en France.",
    tags: ["GTB", "Retail", "Énergie"],
    highlight: false,
  },
  {
    client: "Intersport",
    secteur: "Retail & Sport",
    desc: "Installation GTB sur plusieurs magasins. Supervision CVC, éclairage LED dimmable et comptage énergie.",
    tags: ["GTB", "Retail", "CVC"],
    highlight: false,
  },
  {
    client: "UTTI de Tourcoing",
    secteur: "Tertiaire — 90 000 m²",
    desc: "Installation GTB sur 90 000 m² — l'un de nos plus grands chantiers tertiaires.",
    tags: ["GTB", "90 000 m²", "Tertiaire"],
    highlight: true,
  },
  {
    client: "E.Leclerc / Carrefour",
    secteur: "Grande Distribution",
    desc: "Déploiement GTB et supervision énergétique sur hypermarchés. Régulation CVC, comptage énergie et gestion équipements frigorifiques.",
    tags: ["GTB", "Grande Distribution", "CVC"],
    highlight: false,
  },
  {
    client: "Entrepôts Logistiques",
    secteur: "Logistique & Industrie",
    desc: "GTB et supervision énergétique sur plusieurs entrepôts. Gestion aérothermes, déstratificateurs et régulation thermique grands volumes.",
    tags: ["GTB", "Logistique", "Aérothermes"],
    highlight: false,
  },
  {
    client: "Studio de cinéma",
    secteur: "Audiovisuel & Culture",
    desc: "Mise en service équipements GTB d'un studio de cinéma professionnel à Le Perray-en-Yvelines.",
    tags: ["GTB", "Culture"],
    highlight: false,
  },
];

const stats = [
  { value: "16+", label: "Hôtels équipés" },
  { value: "4", label: "Hôtels 4 étoiles" },
  { value: "90 000 m²", label: "UTTI Tourcoing" },
  { value: "Toute", label: "la France" },
];

const StarRating = ({ stars }: { stars: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: stars }).map((_, i) => (
      <svg key={i} className={`w-3.5 h-3.5 ${stars === 4 ? 'text-[#E8611A]' : 'text-[#94A3B8]'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Realisations() {
  const hotels4etoiles = hotels.filter(h => h.stars === 4);
  const hotelsAutres = hotels.filter(h => h.stars !== 4);

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

      {/* Section Hôtellerie — 4 étoiles mis en avant */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-12 h-12 bg-[#E8611A]/10 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#E8611A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest block">Secteur prioritaire</span>
              <h2 className="text-3xl font-black text-[#0D1F5C]">Hôtellerie — {hotels.length} établissements</h2>
            </div>
          </div>

          {/* Hôtels 4 étoiles */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4].map(i => <svg key={i} className="w-4 h-4 text-[#E8611A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <h3 className="font-black text-[#0D1F5C] text-lg">Hôtels 4 étoiles</h3>
              <span className="bg-[#E8611A] text-white text-xs font-bold px-3 py-1 rounded-full">{hotels4etoiles.length} établissements</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotels4etoiles.map((h) => (
                <div key={h.name} className="bg-white border-2 border-[#E8611A]/30 rounded-2xl p-8 hover:border-[#E8611A] hover:shadow-lg hover:shadow-[#E8611A]/10 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-start justify-between mb-4">
                    <StarRating stars={h.stars} />
                    <span className="text-xs text-[#5A6B9A] font-medium">{h.ville}</span>
                  </div>
                  <h4 className="font-bold text-[#0D1F5C] text-base mb-3 leading-snug">{h.name}</h4>
                  <p className="text-[#5A6B9A] text-xs leading-relaxed mb-4">{h.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {h.tags.map(t => (
                      <span key={t} className="text-xs text-[#E8611A] border border-[#E8611A]/30 bg-[#E8611A]/5 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Autres hôtels */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3].map(i => <svg key={i} className="w-4 h-4 text-[#94A3B8]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <h3 className="font-black text-[#0D1F5C] text-lg">Hôtels 2 & 3 étoiles</h3>
              <span className="bg-[#1B3B8A]/10 text-[#1B3B8A] text-xs font-bold px-3 py-1 rounded-full">{hotelsAutres.length} établissements</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {hotelsAutres.map((h) => (
                <div key={h.name} className="bg-white border border-[#D1DAFB] rounded-2xl p-7 hover:border-[#1B3B8A]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-start justify-between mb-3">
                    <StarRating stars={h.stars} />
                    <span className="text-xs text-[#5A6B9A]">{h.ville}</span>
                  </div>
                  <h4 className="font-bold text-[#0D1F5C] text-sm mb-2 leading-snug">{h.name}</h4>
                  <p className="text-[#5A6B9A] text-xs leading-relaxed mb-3">{h.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {h.tags.map(t => (
                      <span key={t} className="text-xs text-[#5A6B9A] border border-[#D1DAFB] bg-[#F0F4FF] px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
                  <span className="inline-block bg-[#E8611A] text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                    Grand chantier
                  </span>
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

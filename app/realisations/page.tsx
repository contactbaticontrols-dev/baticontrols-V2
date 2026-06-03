import Link from 'next/link';

const realisations = [
  { client: "Stellantis / Peugeot", secteur: "Industrie Automobile", initiales: "ST", desc: "Installation et mise en service de systèmes GTB sur sites du groupe Stellantis.", tags: ["GTB", "Câblage", "Mise en service"], highlight: false },
  { client: "Porsche", secteur: "Industrie Automobile", initiales: "PO", desc: "Déploiement de solutions GTB pour la gestion technique des installations.", tags: ["GTB", "Protocoles"], highlight: false },
  { client: "Mercedes", secteur: "Industrie Automobile", initiales: "MB", desc: "Câblage et raccordement d'équipements GTB pour les sites Mercedes en France.", tags: ["GTB", "Câblage"], highlight: false },
  { client: "Garage BPM", secteur: "Automobile", initiales: "BPM", desc: "Installation complète d'un système de gestion technique bâtiment.", tags: ["GTB", "Installation"], highlight: false },
  { client: "Sport 2000", secteur: "Retail & Sport", initiales: "S2K", desc: "Déploiement GTB et supervision énergétique sur plusieurs enseignes Sport 2000 en France.", tags: ["GTB", "Retail", "Énergie"], highlight: false },
  { client: "CDC Habitat", secteur: "Immobilier & Copropriétés", initiales: "CDC", desc: "Déploiement GTC pour CDC Habitat et plus de 15 copropriétés en France.", tags: ["GTC", "Supervision"], highlight: false },
  { client: "+30 Collèges & Écoles — IDF", secteur: "Éducation nationale", initiales: "IDF", desc: "Installation GTB dans plus de 30 établissements scolaires en Île-de-France.", tags: ["GTB", "IDF"], highlight: false },
  { client: "1 Mairie", secteur: "Secteur Public", initiales: "M", desc: "Gestion technique du bâtiment pour une collectivité locale.", tags: ["GTB", "Public"], highlight: false },
  { client: "5 Centres des Finances Publiques", secteur: "Secteur Public", initiales: "DGFiP", desc: "Déploiement GTB sur 5 centres des finances publiques.", tags: ["GTB", "Énergie"], highlight: false },
  { client: "UTTI de Tourcoing", secteur: "Tertiaire — 90 000 m²", initiales: "UTTI", desc: "Installation GTB sur 90 000 m² — l'un de nos plus grands chantiers.", tags: ["GTB", "90 000 m²"], highlight: true },
  { client: "Studio de cinéma — Le Perray-en-Yvelines", secteur: "Audiovisuel & Culture", initiales: "SC", desc: "Mise en service des équipements GTB d'un studio de cinéma professionnel.", tags: ["GTB", "Culture"], highlight: false },
  { client: "Région Occitanie", secteur: "Collectivité Territoriale", initiales: "OCC", desc: "Prestation GTB pour les bâtiments de la Région Occitanie.", tags: ["GTB", "Région"], highlight: false },
  { client: "Grand Annecy", secteur: "Collectivité Territoriale", initiales: "GA", desc: "Installation GTB pour la communauté d'agglomération du Grand Annecy.", tags: ["GTB", "Collectivité"], highlight: false },
  { client: "Entrepôts Petit Bateau", secteur: "Logistique & Industrie", initiales: "PB", desc: "Câblage et mise en service GTB des entrepôts logistiques.", tags: ["GTB", "Logistique"], highlight: false },
  { client: "CSTB", secteur: "Recherche & Expertise", initiales: "CSTB", desc: "Déploiement GTC pour le Centre Scientifique et Technique du Bâtiment.", tags: ["GTC", "Recherche"], highlight: false },
];

const stats = [
  { value: "15+", label: "Références majeures" },
  { value: "90 000 m²", label: "UTTI Tourcoing" },
  { value: "30+", label: "Établissements scolaires" },
  { value: "15+", label: "Copropriétés GTC" },
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
          <p className="text-[#5A6B9A] text-lg max-w-2xl">Industrie automobile, secteur public, éducation — partout en France.</p>
        </div>
      </section>

      {/* Stats band */}
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

      {/* Cards */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {realisations.map((r) => (
              <div key={r.client} className={`bg-white rounded-2xl p-10 border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                r.highlight ? 'border-[#E8611A] shadow-md shadow-[#E8611A]/10' : 'border-[#D1DAFB] hover:border-[#1B3B8A]/40'
              }`}>
                {r.highlight && (
                  <span className="inline-block bg-[#E8611A] text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                    Grand chantier
                  </span>
                )}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 bg-[#0D1F5C] rounded-2xl flex items-center justify-center border border-[#D1DAFB] shrink-0">
                    <span className="text-white font-black text-xs tracking-wider">{r.initiales}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0D1F5C] text-base leading-snug">{r.client}</h3>
                    <p className="text-[#1B3B8A] text-sm mt-1">{r.secteur}</p>
                  </div>
                </div>
                <div className="border-t border-[#F0F4FF] mb-6" />
                <p className="text-[#5A6B9A] text-sm leading-loose mb-7">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#5A6B9A] border border-[#D1DAFB] bg-[#F0F4FF] px-4 py-2 rounded-full">{tag}</span>
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
          <p className="text-blue-200 mb-8">Contactez-nous pour discuter de vos besoins GTB.</p>
          <Link href="/contact" className="bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer inline-block shadow-lg shadow-[#E8611A]/25">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}

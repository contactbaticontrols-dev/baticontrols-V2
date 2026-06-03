import Link from 'next/link';

const realisations = [
  { client: "Stellantis / Peugeot", secteur: "Industrie Automobile", initiales: "ST", desc: "Installation et mise en service de systèmes GTB sur sites du groupe Stellantis.", tags: ["GTB", "Câblage", "Mise en service"], highlight: false },
  { client: "Porsche", secteur: "Industrie Automobile", initiales: "PO", desc: "Déploiement de solutions GTB pour la gestion technique des installations.", tags: ["GTB", "Protocoles"], highlight: false },
  { client: "Mercedes", secteur: "Industrie Automobile", initiales: "MB", desc: "Câblage et raccordement d'équipements GTB pour les sites Mercedes en France.", tags: ["GTB", "Câblage"], highlight: false },
  { client: "Garage BPM", secteur: "Automobile", initiales: "BPM", desc: "Installation complète d'un système de gestion technique bâtiment.", tags: ["GTB", "Installation"], highlight: false },
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
  { value: "14+", label: "Références majeures" },
  { value: "90 000 m²", label: "UTTI Tourcoing" },
  { value: "30+", label: "Établissements scolaires" },
  { value: "15+", label: "Copropriétés GTC" },
];

export default function Realisations() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00897B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] mt-2 mb-4">Nos réalisations</h1>
          <p className="text-[#64748B] text-lg max-w-2xl">Industrie automobile, secteur public, éducation — partout en France.</p>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-[#00897B] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {realisations.map((r) => (
              <div key={r.client} className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                r.highlight ? 'border-[#00897B] shadow-md shadow-[#00897B]/10' : 'border-[#E2E8F0] hover:border-[#00897B]/40'
              }`}>
                {r.highlight && (
                  <span className="inline-block bg-[#00897B] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    Grand chantier
                  </span>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center border border-[#E2E8F0] shrink-0">
                    <span className="text-[#00897B] font-black text-xs tracking-wider">{r.initiales}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm leading-snug">{r.client}</h3>
                    <p className="text-[#00897B] text-xs mt-0.5">{r.secteur}</p>
                  </div>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#64748B] border border-[#E2E8F0] bg-[#F8FAFB] px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-[#00897B]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">Votre projet sera notre prochaine réalisation</h2>
          <p className="text-[#94A3B8] mb-8">Contactez-nous pour discuter de vos besoins GTB.</p>
          <Link href="/contact" className="bg-[#00897B] hover:bg-[#00695C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer inline-block">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}

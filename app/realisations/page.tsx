import Link from 'next/link';

const realisations = [
  {
    client: "Hôtel 4 étoiles",
    secteur: "Hôtellerie",
    desc: "Déploiement complet d'une solution GTB/CVC pour un hôtel 4 étoiles : supervision centralisée, régulation thermique par chambre, gestion de l'éclairage LED dimmable et optimisation énergétique globale.",
    tags: ["GTB", "CVC", "Hôtellerie", "Énergie"],
    highlight: true,
  },
  {
    client: "Sport 2000",
    secteur: "Retail & Sport",
    desc: "Déploiement GTB et supervision énergétique sur plusieurs enseignes Sport 2000 en France.",
    tags: ["GTB", "Retail", "Énergie"],
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
    client: "Studio de cinéma — Le Perray-en-Yvelines",
    secteur: "Audiovisuel & Culture",
    desc: "Mise en service des équipements GTB d'un studio de cinéma professionnel.",
    tags: ["GTB", "Culture"],
    highlight: false,
  },
  {
    client: "Entrepôts Petit Bateau",
    secteur: "Logistique & Industrie",
    desc: "Câblage et mise en service GTB des entrepôts logistiques.",
    tags: ["GTB", "Logistique"],
    highlight: false,
  },
];

const stats = [
  { value: "15+", label: "Références majeures" },
  { value: "90 000 m²", label: "UTTI Tourcoing" },
  { value: "8", label: "Experts GTB/CVC" },
  { value: "Toute", label: "la France" },
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
          <p className="text-[#5A6B9A] text-lg max-w-2xl">Hôtellerie, retail, tertiaire, industrie — partout en France.</p>
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
                    Référence majeure
                  </span>
                )}
                <div className="mb-5">
                  <h3 className="font-bold text-[#0D1F5C] text-lg leading-snug">{r.client}</h3>
                  <p className="text-[#1B3B8A] text-sm mt-1 font-medium">{r.secteur}</p>
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
          <p className="text-blue-200 mb-8">Contactez-nous pour discuter de vos besoins GTB/CVC.</p>
          <Link href="/contact" className="bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer inline-block shadow-lg shadow-[#E8611A]/25">
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}

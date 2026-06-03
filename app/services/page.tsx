import Link from 'next/link';

const mainServices = [
  {
    number: "01",
    title: "Comptage Énergie Électrique & Raccordement",
    desc: "Mesure, supervision et raccordement des installations électriques pour une performance énergétique maîtrisée.",
    details: ["Installation de compteurs d'énergie communicants", "Raccordement aux systèmes de supervision GTB", "Configuration des protocoles de communication", "Tests et validation des mesures"],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
  },
  {
    number: "02",
    title: "Régulation Chaufferie, Vannes Motorisées & Sondes",
    desc: "Gestion et optimisation des installations thermiques. Pose, câblage et mise en service de vannes motorisées et sondes de température.",
    details: ["Installation de vannes motorisées (2 et 3 voies)", "Pose et câblage de sondes de température", "Configuration des régulateurs de chaufferie", "Optimisation des courbes de chauffe"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    number: "03",
    title: "Pilotage Électrique — Contacteurs, Radiateurs & Fil Pilote",
    desc: "Pilotage intelligent des équipements électriques pour un confort optimal et des économies d'énergie.",
    details: ["Installation et câblage de contacteurs", "Raccordement de radiateurs électriques", "Mise en service d'aérothermes", "Gestion fil pilote 6 ordres"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
];

const protocols = [
  { name: "KNX", desc: "Standard européen pour la GTB" },
  { name: "BACnet", desc: "Protocole open-source bâtiments intelligents" },
  { name: "Modbus", desc: "Protocole industriel robuste" },
  { name: "Zigbee", desc: "Communication sans fil basse consommation" },
  { name: "LoRa", desc: "Longue portée pour objets connectés" },
  { name: "LOXONE", desc: "Solution complète gestion bâtiment" },
  { name: "Node-RED", desc: "Orchestration de flux et automatisation" },
  { name: "WATTSENS", desc: "Capteurs IoT supervision énergétique" },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00897B]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00897B]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Nos prestations</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] mt-2 mb-4">Services GTB complets</h1>
          <p className="text-[#64748B] text-lg max-w-2xl">De l'étude à la mise en service, nous vous accompagnons sur l'ensemble de vos projets GTB.</p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, i) => (
              <div key={service.number} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-[#00897B]/15 text-9xl font-black leading-none block mb-2 select-none">{service.number}</span>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4">{service.title}</h3>
                  <p className="text-[#64748B] leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-[#475569]">
                        <svg className="w-4 h-4 text-[#00897B] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden h-72 lg:h-80 border border-[#E2E8F0] shadow-sm ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocoles */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Technologie</span>
            <h2 className="text-3xl font-black text-[#0F172A] mt-2">Protocoles maîtrisés</h2>
            <p className="text-[#64748B] mt-3 max-w-xl mx-auto">
              Nous intervenons sur tous les protocoles GTB du marché, garantissant la compatibilité avec votre infrastructure existante.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {protocols.map((p) => (
              <div key={p.name} className="bg-white border border-[#E2E8F0] hover:border-[#00897B]/50 rounded-xl p-8 transition-all duration-300 hover:shadow-md">
                <p className="font-black text-[#0F172A] text-lg mb-3">{p.name}</p>
                <p className="text-[#64748B] text-sm leading-loose">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00897B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-bg" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">Votre projet nous intéresse</h2>
          <p className="text-white/80 mb-8">Contactez-nous pour étudier votre besoin GTB.</p>
          <Link href="/contact" className="bg-white text-[#00897B] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

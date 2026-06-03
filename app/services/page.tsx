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
      <section className="bg-[#0A1120] pt-36 pb-20 relative overflow-hidden grid-bg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00897B]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Nos prestations</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">Services GTB complets</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">De l'étude à la mise en service, nous vous accompagnons sur l'ensemble de vos projets GTB.</p>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, i) => (
              <div key={service.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-[#00897B]/20 text-9xl font-black leading-none block mb-2">{service.number}</span>
                  <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                        <svg className="w-4 h-4 text-[#00897B] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden h-72 lg:h-80 border border-[#334155] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Technologie</span>
            <h2 className="text-3xl font-black text-white mt-2">Protocoles maîtrisés</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {protocols.map((p) => (
              <div key={p.name} className="bg-[#1E293B] border border-[#334155] hover:border-[#00897B] rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#00897B]/10">
                <p className="font-black text-white text-lg mb-1">{p.name}</p>
                <p className="text-[#94A3B8] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#00897B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-bg" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">Votre projet nous intéresse</h2>
          <p className="text-white/80 mb-8">Contactez-nous pour étudier votre besoin GTB.</p>
          <Link href="/contact" className="bg-white text-[#00897B] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

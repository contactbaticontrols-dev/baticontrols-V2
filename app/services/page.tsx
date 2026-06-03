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
    title: "Régulation CVC — Chaufferie, Ventilation, Climatisation",
    desc: "Gestion complète des installations thermiques. Vannes motorisées, sondes, aérothermes, déstratificateurs et régulation de chaufferie.",
    details: ["Installation de vannes motorisées (2 et 3 voies)", "Pose de sondes de température et capteurs", "Gestion des aérothermes et déstratificateurs", "Optimisation énergétique et courbes de chauffe"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    number: "03",
    title: "Pilotage Électrique & Éclairage",
    desc: "Pilotage intelligent des équipements électriques. Contacteurs, radiateurs, éclairage LED dimmable et fil pilote 6 ordres.",
    details: ["Installation et câblage de contacteurs", "Raccordement de radiateurs électriques", "Pose d'éclairage LED dimmable", "Gestion fil pilote 6 ordres"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
];

const expertises = [
  { title: "Gestion des aérothermes", desc: "Installation, câblage et mise en service des aérothermes industriels et tertiaires." },
  { title: "Vannes thermostatiques", desc: "Pose et paramétrage de vannes thermostatiques pour une régulation fine de chaque zone." },
  { title: "Déstratificateurs", desc: "Installation de déstratificateurs pour homogénéiser la température dans les grands volumes." },
  { title: "Éclairage LED dimmable", desc: "Modernisation des installations avec gradation intelligente et économies d'énergie." },
  { title: "Optimisation énergétique", desc: "Analyse des consommations et mise en place de stratégies d'optimisation adaptées." },
  { title: "Modernisation GTB", desc: "Mise à niveau des installations GTB existantes vers des solutions communicantes modernes." },
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

const technologies = [
  { name: "CoolAutomation", desc: "Passerelles HVAC vers BACnet/Modbus" },
  { name: "Intesis", desc: "Interfaces protocoles CVC" },
  { name: "Passman", desc: "Gestion de passage et contrôle d'accès" },
  { name: "NodOn", desc: "Modules sans fil pour GTB" },
];

const fabricants = [
  { name: "Witte", desc: "Armoires et coffrets électriques" },
  { name: "Swegon", desc: "Ventilation et CVC" },
  { name: "Regin", desc: "Régulateurs et automatismes" },
  { name: "Lennox", desc: "Climatisation et pompes à chaleur" },
  { name: "Clivet", desc: "Solutions CVC tertiaire" },
  { name: "Daikin", desc: "Climatisation et VRV" },
  { name: "Mitsubishi Electric", desc: "Systèmes CVC et VRF" },
  { name: "Thermozyklus", desc: "Régulation thermique spécialisée" },
];

export default function Services() {
  return (
    <>
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#D1DAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Nos prestations</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F5C] mt-2 mb-4">Services GTB & CVC complets</h1>
          <p className="text-[#5A6B9A] text-lg max-w-2xl">De l'étude à la mise en service, nous vous accompagnons sur l'ensemble de vos projets GTB et CVC.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, i) => (
              <div key={service.number} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-[#1B3B8A]/15 text-9xl font-black leading-none block mb-2 select-none">{service.number}</span>
                  <h3 className="text-2xl font-black text-[#0D1F5C] mb-4">{service.title}</h3>
                  <p className="text-[#5A6B9A] leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-[#5A6B9A]">
                        <svg className="w-4 h-4 text-[#E8611A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden h-72 lg:h-80 border border-[#D1DAFB] shadow-sm ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Expertise CVC</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Compétences techniques spécialisées</h2>
            <p className="text-[#5A6B9A] mt-3 max-w-xl mx-auto">Installation, modernisation et optimisation de toutes vos installations CVC.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((e) => (
              <div key={e.title} className="bg-white border border-[#D1DAFB] hover:border-[#1B3B8A]/50 rounded-xl p-8 transition-all duration-300 hover:shadow-md">
                <div className="w-10 h-10 bg-[#E8611A]/10 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[#E8611A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-bold text-[#0D1F5C] mb-3">{e.title}</h4>
                <p className="text-[#5A6B9A] text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Protocoles GTB</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Protocoles de communication maîtrisés</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {protocols.map((p) => (
              <div key={p.name} className="bg-white border border-[#D1DAFB] hover:border-[#1B3B8A]/50 rounded-xl p-8 transition-all duration-300 hover:shadow-md">
                <p className="font-black text-[#0D1F5C] text-lg mb-3">{p.name}</p>
                <p className="text-[#5A6B9A] text-sm leading-loose">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Écosystème</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Technologies & Partenaires</h2>
            <p className="text-[#5A6B9A] mt-3 max-w-2xl mx-auto">Nous distinguons clairement les solutions logicielles/d'intégration des fabricants d'équipements matériels.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white border-2 border-[#1B3B8A]/20 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#1B3B8A] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
                </div>
                <div>
                  <h3 className="font-black text-[#0D1F5C] text-xl">Technologies & Solutions</h3>
                  <p className="text-[#5A6B9A] text-sm">Logiciels, passerelles et solutions d'intégration</p>
                </div>
              </div>
              <div className="space-y-4">
                {technologies.map((t) => (
                  <div key={t.name} className="flex items-start gap-4 p-5 rounded-xl bg-[#F0F4FF] hover:bg-[#E8EEFF] transition-colors">
                    <div className="w-8 h-8 bg-[#1B3B8A] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#0D1F5C]">{t.name}</p>
                      <p className="text-[#5A6B9A] text-sm mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-[#E8611A]/20 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#E8611A] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <h3 className="font-black text-[#0D1F5C] text-xl">Fabricants & Constructeurs</h3>
                  <p className="text-[#5A6B9A] text-sm">Équipements matériels CVC et GTB</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {fabricants.map((f) => (
                  <div key={f.name} className="p-5 rounded-xl bg-[#F0F4FF] hover:bg-[#E8EEFF] transition-colors">
                    <p className="font-bold text-[#0D1F5C]">{f.name}</p>
                    <p className="text-[#5A6B9A] text-xs mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0D1F5C] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">Votre projet GTB/CVC nous intéresse</h2>
          <p className="text-blue-200 mb-8">Contactez-nous pour étudier votre besoin.</p>
          <Link href="/contact" className="bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer inline-block shadow-lg shadow-[#E8611A]/30">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

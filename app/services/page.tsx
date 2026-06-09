import Link from 'next/link';

const mainServices = [
  {
    number: "01",
    title: "Comptage Énergie Électrique & Raccordement",
    desc: "Mesure, supervision et raccordement des installations électriques pour une performance énergétique maîtrisée.",
    details: [
      "Installation de compteurs d'énergie communicants",
      "Raccordement aux systèmes de supervision GTB",
      "Configuration des protocoles de communication",
      "Tests et validation des mesures",
    ],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
  },
  {
    number: "02",
    title: "Régulation CVC — Chaufferie, Ventilation, Climatisation",
    desc: "Gestion complète des installations thermiques. Vannes motorisées, sondes, aérothermes, déstratificateurs et régulation de chaufferie.",
    details: [
      "Installation de vannes motorisées (2 et 3 voies)",
      "Pose de sondes de température et capteurs",
      "Gestion des aérothermes gaz : fil pilote, contact sec ou humide",
      "Pilotage des CTA via solutions communicantes (BACnet, Modbus, KNX)",
      "Pilotage de PAC air/eau et géothermiques",
      "Optimisation énergétique et courbes de chauffe",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    number: "03",
    title: "Pilotage Électrique & Éclairage",
    desc: "Pilotage intelligent des équipements électriques. Contacteurs, radiateurs, éclairage LED dimmable et fil pilote 6 ordres.",
    details: [
      "Installation et câblage de contacteurs",
      "Raccordement de radiateurs électriques",
      "Pose d'éclairage LED dimmable",
      "Gestion fil pilote 6 ordres",
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
  {
    number: "04",
    title: "Réalisation de Schémas de Câblage",
    desc: "Conception et production de schémas de câblage techniques pour vos installations GTB, CVC et électriques. Une documentation précise et à jour pour chaque intervention.",
    details: [
      "Schémas de câblage GTB et automatismes",
      "Plans de raccordement CVC (aérothermes, CTA, PAC, vannes)",
      "Schémas d'armoires électriques et coffrets de régulation",
      "Documentation technique remise après chaque mise en service",
      "Mise à jour et révision des plans existants",
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
];

const cvcDetails = [
  {
    icon: "flame",
    title: "Aérotherme GAZ",
    desc: "Pilotage et câblage complet des aérothermes gaz industriels et tertiaires via :",
    items: [
      "Fil pilote (1 à 6 ordres)",
      "Contact sec (sortie relais automate)",
      "Contact humide (24V ou 230V)",
      "Intégration GTB pour supervision centralisée",
    ],
  },
  {
    icon: "wind",
    title: "Pilotage de CTA",
    desc: "Mise en service et intégration des Centrales de Traitement d'Air via solutions communicantes :",
    items: [
      "Protocoles BACnet IP / MS-TP",
      "Modbus RTU / TCP",
      "Passerelles Intesis, CoolAutomation",
      "Gestion des modes : confort, réduit, hors-gel",
      "Supervision des alarmes et états",
    ],
  },
  {
    icon: "heat-pump",
    title: "Pilotage de PAC",
    desc: "Intégration et pilotage des Pompes à Chaleur air/eau, eau/eau et géothermiques :",
    items: [
      "Raccordement via Modbus ou BACnet",
      "Interfaçage constructeur (Clivet, Daikin, Swegon…)",
      "Gestion des courbes de chauffe et modes saison",
      "Supervision énergétique des COP",
    ],
  },
];

const automates = [
  {
    name: "Siemens RMH/U + OZW",
    desc: "Régulateurs de chaufferie Synco (RMH760…) et serveur web OZW pour supervision et GTB Siemens.",
    tag: "Automate",
  },
  {
    name: "Loxone",
    desc: "Solution complète de gestion du bâtiment : scénarios, GTB, éclairage et CVC en un seul environnement.",
    tag: "Automate",
  },
  {
    name: "Thermozyklus ZE",
    desc: "Régulation spécialisée ST/SF (solaire thermique / solaire photovoltaïque). Environnement AKYTECK.",
    tag: "Automate",
  },
  {
    name: "WITT",
    desc: "Automate de régulation pour installations thermiques et CVC : chauffage, ventilation et traitement d'air.",
    tag: "Automate",
  },
];

const passerelles = [
  {
    name: "CoolAutomation",
    desc: "CoolMaster (unité centrale) et CoolPlug (module enfichable VRV/VRF) — passerelles HVAC vers BACnet et Modbus.",
    tag: "Passerelle",
  },
  {
    name: "Intesis",
    desc: "Interfaces protocolaires CVC : connexion de tout équipement (split, VRF, CTA) vers KNX, BACnet, Modbus ou DALI.",
    tag: "Passerelle",
  },
  {
    name: "WATTSENS",
    desc: "Gateway IoT pour comptage et supervision énergétique : agrégation des données terrain vers les plateformes cloud et GTB.",
    tag: "Passerelle",
  },
];

const capteurs = [
  {
    name: "Milesight",
    desc: "Capteurs IoT LoRaWAN et NB-IoT : température, humidité, CO₂, présence — déploiement longue portée.",
    tag: "Capteur IoT",
  },
  {
    name: "NKE",
    desc: "Modules et capteurs LoRaWAN pour mesures terrain : température, pression, état d'entrées TOR.",
    tag: "Capteur IoT",
  },
  {
    name: "Ecoadapt",
    desc: "Solutions IoT de monitoring énergétique et environnemental, intégration cloud et plateformes de supervision.",
    tag: "Capteur IoT",
  },
  {
    name: "NodOn",
    desc: "Fabricant de modules IoT sans fil (ZWave, Zigbee, EnOcean) pour automatisation GTB et pilotage d'équipements.",
    tag: "Capteur IoT",
  },
];

const constructeursCVC = [
  { name: "Clivet", desc: "Unités de climatisation, PAC et groupes d'eau glacée pour le tertiaire." },
  { name: "Swegon", desc: "CTA, ventilo-convecteurs et solutions de ventilation haute efficacité." },
  { name: "Daikin", desc: "Climatisation, systèmes VRV et pompes à chaleur — leader mondial." },
  { name: "Mitsubishi Electric", desc: "Systèmes CVC et VRF, splits et PAC tertiaire et résidentiel." },
  { name: "Carrier", desc: "Climatisation, groupes d'eau glacée et solutions CVC grandes installations." },
  { name: "Trane", desc: "Systèmes CVC industriels et tertiaires, chillers et CTA." },
  { name: "Atlantic", desc: "Pompes à chaleur, chauffe-eau thermodynamiques et radiateurs électriques." },
  { name: "Viessmann", desc: "Chaudières gaz, PAC et solutions de chauffage centralisé." },
  { name: "De Dietrich", desc: "Chaudières, PAC et solutions de chauffage pour le tertiaire et le collectif." },
  { name: "Hitachi", desc: "Systèmes VRF et climatisation tertiaire haute performance." },
  { name: "LG", desc: "Systèmes multi-split et VRF pour le résidentiel et le tertiaire." },
  { name: "Regin", desc: "Régulateurs et automatismes CVC pour GTB." },
];

const protocols = [
  { name: "KNX", desc: "Standard européen pour la GTB" },
  { name: "BACnet", desc: "Protocole open-source bâtiments intelligents" },
  { name: "Modbus", desc: "Protocole industriel robuste" },
  { name: "Zigbee", desc: "Communication sans fil basse consommation" },
  { name: "LoRa", desc: "Longue portée pour objets connectés" },
  { name: "Node-RED", desc: "Orchestration de flux et automatisation" },
  { name: "M-Bus", desc: "Comptage d'énergie et fluides" },
];

const tagColor: Record<string, string> = {
  Automate: "bg-[#1B3B8A]/10 text-[#1B3B8A]",
  Passerelle: "bg-[#E8611A]/10 text-[#E8611A]",
  "Capteur IoT": "bg-emerald-50 text-emerald-700",
};

function CvcIcon({ type }: { type: string }) {
  if (type === "flame")
    return (
      <svg className="w-6 h-6 text-[#E8611A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    );
  if (type === "wind")
    return (
      <svg className="w-6 h-6 text-[#1B3B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
      </svg>
    );
  return (
    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#D1DAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Nos prestations</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F5C] mt-2 mb-4">Services GTB & CVC complets</h1>
          <p className="text-[#5A6B9A] text-lg max-w-2xl">
            De l'étude à la mise en service, nous vous accompagnons sur l'ensemble de vos projets GTB et CVC.
          </p>
        </div>
      </section>

      {/* Services principaux */}
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

      {/* Section CVC détaillée */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">CVC — Détail technique</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Expertise Chauffage, Ventilation & Climatisation</h2>
            <p className="text-[#5A6B9A] mt-3 max-w-2xl mx-auto">
              Maîtrise complète du pilotage des équipements thermiques : de l'aérotherme gaz à la CTA communicante, en passant par les pompes à chaleur.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cvcDetails.map((item) => (
              <div key={item.title} className="bg-white border border-[#D1DAFB] hover:border-[#1B3B8A]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-[#F0F4FF] rounded-xl flex items-center justify-center mb-5">
                  <CvcIcon type={item.icon} />
                </div>
                <h4 className="font-black text-[#0D1F5C] text-lg mb-2">{item.title}</h4>
                <p className="text-[#5A6B9A] text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[#5A6B9A]">
                      <svg className="w-3.5 h-3.5 text-[#E8611A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions maîtrisées — 3 catégories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Solutions maîtrisées</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Automates, passerelles et capteurs</h2>
            <p className="text-[#5A6B9A] mt-3 max-w-2xl mx-auto">
              Nous intervenons sur trois familles de produits complémentaires pour couvrir l'ensemble de votre installation GTB/CVC.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Automates */}
            <div className="bg-white border-2 border-[#1B3B8A]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B3B8A] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-[#0D1F5C] text-lg">Automates & Régulateurs</h3>
                  <p className="text-[#5A6B9A] text-xs">Cerveaux de l'installation</p>
                </div>
              </div>
              <div className="space-y-4">
                {automates.map((a) => (
                  <div key={a.name} className="p-4 rounded-xl bg-[#F0F4FF] hover:bg-[#E8EEFF] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-[#0D1F5C] text-sm">{a.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${tagColor[a.tag]}`}>{a.tag}</span>
                    </div>
                    <p className="text-[#5A6B9A] text-xs leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Passerelles */}
            <div className="bg-white border-2 border-[#E8611A]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#E8611A] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-[#0D1F5C] text-lg">Passerelles & Interfaces</h3>
                  <p className="text-[#5A6B9A] text-xs">Conversion de protocoles</p>
                </div>
              </div>
              <div className="space-y-4">
                {passerelles.map((p) => (
                  <div key={p.name} className="p-4 rounded-xl bg-[#FFF4EE] hover:bg-[#FFE8D6] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-[#0D1F5C] text-sm">{p.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${tagColor[p.tag]}`}>{p.tag}</span>
                    </div>
                    <p className="text-[#5A6B9A] text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capteurs IoT */}
            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-[#0D1F5C] text-lg">Capteurs & IoT</h3>
                  <p className="text-[#5A6B9A] text-xs">Mesures et remontées terrain</p>
                </div>
              </div>
              <div className="space-y-4">
                {capteurs.map((c) => (
                  <div key={c.name} className="p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/60 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-[#0D1F5C] text-sm">{c.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${tagColor[c.tag]}`}>{c.tag}</span>
                    </div>
                    <p className="text-[#5A6B9A] text-xs leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constructeurs CVC rencontrés */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Constructeurs CVC</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Fabricants rencontrés sur le terrain</h2>
            <p className="text-[#5A6B9A] mt-3 max-w-2xl mx-auto">
              Nous avons travaillé directement sur des équipements de ces constructeurs : mise en service, intégration GTB et maintenance.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {constructeursCVC.map((f) => (
              <div key={f.name} className="bg-white border border-[#D1DAFB] hover:border-[#1B3B8A]/50 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                <p className="font-black text-[#0D1F5C] text-base mb-2">{f.name}</p>
                <p className="text-[#5A6B9A] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-3 bg-[#1B3B8A]/5 border border-[#D1DAFB] rounded-xl p-5 flex items-center gap-3">
              <svg className="w-5 h-5 text-[#E8611A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[#5A6B9A] text-sm">Et bien plus encore — nous intervenons régulièrement sur d'autres marques selon les spécificités de chaque chantier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Protocoles GTB */}
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

      {/* Relamping & Déstratificateurs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Compétences complémentaires</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Éclairage & Confort thermique</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F0F4FF] border border-[#D1DAFB] hover:border-[#1B3B8A]/40 rounded-2xl p-10 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#1B3B8A] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M6 20l2-2m8 2l-2-2M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <h3 className="font-black text-[#0D1F5C] text-xl mb-3">Relamping</h3>
              <p className="text-[#5A6B9A] leading-relaxed mb-5">
                Remplacement et modernisation des installations d'éclairage existantes vers des solutions LED performantes et économes en énergie.
              </p>
              <ul className="space-y-2">
                {[
                  "Remplacement de luminaires existants par des LED",
                  "Câblage et raccordement des nouveaux équipements",
                  "Intégration GTB pour gradation et supervision",
                  "Éclairage dimmable avec gestion de scénarios",
                  "Réduction significative de la consommation énergétique",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5A6B9A]">
                    <svg className="w-4 h-4 text-[#E8611A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F0F4FF] border border-[#D1DAFB] hover:border-[#1B3B8A]/40 rounded-2xl p-10 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-[#E8611A] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 className="font-black text-[#0D1F5C] text-xl mb-3">Installation de Déstratificateurs</h3>
              <p className="text-[#5A6B9A] leading-relaxed mb-5">
                Pose et mise en service de déstratificateurs pour homogénéiser la température dans les grands volumes : entrepôts, halls industriels, gymnases.
              </p>
              <ul className="space-y-2">
                {[
                  "Étude de la stratification thermique du local",
                  "Pose et câblage des déstratificateurs",
                  "Raccordement électrique et mise en service",
                  "Intégration GTB pour pilotage centralisé",
                  "Économies de chauffage sur les grandes hauteurs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5A6B9A]">
                    <svg className="w-4 h-4 text-[#E8611A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const protocols = ["KNX", "BACnet", "Modbus", "Zigbee", "LoRa", "LOXONE", "Node-RED", "WATTSENS"];

const services = [
  { title: "Comptage Énergie", desc: "Mesure, supervision et raccordement des installations pour une performance énergétique maîtrisée.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { title: "Régulation Chaufferie", desc: "Vannes motorisées, sondes de température, optimisation thermique des bâtiments.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
  { title: "Pilotage Électrique", desc: "Contacteurs, radiateurs, aérothermes et fil pilote pour un confort optimal.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg> },
  { title: "Mise en service", desc: "Tests de protocoles et mise en service sur site, partout en France.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: "Dépannage & SAV", desc: "Intervention rapide pour tout dépannage et maintenance sur site.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg> },
  { title: "Câblage GTB", desc: "Câblage et raccordement de tous équipements GTB selon les normes en vigueur.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
];

const clients = [
  { initiales: "ST", name: "Stellantis / Peugeot" },
  { initiales: "PO", name: "Porsche" },
  { initiales: "MB", name: "Mercedes" },
  { initiales: "CDC", name: "CDC Habitat" },
  { initiales: "OCC", name: "Région Occitanie" },
  { initiales: "GA", name: "Grand Annecy" },
  { initiales: "CSTB", name: "CSTB" },
  { initiales: "PB", name: "Petit Bateau" },
];

function StatsSection() {
  const { ref, inView } = useInView();
  const experts = useCounter(8, 1500, inView);
  const colleges = useCounter(30, 2000, inView);
  const surface = useCounter(90, 2000, inView);
  const refs = useCounter(14, 1800, inView);

  return (
    <section ref={ref} className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: experts, suffix: "", label: "Experts GTB" },
            { value: colleges, suffix: "+", label: "Établissements scolaires" },
            { value: surface, suffix: "k m²", label: "UTTI Tourcoing" },
            { value: refs, suffix: "+", label: "Références majeures" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-1">
                {stat.value}<span className="text-[#00897B]">{stat.suffix}</span>
              </p>
              <p className="text-[#94A3B8] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { ref: servicesRef, inView: servicesInView } = useInView();
  const { ref: clientsRef, inView: clientsInView } = useInView();

  return (
    <>
      {/* HERO — fond blanc avec accent émeraude */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Grille subtile */}
        <div className="absolute inset-0 grid-bg opacity-60" />
        {/* Gradient doux en arrière-plan */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00897B]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00897B]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00897B]/8 border border-[#00897B]/20 rounded-full px-5 py-2 mb-10 animate-fade-in">
              <span className="w-2 h-2 bg-[#00897B] rounded-full animate-pulse"></span>
              <span className="text-[#00897B] text-sm font-semibold">Spécialiste GTB — Toute la France</span>
            </div>

            {/* Titre */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 animate-fade-in-up">
              <span className="text-[#0F172A]">L'intelligence</span>
              <br />
              <span className="gradient-text">au service</span>
              <br />
              <span className="text-[#0F172A]">de vos bâtiments</span>
            </h1>

            <p className="text-[#64748B] text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
              Électricien installateur & prestataire spécialisé GTB. Câblage, installation, mise en service et dépannage — <strong className="text-[#0F172A]">8 experts techniques</strong> partout en France.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
              <Link href="/contact" className="bg-[#00897B] hover:bg-[#00695C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer glow-emerald hover:scale-105">
                Demander un devis gratuit
              </Link>
              <Link href="/realisations" className="bg-white hover:bg-[#F8FAFB] border border-[#E2E8F0] hover:border-[#00897B]/40 text-[#0F172A] font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer shadow-sm">
                Voir nos réalisations
              </Link>
            </div>

            {/* Protocoles */}
            <div className="animate-fade-in delay-500">
              <p className="text-[#94A3B8] text-xs uppercase tracking-widest mb-4">Protocoles maîtrisés</p>
              <div className="flex flex-wrap justify-center gap-2">
                {protocols.map((p) => (
                  <span key={p} className="bg-[#F8FAFB] border border-[#E2E8F0] text-[#475569] text-xs font-semibold px-4 py-2 rounded-lg hover:border-[#00897B]/40 hover:text-[#00897B] transition-all duration-200 cursor-default">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-[#CBD5E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* STATS — fond sombre pour le contraste */}
      <StatsSection />

      {/* SERVICES */}
      <section className="py-28 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Nos prestations</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] mt-3 mb-4">Ce que nous faisons</h2>
            <p className="text-[#64748B] max-w-xl mx-auto text-lg">Du câblage à la mise en service, nous intervenons sur tous vos équipements GTB.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`group bg-white border border-[#E2E8F0] hover:border-[#00897B]/40 rounded-2xl p-12 transition-all duration-300 hover:shadow-xl hover:shadow-[#00897B]/8 hover:-translate-y-1 cursor-default ${
                  servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 bg-[#00897B]/8 group-hover:bg-[#00897B]/15 rounded-xl flex items-center justify-center text-[#00897B] mb-8 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[#0F172A] text-lg mb-5">{service.title}</h3>
                <p className="text-[#64748B] text-sm leading-loose">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#00897B] font-semibold hover:gap-3 transition-all text-sm">
              Voir tous nos services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-28 bg-[#F8FAFB]" ref={clientsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${clientsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Références</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] mt-3">Ils nous font confiance</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <div
                key={client.name}
                className={`bg-white border border-[#E2E8F0] hover:border-[#00897B]/30 rounded-2xl p-10 flex flex-col items-center gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#00897B]/8 ${
                  clientsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-16 h-16 bg-[#0F172A] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-black text-xs tracking-wider">{client.initiales}</span>
                </div>
                <p className="text-[#64748B] text-xs font-medium text-center leading-relaxed">{client.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/realisations" className="inline-flex items-center gap-2 text-[#00897B] font-semibold hover:gap-3 transition-all text-sm">
              Voir toutes nos réalisations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-[#00897B]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Un projet GTB ?<br />
            <span className="text-[#00897B]">Parlons-en.</span>
          </h2>
          <p className="text-[#94A3B8] text-lg mb-12 max-w-xl mx-auto">
            Notre équipe d'experts intervient partout en France. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#00897B] hover:bg-[#00695C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer glow-emerald hover:scale-105">
              Demander un devis
            </Link>
            <a href="tel:0615084962" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer">
              06 15 08 49 62
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

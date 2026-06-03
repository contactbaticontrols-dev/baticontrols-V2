'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Counter animation hook
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

// Intersection observer hook
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
  {
    title: "Comptage Énergie",
    desc: "Mesure, supervision et raccordement des installations pour une performance énergétique maîtrisée.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Régulation Chaufferie",
    desc: "Vannes motorisées, sondes de température, optimisation thermique des bâtiments.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Pilotage Électrique",
    desc: "Contacteurs, radiateurs, aérothermes et fil pilote pour un confort optimal.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Mise en service",
    desc: "Tests de protocoles et mise en service sur site, partout en France.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dépannage & SAV",
    desc: "Intervention rapide pour tout dépannage et maintenance sur site.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Câblage GTB",
    desc: "Câblage et raccordement de tous équipements GTB selon les normes en vigueur.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
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
    <section ref={ref} className="py-20 border-y border-[#1E293B] bg-[#0A1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: experts, suffix: "", label: "Experts GTB" },
            { value: colleges, suffix: "+", label: "Établissements scolaires" },
            { value: surface, suffix: "k m²", label: "UTTI Tourcoing" },
            { value: refs, suffix: "+", label: "Références majeures" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-4xl md:text-5xl font-black text-white mb-1">
                {stat.value}
                <span className="text-[#00897B]">{stat.suffix}</span>
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
  const { ref: protocolsRef, inView: protocolsInView } = useInView();
  const { ref: clientsRef, inView: clientsInView } = useInView();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-[#00897B]/10 rounded-full blur-3xl" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00897B]/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#00897B]/8 rounded-full blur-2xl animate-float delay-300" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#334155] rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-[#00897B] rounded-full animate-pulse"></span>
              <span className="text-[#94A3B8] text-sm font-medium">Spécialiste GTB — Toute la France</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 animate-fade-in-up">
              <span className="text-white">L'intelligence</span>
              <br />
              <span className="gradient-text text-glow">au service</span>
              <br />
              <span className="text-white">de vos bâtiments</span>
            </h1>

            <p className="text-[#94A3B8] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
              Électricien installateur & prestataire spécialisé GTB. Câblage, installation, mise en service et dépannage — <strong className="text-white">8 experts techniques</strong> partout en France.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Link
                href="/contact"
                className="bg-[#00897B] hover:bg-[#00695C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer glow-emerald hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/realisations"
                className="bg-[#1E293B] hover:bg-[#273549] border border-[#334155] hover:border-[#00897B] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Voir nos réalisations
              </Link>
            </div>

            {/* Protocols preview */}
            <div className="mt-16 animate-fade-in delay-500">
              <p className="text-[#475569] text-xs uppercase tracking-widest mb-4">Protocoles maîtrisés</p>
              <div className="flex flex-wrap justify-center gap-3">
                {protocols.map((p) => (
                  <span key={p} className="bg-[#1E293B] border border-[#334155] text-[#94A3B8] text-xs font-semibold px-4 py-2 rounded-lg hover:border-[#00897B] hover:text-[#00897B] transition-all duration-200 cursor-default">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-[#475569]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <StatsSection />

      {/* SERVICES */}
      <section className="py-24" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Nos prestations</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Ce que nous faisons</h2>
            <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
              Du câblage à la mise en service, nous intervenons sur tous vos équipements GTB.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`group bg-[#1E293B] border border-[#334155] hover:border-[#00897B] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00897B]/10 cursor-default ${
                  servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-[#00897B]/10 group-hover:bg-[#00897B]/20 rounded-xl flex items-center justify-center text-[#00897B] mb-4 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{service.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#00897B] font-semibold hover:gap-3 transition-all">
              Voir tous nos services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-[#0A1120]" ref={clientsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${clientsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#00897B] font-semibold text-sm uppercase tracking-widest">Références</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Ils nous font confiance</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <div
                key={client.name}
                className={`bg-[#1E293B] border border-[#334155] hover:border-[#00897B]/50 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:bg-[#273549] ${
                  clientsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center border border-[#334155]">
                  <span className="text-[#00897B] font-black text-xs tracking-wider">{client.initiales}</span>
                </div>
                <p className="text-[#94A3B8] text-xs font-medium text-center">{client.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/realisations" className="inline-flex items-center gap-2 text-[#00897B] font-semibold hover:gap-3 transition-all">
              Voir toutes nos réalisations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-[#00897B]/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Un projet GTB ?<br />
            <span className="gradient-text">Parlons-en.</span>
          </h2>
          <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
            Notre équipe d'experts intervient partout en France. Contactez-nous pour un devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="bg-[#00897B] hover:bg-[#00695C] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer glow-emerald hover:scale-105">
              Demander un devis
            </Link>
            <a href="tel:0615084962"
              className="bg-[#1E293B] border border-[#334155] hover:border-[#00897B] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer">
              06 15 08 49 62
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';

const valeurs = [
  { title: "Expertise technique", desc: "8 techniciens spécialisés GTB maîtrisant l'ensemble des protocoles du marché.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
  { title: "Réactivité", desc: "Intervention rapide sur toute la France pour vos urgences et projets planifiés.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { title: "Fiabilité", desc: "Des références solides dans l'industrie automobile, le secteur public et l'éducation.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { title: "Couverture nationale", desc: "Présents partout en France pour intervenir sur tous vos sites.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
];

export default function APropos() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#D1DAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Qui sommes-nous</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F5C] mt-2 mb-4">À propos de BâtiControls</h1>
          <p className="text-[#5A6B9A] text-lg max-w-2xl">Électricien installateur & prestataire spécialisé GTB depuis plusieurs années.</p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Notre histoire</span>
              <h2 className="text-3xl font-black text-[#0D1F5C] mt-2 mb-6">Spécialistes GTB au service de vos bâtiments</h2>
              <div className="space-y-4 text-[#5A6B9A] leading-relaxed">
                <p>BâtiControls est une société de prestation de services spécialisée dans la <strong className="text-[#0D1F5C]">Gestion Technique du Bâtiment (GTB)</strong>. Nous intervenons en tant qu'électricien installateur, prestataire et sous-traitant.</p>
                <p>Notre équipe de <strong className="text-[#0D1F5C]">8 experts techniques</strong> maîtrise l'ensemble des protocoles GTB du marché : KNX, BACnet, Modbus, Zigbee, LoRa, LOXONE, Node-RED et WATTSENS.</p>
                <p>Du câblage à la mise en service, nous assurons une prestation complète et rigoureuse sur toute la France.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-2xl overflow-hidden border border-[#D1DAFB] shadow-lg">
                  <Image src="/logo.jpg" alt="BâtiControls" width={288} height={288} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -left-4 bg-[#1B3B8A] text-white rounded-xl p-4 shadow-lg shadow-[#1B3B8A]/30">
                  <p className="text-3xl font-black">8</p>
                  <p className="text-xs font-medium">Experts GTB</p>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white border border-[#D1DAFB] text-[#0D1F5C] rounded-xl p-4 shadow-md">
                  <p className="text-3xl font-black">7+</p>
                  <p className="text-xs font-medium text-[#5A6B9A]">Protocoles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Nos engagements</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Ce qui nous distingue</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((v) => (
              <div key={v.title} className="bg-white border border-[#D1DAFB] hover:border-[#1B3B8A]/50 rounded-2xl p-10 transition-all duration-300 hover:shadow-md">
                <div className="w-14 h-14 bg-[#1B3B8A]/10 rounded-xl flex items-center justify-center text-[#1B3B8A] mb-8">{v.icon}</div>
                <h3 className="font-bold text-[#0D1F5C] mb-4">{v.title}</h3>
                <p className="text-[#5A6B9A] text-sm leading-loose">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Certifications</span>
            <h2 className="text-3xl font-black text-[#0D1F5C] mt-2">Qualifications & Habilitations</h2>
            <p className="text-[#5A6B9A] mt-3 max-w-xl mx-auto">Nos techniciens sont qualifiés et habilités pour intervenir en toute sécurité sur toutes installations électriques et GTB.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { code: "B1V", label: "Habilitation électrique", desc: "Intervention sur installations basse tension" },
              { code: "BR", label: "Chargé de travaux", desc: "Direction des travaux électriques" },
              { code: "BC", label: "Consignateur", desc: "Consignation des installations électriques" },
              { code: "GTB", label: "Spécialiste GTB", desc: "Gestion Technique du Bâtiment — tous protocoles" },
            ].map((q) => (
              <div key={q.code} className="bg-[#F0F4FF] border border-[#D1DAFB] rounded-2xl p-10 text-center hover:border-[#1B3B8A]/50 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#1B3B8A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-black text-sm">{q.code}</span>
                </div>
                <h4 className="font-bold text-[#0D1F5C] mb-3">{q.label}</h4>
                <p className="text-[#5A6B9A] text-sm leading-relaxed">{q.desc}</p>
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
          <h2 className="text-3xl font-black text-white mb-4">Travaillons ensemble</h2>
          <p className="text-blue-200 mb-8">Contactez notre équipe pour discuter de votre projet GTB.</p>
          <Link href="/contact" className="bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold px-8 py-4 rounded-xl transition-all cursor-pointer inline-block shadow-lg shadow-[#E8611A]/25">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}

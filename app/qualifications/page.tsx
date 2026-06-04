import Link from 'next/link';

export default function Qualifications() {
  return (
    <>
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#D1DAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Certifications</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F5C] mt-2 mb-4">Qualifications & Certifications</h1>
          <p className="text-[#5A6B9A] text-lg max-w-2xl">Nos habilitations, certifications et qualifications professionnelles.</p>
        </div>
      </section>

      <section className="py-32 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-[#1B3B8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#1B3B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-[#0D1F5C] mb-4">Page en cours de construction</h2>
          <p className="text-[#5A6B9A] max-w-md mx-auto mb-10">
            Nos qualifications et certifications seront présentées ici prochainement.
          </p>
          <Link href="/contact" className="bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-block">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}

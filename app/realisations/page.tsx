import Link from 'next/link';

export default function Realisations() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1B3B8A]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8611A]/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10 text-center">
        <div className="w-20 h-20 mx-auto mb-10 bg-[#1B3B8A]/8 border border-[#1B3B8A]/20 rounded-2xl flex items-center justify-center">
          <svg className="w-10 h-10 text-[#E8611A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
        </div>

        <span className="inline-flex items-center gap-2 bg-[#1B3B8A]/8 border border-[#1B3B8A]/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-[#E8611A] rounded-full animate-pulse"></span>
          <span className="text-[#1B3B8A] text-sm font-semibold">Bientôt disponible</span>
        </span>

        <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F5C] mb-6">
          Page en cours de construction
        </h1>

        <p className="text-[#5A6B9A] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Notre portfolio de réalisations est en cours de préparation. En attendant, contactez-nous
          pour découvrir nos projets GTB/CVC et discuter de vos besoins.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg shadow-[#E8611A]/25">
            Nous contacter
          </Link>
          <Link href="/" className="bg-white hover:bg-[#F0F4FF] border border-[#D1DAFB] hover:border-[#1B3B8A]/40 text-[#0D1F5C] font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer shadow-sm">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}

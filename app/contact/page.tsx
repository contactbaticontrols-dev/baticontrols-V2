'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nom: '', entreprise: '', email: '', telephone: '', sujet: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-white pt-36 pb-20 relative overflow-hidden border-b border-[#D1DAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B8A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[#E8611A] font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0D1F5C] mt-2 mb-4">Parlons de votre projet</h1>
          <p className="text-[#5A6B9A] text-lg max-w-2xl">Notre équipe vous répond rapidement pour étudier votre besoin GTB.</p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white border border-[#D1DAFB] rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-[#0D1F5C] text-lg mb-5">Coordonnées</h2>
                <div className="space-y-4">
                  <a href="tel:0615084962" className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-[#1B3B8A]/10 rounded-lg flex items-center justify-center text-[#1B3B8A] shrink-0 group-hover:bg-[#1B3B8A] group-hover:text-white transition-all duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">Téléphone</p>
                      <p className="font-semibold text-[#0D1F5C] group-hover:text-[#1B3B8A] transition-colors">06 15 08 49 62</p>
                    </div>
                  </a>
                  <a href="mailto:Contact.baticontrols@gmail.com" className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-[#1B3B8A]/10 rounded-lg flex items-center justify-center text-[#1B3B8A] shrink-0 group-hover:bg-[#1B3B8A] group-hover:text-white transition-all duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">Email</p>
                      <p className="font-semibold text-[#0D1F5C] group-hover:text-[#1B3B8A] transition-colors text-sm break-all">Contact.baticontrols@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#1B3B8A]/10 rounded-lg flex items-center justify-center text-[#1B3B8A] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">Zone</p>
                      <p className="font-semibold text-[#0D1F5C]">Toute la France</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0D1F5C] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-[#E8611A] rounded-full animate-pulse"></span>
                  <span className="text-white font-bold text-sm">Disponible</span>
                </div>
                <p className="text-blue-200 text-sm">8 experts disponibles pour intervenir rapidement partout en France.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white border border-[#D1DAFB] rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-[#1B3B8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#1B3B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-[#0D1F5C] mb-2">Message envoyé !</h3>
                  <p className="text-[#5A6B9A]">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-black text-[#0D1F5C] text-xl mb-6">Demande de devis</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#5A6B9A] mb-1.5">Nom & prénom *</label>
                        <input type="text" name="nom" required value={form.nom} onChange={handleChange}
                          className="w-full bg-[#F0F4FF] border border-[#D1DAFB] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B3B8A] focus:ring-1 focus:ring-[#1B3B8A]/20 transition-all" placeholder="Jean Dupont" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5A6B9A] mb-1.5">Entreprise</label>
                        <input type="text" name="entreprise" value={form.entreprise} onChange={handleChange}
                          className="w-full bg-[#F0F4FF] border border-[#D1DAFB] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B3B8A] focus:ring-1 focus:ring-[#1B3B8A]/20 transition-all" placeholder="Votre société" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#5A6B9A] mb-1.5">Email *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange}
                          className="w-full bg-[#F0F4FF] border border-[#D1DAFB] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B3B8A] focus:ring-1 focus:ring-[#1B3B8A]/20 transition-all" placeholder="email@exemple.fr" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5A6B9A] mb-1.5">Téléphone</label>
                        <input type="tel" name="telephone" value={form.telephone} onChange={handleChange}
                          className="w-full bg-[#F0F4FF] border border-[#D1DAFB] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B3B8A] focus:ring-1 focus:ring-[#1B3B8A]/20 transition-all" placeholder="06 XX XX XX XX" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#5A6B9A] mb-1.5">Sujet *</label>
                      <select name="sujet" required value={form.sujet} onChange={handleChange}
                        className="w-full bg-[#F0F4FF] border border-[#D1DAFB] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] focus:outline-none focus:border-[#1B3B8A] focus:ring-1 focus:ring-[#1B3B8A]/20 transition-all cursor-pointer">
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="câblage">Câblage GTB</option>
                        <option value="mise-en-service">Mise en service</option>
                        <option value="dépannage">Dépannage</option>
                        <option value="sous-traitance">Sous-traitance</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#5A6B9A] mb-1.5">Message *</label>
                      <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                        className="w-full bg-[#F0F4FF] border border-[#D1DAFB] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B3B8A] focus:ring-1 focus:ring-[#1B3B8A]/20 transition-all resize-none" placeholder="Décrivez votre projet ou besoin..." />
                    </div>
                    <button type="submit" className="w-full bg-[#E8611A] hover:bg-[#C24D10] text-white font-bold py-4 rounded-xl transition-all duration-200 cursor-pointer shadow-md shadow-[#E8611A]/20 hover:shadow-lg hover:shadow-[#E8611A]/30">
                      Envoyer ma demande
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

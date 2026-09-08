import React, { useState } from 'react';
import { MessageCircle, Star, Award } from 'lucide-react';
import helvaImg from '../assets/images/irmik_helvasi_1788800643512.jpg';

export const HelvaSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('Büyük Boy');

  // Boyutlar: Küçük Boy, Büyük Boy (as instructed)
  const sizes = [
    { id: 'kucuk', name: 'Küçük Boy', desc: 'Tek kişilik enfes tatlı kaçamağı' },
    { id: 'buyuk', name: 'Büyük Boy', desc: 'Maraş dondurmalı bol lezzet porsiyonu' },
  ];

  return (
    <section id="helva" className="py-20 bg-[#121212] text-white relative overflow-hidden">
      {/* Decorative background aura in mustard yellow */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#E5A812]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Helvacı Ali Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E5A812] via-amber-600 to-yellow-600 rounded-3xl opacity-30 blur-xl" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 group">
                <img
                  src={helvaImg}
                  alt="Helvacı Ali İrmik Helvası"
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Badge for Maraş Dondurmalı Servis */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#E5A812] font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg border border-[#E5A812]/50 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-current text-[#E5A812]" />
                  <span>Maraş Dondurmalı Özel Servis</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-neutral-900/90 text-[#E5A812] text-xs font-bold uppercase tracking-wider mb-2 border border-[#E5A812]/40">
                    Meşhur Geleneksel Tat
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Sıcak İrmik Helvası & Dondurma
                  </h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Sıcak irmik helvasının kalbinde eriyen hakiki dövme Maraş dondurması keyfi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Description & Size Selection */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#E5A812]/40 text-[#E5A812] font-bold text-xs uppercase tracking-wider mb-3 shadow-md">
              <Award className="w-4 h-4 text-[#E5A812]" />
              Meşhur Marka Güvencesiyle
            </div>

            {/* Exact Title: "Helvacı Ali İrmik Helvası" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Helvacı Ali İrmik Helvası
            </h2>

            {/* Exact Description: "Helvacı Ali markasının meşhur irmik helvası, şimdi bizde!" */}
            <p className="mt-4 text-lg sm:text-xl text-amber-200/95 font-semibold leading-relaxed">
              "Helvacı Ali markasının meşhur irmik helvası, şimdi bizde!"
            </p>

            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Tarihi Helvacı Ali reçetesiyle hazırlanan, tereyağlı ve enfes kıvamlı sıcak irmik helvası, Tudo Maraş dövme dondurmamızın eşsiz lezzetiyle taçlanıyor.
            </p>

            {/* Special Feature Highlights */}
            <div className="mt-6 space-y-2.5 w-full">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A1A] border border-neutral-800">
                <span className="w-9 h-9 rounded-lg bg-black text-[#E5A812] border border-[#E5A812]/40 flex items-center justify-center font-bold text-sm shrink-0">
                  🍨
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                  İçinde saklı hakiki Maraş dondurması sürprizi ile sıcak-soğuk damak dengesi.
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1A1A] border border-neutral-800">
                <span className="w-9 h-9 rounded-lg bg-black text-[#E5A812] border border-[#E5A812]/40 flex items-center justify-center font-bold text-sm shrink-0">
                  🌰
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                  Taze çekilmiş Antep fıstığı ve tarçın ilavesiyle zengin sunum.
                </span>
              </div>
            </div>

            {/* Sizes (Boyutlar): Küçük Boy, Büyük Boy */}
            <div className="mt-8 w-full">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">
                Boyut Seçenekleri
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-4 rounded-2xl text-center border-2 transition-all duration-200 cursor-pointer ${
                      selectedSize === size.name
                        ? 'bg-[#E5A812] text-black border-[#E5A812] shadow-xl font-bold scale-102'
                        : 'bg-[#171717] text-neutral-200 border-neutral-800 hover:border-[#E5A812]/50'
                    }`}
                  >
                    <span className="block text-base font-bold">{size.name}</span>
                    <span className={`block text-xs mt-1 ${selectedSize === size.name ? 'text-black/80 font-semibold' : 'text-neutral-400'}`}>
                      {size.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Order Action */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full">
              <a
                href={`https://wa.me/905446171451?text=Merhaba,%20${encodeURIComponent(selectedSize)}%20Helvacı%20Ali%20İrmik%20Helvası%20siparişi%20vermek%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-base shadow-xl shadow-black/50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>İrmik Helvası Siparişi Ver ({selectedSize})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

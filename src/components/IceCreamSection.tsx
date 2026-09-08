import React, { useState } from 'react';
import { ICE_CREAM_FLAVORS } from '../data/flavors';
import { IceCreamFlavor } from '../types';
import { Sparkles, MessageCircle, Eye } from 'lucide-react';

export const IceCreamSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalFlavor, setActiveModalFlavor] = useState<IceCreamFlavor | null>(null);

  const categories = [
    { id: 'all', name: 'Tüm Lezzetler', count: ICE_CREAM_FLAVORS.length },
    { id: 'special', name: 'Özel & Gurme', count: ICE_CREAM_FLAVORS.filter((f) => f.category === 'special').length },
    { id: 'fruit', name: 'Taze Meyveliler', count: ICE_CREAM_FLAVORS.filter((f) => f.category === 'fruit').length },
    { id: 'berry', name: 'Orman & Berry', count: ICE_CREAM_FLAVORS.filter((f) => f.category === 'berry').length },
    { id: 'classic', name: 'Klasik Çeşitler', count: ICE_CREAM_FLAVORS.filter((f) => f.category === 'classic').length },
  ];

  const filteredFlavors =
    selectedCategory === 'all'
      ? ICE_CREAM_FLAVORS
      : ICE_CREAM_FLAVORS.filter((f) => f.category === selectedCategory);

  return (
    <section id="dondurmalar" className="py-20 bg-[#0A0A0A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#E5A812]/50 text-[#E5A812] font-bold text-xs uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A812]" />
            Geleneksel Maraş Kıvamı & 19 Eşsiz Çeşit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Dondurma Çeşitlerimiz
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 font-normal">
            Babadan oğula aktarılan reçetelerimizle hazırlanan 19 farklı lezzet şöleni. Bitter ve Portakal ayrı, Karışık ve Orman Meyvesi ayrı özel serilerimizle damaklarda unutulmaz iz bırakır.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#E5A812] text-black shadow-lg shadow-[#E5A812]/20 scale-105 border border-[#E5A812]'
                    : 'bg-[#171717] text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* 19 Flavors Grid: Responsive with AI-generated Image Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFlavors.map((flavor, index) => (
            <div
              key={flavor.id}
              className="group relative rounded-3xl bg-[#141414] border border-neutral-800 hover:border-[#E5A812]/70 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Image Container with subtle zoom effect */}
              {flavor.image && (
                <div className="relative h-44 w-full overflow-hidden bg-black/60">
                  <img
                    src={flavor.image}
                    alt={`${flavor.name} Maraş Dondurması`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent" />

                  {/* Flavor Emoji Badge on Image */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-[#E5A812]/50 flex items-center justify-center text-xl shadow-md">
                    <span>{flavor.emoji}</span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1 text-xs text-neutral-500">
                    <span className="text-[#E5A812] font-semibold">Maraş Usulü Dövme</span>
                    <span>#{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-heading font-black text-white group-hover:text-[#E5A812] transition-colors">
                    {flavor.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                    {flavor.description}
                  </p>
                </div>

                {/* Card Footer: WhatsApp Order / Inquiry Link */}
                <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-200/80 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5A812]" />
                    Günlük Taze
                  </span>

                  <a
                    href={`https://wa.me/905446171451?text=Merhaba,%20${encodeURIComponent(flavor.name)}%20Maraş%20dondurmanız%20hakkında%20bilgi%20ve%20sipariş%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-black bg-[#E5A812] hover:bg-[#F5B41E] transition-all duration-200 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Sipariş</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: Toptan Küvet Siparişi in Noir & Mustard */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-950 border-2 border-[#E5A812]/50 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#E5A812] text-black flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
              🍨
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                İşletmeniz İçin Toptan Maraş Dondurması
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                Kafe, restoran ve organizasyonlar için 19 çeşit dondurmamız hijyenik toptan küvetlerde soğuk zincirle kapınızda.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/905446171451?text=Merhaba,%20toptan%20dondurma%20fiyat%20listesi%20ve%20küvet%20çeşitleri%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-sm sm:text-base shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Toptan Teklif Al</span>
          </a>
        </div>
      </div>
    </section>
  );
};

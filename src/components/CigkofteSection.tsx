import React, { useState } from 'react';
import { MessageCircle, Flame, Utensils, Sparkles, Check } from 'lucide-react';
import cigkofteImg from '../assets/images/cigkofte_tabagi_1788800591360.jpg';
import garniturSpreadImg from '../assets/images/garnitur_cigkofte_1788801169307.jpg';
import garniturTazeImg from '../assets/images/garnitur_taze_sebze_1788801247159.jpg';

export const CigkofteSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('Orta');
  const [activeTab, setActiveTab] = useState<'all' | 'sauces' | 'veggies'>('all');

  // Exact 9 ingredients specified by the user:
  // Marul, Nar Ekşisi, Turşu, Mısır, Mor Lahana, Domates, Doritos, Acı Sos, Burger Sos
  const ingredients = [
    { name: 'Marul', icon: '🥗', desc: 'Çıtır taze göbek marul yaprakları', category: 'veggies' },
    { name: 'Nar Ekşisi', icon: '🍇', desc: 'Hakiki kıvamlı nar ekşisi sosu', category: 'sauces' },
    { name: 'Turşu', icon: '🥒', desc: 'Geleneksel çıtır salatalık kornişon turşusu', category: 'veggies' },
    { name: 'Mısır', icon: '🌽', desc: 'Altın sarısı tatlı süt mısır taneleri', category: 'veggies' },
    { name: 'Mor Lahana', icon: '🥬', desc: 'Taze rendelenmiş mor lahana', category: 'veggies' },
    { name: 'Domates', icon: '🍅', desc: 'Sulu taze ince domates dilimleri', category: 'veggies' },
    { name: 'Doritos', icon: '🔺', desc: 'Çıtır baharatlı cips lezzet dokunuşu', category: 'sauces' },
    { name: 'Acı Sos', icon: '🌶️', desc: 'Özel acı biber sosu', category: 'sauces' },
    { name: 'Burger Sos', icon: '🍔', desc: 'Özel reçeteli kıvamlı burger sosu', category: 'sauces' },
  ];

  // Sizes: Küçük, Orta, Büyük (no prices, as instructed)
  const sizes = [
    { id: 'kucuk', name: 'Küçük Boy', desc: 'Tek kişilik pratik ve doyurucu porsiyon' },
    { id: 'orta', name: 'Orta Boy', desc: 'En çok tercih edilen ideal porsiyon' },
    { id: 'buyuk', name: 'Büyük Boy', desc: 'Doyurucu & aile / arkadaşlar için zengin porsiyon' },
  ];

  return (
    <section id="cigkofte" className="py-20 bg-[#121212] text-white relative overflow-hidden">
      {/* Decorative background aura in mustard yellow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E5A812]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with badges & Garniture Photo Collage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              {/* Decorative gradient border in Mustard & Noir */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E5A812] via-amber-700 to-yellow-600 rounded-3xl opacity-30 blur-md" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 group">
                <img
                  src={cigkofteImg}
                  alt="Özel Üretim Çiğköftemiz"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating Note Tag: "Bardakta Süt Mısır da mevcuttur" as requested */}
                <div className="absolute top-4 right-4 bg-[#E5A812] text-black font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5">
                  <span>🌽 Bardakta Süt Mısır da mevcuttur</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-neutral-900/90 text-[#E5A812] text-xs font-bold uppercase tracking-wider mb-2 border border-[#E5A812]/40">
                    %100 El Yapımı & Taze
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Özel Üretim Çiğköfte Tabağı
                  </h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Bol yeşillik, taze garnitürler ve özel soslarla zenginleştirilmiş sunum.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Generated Garnitures Showcase Strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-black group h-32">
                <img
                  src={garniturSpreadImg}
                  alt="Garnitür ve Sos Çeşitleri"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-amber-200">
                    Özel Soslar & Doritos
                  </span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-black group h-32">
                <img
                  src={garniturTazeImg}
                  alt="Taze Sebze Garnitürleri"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-amber-200">
                    Taze Yeşillikler & Turşu
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content, Ingredients & Sizes in Noir & Mustard */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#E5A812]/40 text-[#E5A812] font-bold text-xs uppercase tracking-wider mb-3 shadow-md">
              <Flame className="w-4 h-4 text-[#E5A812]" />
              Usta Ellerden Günlük Üretim
            </div>

            {/* Exact Title: "Özel Üretim Çiğköftemiz" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Özel Üretim Çiğköftemiz
            </h2>

            {/* Exact Description: "Tamamen özel üretim, el yapımı çiğköftemizle damakları şenlendiriyoruz." */}
            <p className="mt-4 text-lg sm:text-xl text-amber-100/90 font-medium leading-relaxed">
              "Tamamen özel üretim, el yapımı çiğköftemizle damakları şenlendiriyoruz."
            </p>

            <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Özel çekim esmer bulgur, taze baharatlar, ceviz ve usta yoğuruşu ile her gün taptaze hazırlıyoruz. İster porsiyon ister dürüm olarak enfes 9 çeşit garnitür seçeneğiyle sunuyoruz.
            </p>

            {/* Ingredients Section (All 9 items explicitly listed with badges) */}
            <div className="mt-6 w-full">
              <h3 className="text-sm font-bold text-[#E5A812] uppercase tracking-wider flex items-center gap-2 mb-3">
                <Utensils className="w-4 h-4 text-[#E5A812]" />
                Zengin Garnitür & Malzemelerimiz (9 Çeşit)
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {ingredients.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1A1A1A] border border-neutral-800 hover:border-[#E5A812]/50 transition-colors"
                  >
                    <span className="text-xl select-none">{item.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{item.name}</span>
                      <span className="text-[10px] text-neutral-400 truncate max-w-[110px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes (Boyutlar): Küçük, Orta, Büyük */}
            <div className="mt-8 w-full">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">
                Porsiyon Boyut Seçenekleri
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-3.5 rounded-2xl text-center border-2 transition-all duration-200 cursor-pointer ${
                      selectedSize === size.name
                        ? 'bg-[#E5A812] text-black border-[#E5A812] shadow-lg scale-102 font-bold'
                        : 'bg-[#171717] text-neutral-200 border-neutral-800 hover:border-[#E5A812]/50'
                    }`}
                  >
                    <span className="block text-sm sm:text-base font-bold">{size.name}</span>
                    <span className={`block text-[11px] mt-1 ${selectedSize === size.name ? 'text-black/80 font-semibold' : 'text-neutral-400'}`}>
                      Seçenek
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Order Action */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full">
              <a
                href={`https://wa.me/905446171451?text=Merhaba,%20${encodeURIComponent(selectedSize)}%20Boy%20Özel%20Üretim%20Çiğköfte%20siparişi%20vermek%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-base shadow-xl shadow-black/50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Çiğköfte Siparişi Ver ({selectedSize} Boy)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

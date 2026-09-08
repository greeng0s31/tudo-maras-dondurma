import React, { useState } from 'react';
import { MessageCircle, Check } from 'lucide-react';
import cornImg from '../assets/images/sut_misir_bardakta_1788800624355.jpg';

export const CornSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('Orta');

  const sizes = [
    { id: 'kucuk', name: 'Küçük Boy', desc: 'Hızlı ve lezzetli atıştırmalık' },
    { id: 'orta', name: 'Orta Boy', desc: 'En sevilen standart porsiyon' },
    { id: 'buyuk', name: 'Büyük Boy', desc: 'Bol mısır keyfi' },
  ];

  const seasonings = [
    'Tuz & Hakiki Tereyağı',
    'Pul Biber & Acı Sos',
    'Ketçap & Mayonez',
    'Sarımsak & Baharat Çeşnisi',
    'Limon Sosu',
    'Parmesan Aroması',
  ];

  return (
    <section id="misir" className="py-20 bg-[#0D0D0D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content & Sizes in Noir & Mustard */}
          <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] text-[#E5A812] font-bold text-xs uppercase tracking-wider mb-3 border border-[#E5A812]/40 shadow-sm">
              <span className="text-base">🌽</span>
              Sıcak & Taze Sokak Lezzeti
            </div>

            {/* Exact Title: "Bardakta Süt Mısır" */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
              Bardakta Süt Mısır
            </h2>

            {/* Exact Description: "Taze ve lezzetli bardakta süt mısırımızla serinleyin." */}
            <p className="mt-4 text-lg sm:text-xl text-amber-200/95 font-medium leading-relaxed italic">
              "Taze ve lezzetli bardakta süt mısırımızla serinleyin."
            </p>

            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Özel buharda haşlanan altın sarısı taneli süt mısırlarımız, eritilmiş hakiki tereyağı ve dilediğiniz özel soslarla anında sıcak olarak bardağınızda servis edilir.
            </p>

            {/* Seasoning Tags */}
            <div className="mt-6 w-full">
              <span className="text-xs font-bold text-[#E5A812] uppercase tracking-wider block mb-2">
                Damak Tadınıza Göre Sos & Çeşniler:
              </span>
              <div className="flex flex-wrap gap-2">
                {seasonings.map((seasoning) => (
                  <span
                    key={seasoning}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-neutral-800 text-neutral-200 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-[#E5A812]" />
                    {seasoning}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes: Küçük, Orta, Büyük */}
            <div className="mt-8 w-full">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">
                Boyut Seçenekleri
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-3.5 rounded-2xl text-center border-2 transition-all duration-200 cursor-pointer ${
                      selectedSize === size.name
                        ? 'bg-[#E5A812] text-black border-[#E5A812] shadow-md font-bold scale-102'
                        : 'bg-[#171717] text-neutral-300 border-neutral-800 hover:border-[#E5A812]/50 font-medium'
                    }`}
                  >
                    <span className="block text-sm sm:text-base">{size.name}</span>
                    <span className={`block text-[11px] mt-1 ${selectedSize === size.name ? 'text-black/80 font-semibold' : 'text-neutral-500'}`}>
                      {size.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Order Action */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full">
              <a
                href={`https://wa.me/905446171451?text=Merhaba,%20${encodeURIComponent(selectedSize)}%20bardakta%20süt%20mısır%20siparişi%20vermek%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-base shadow-xl shadow-black/50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Süt Mısır Siparişi Ver ({selectedSize})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-[#E5A812]/20 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 group">
                <img
                  src={cornImg}
                  alt="Bardakta Taze Süt Mısır"
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E5A812] text-black text-xs font-bold uppercase tracking-wider mb-2">
                    Altın Sarısı & Tatlı
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Hakiki Tereyağlı Bardakta Mısır
                  </h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Buharda sıcak sıcak taze haşlanmış taneler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

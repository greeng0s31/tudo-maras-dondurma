import React from 'react';
import { MessageCircle, Phone, Truck, ShieldCheck, Award, Box } from 'lucide-react';

export const WholesaleSection: React.FC = () => {
  const wholesalePhone = '05446171451';
  const whatsappUrl = `https://wa.me/905446171451?text=${encodeURIComponent(
    'Merhaba, Tudo Maraş Dondurma toptan satışı hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.'
  )}`;

  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-[#E5A812]" />,
      title: '19 Eşsiz Çeşit',
      desc: 'Meyveliden çikolatalıya, Antep fıstıklısından bal bademe zengin menü yelpazesi.',
    },
    {
      icon: <Truck className="w-6 h-6 text-[#E5A812]" />,
      title: 'Soğuk Zincir Teslimat',
      desc: 'Dondurmanın kıvamını ve donukluğunu koruyan güvenilir soğuk zincir tedarik ağı.',
    },
    {
      icon: <Box className="w-6 h-6 text-[#E5A812]" />,
      title: 'Farklı Küvet Seçenekleri',
      desc: 'İşletmenizin ihtiyacına uygun 4kg, 5kg ve özel hacimli hijyenik küvet ambalajlar.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E5A812]" />,
      title: '1981 Güvencesi & Kalite',
      desc: '40 yılı aşkın dövme dondurma deneyimiyle işletmenizin müşteri memnuniyetini katlayın.',
    },
  ];

  return (
    <section id="toptan" className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Subtle mustard radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E5A812]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#E5A812]/40 text-[#E5A812] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-md">
            <span>B2B • Kurumsal Tedarik & Toptan Satış</span>
          </div>

          {/* Exact Title: "Toptan Dondurma Satışı" */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Toptan Dondurma Satışı
          </h2>

          {/* Exact Description: "İşletmeniz için kaliteli Maraş dondurması toptan satışımız mevcuttur. Detaylı bilgi ve sipariş için WhatsApp'tan bize ulaşın." */}
          <p className="mt-4 text-lg sm:text-xl text-amber-100/90 font-medium leading-relaxed max-w-3xl mx-auto">
            "İşletmeniz için kaliteli Maraş dondurması toptan satışımız mevcuttur. Detaylı bilgi ve sipariş için WhatsApp'tan bize ulaşın."
          </p>

          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Kafe, restoran, otel, dondurma dükkanı, pastane veya özel davet ve organizasyonlarınız için günlük taze üretilen hakiki Maraş dondurmamızı avantajlı toptan fiyatlarla sunuyoruz.
          </p>

          {/* Exact Button: "WhatsApp ile Sipariş Ver" in Mustard Yellow */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="wholesale-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-base sm:text-lg shadow-xl shadow-black/60 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp ile Sipariş Ver</span>
            </a>

            <a
              href={`tel:${wholesalePhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold text-base transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#E5A812]" />
              <span>Telefon: 0544 617 1451</span>
            </a>
          </div>
        </div>

        {/* Benefits Grid in Noir & Mustard */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#141414] border border-neutral-800 hover:border-[#E5A812]/50 transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-3 rounded-2xl bg-black border border-neutral-800 mb-4">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-heading">{b.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

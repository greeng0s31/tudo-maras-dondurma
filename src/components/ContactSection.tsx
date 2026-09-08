import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Store, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const phone = '0544 617 1451';
  const cleanPhone = '05446171451';
  const whatsappLink = `https://wa.me/90${cleanPhone}?text=${encodeURIComponent(
    'Merhaba, Tudo Maraş Dondurma hakkında bilgi almak istiyorum.'
  )}`;

  return (
    <section id="iletisim" className="py-20 bg-[#0D0D0D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#E5A812]/40 text-[#E5A812] font-bold text-xs uppercase tracking-wider mb-3 shadow-md">
            <Store className="w-4 h-4 text-[#E5A812]" />
            İletişim & Şubelerimiz
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight">
            Bizimle İletişime Geçin
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 font-normal">
            Sipariş, toptan dondurma satışı ve merak ettiğiniz her konuda 7/24 WhatsApp ve telefon üzerinden bize ulaşabilirsiniz.
          </p>
        </div>

        {/* Contact Info Cards Grid in Noir & Mustard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: WhatsApp (tıkla ara/yaz) */}
          <div className="rounded-3xl p-8 bg-[#141414] border border-neutral-800 hover:border-[#E5A812]/50 shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-black border border-[#E5A812]/40 text-[#E5A812] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">WhatsApp Hattı</h3>
              <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-semibold">
                Anında Hızlı Yanıt
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-black/60 border border-neutral-800">
                <span className="block text-2xl font-black text-[#E5A812] tracking-wide">
                  {phone}
                </span>
                <span className="text-xs text-neutral-400 mt-1 block">
                  Toptan satış, dondurma ve çiğköfte siparişi için yazın.
                </span>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-sm shadow-lg transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp'a Yönlendir</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Telefon (tıkla ara) */}
          <div className="rounded-3xl p-8 bg-[#141414] border border-neutral-800 hover:border-[#E5A812]/50 shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-black border border-[#E5A812]/40 text-[#E5A812] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Telefonla Arayın</h3>
              <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-semibold">
                Toptan & Genel İletişim
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-black/60 border border-neutral-800">
                <span className="block text-2xl font-black text-white tracking-wide">
                  {phone}
                </span>
                <span className="text-xs text-neutral-400 mt-1 block">
                  Tıkla ara ile bizi hemen doğrudan arayabilirsiniz.
                </span>
              </div>
            </div>

            <a
              href={`tel:${cleanPhone}`}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-[#E5A812]/50 text-[#E5A812] font-bold text-sm shadow-lg transition-all hover:scale-102"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Ara: {phone}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Şubeler & Çalışma Saatleri */}
          <div className="rounded-3xl p-8 bg-[#141414] border border-neutral-800 hover:border-[#E5A812]/50 shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-black border border-[#E5A812]/40 text-[#E5A812] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Şubelerimiz & Saatler</h3>
              
              {/* Exact Address text requested: "3 şubemiz hizmetinizde" and "Bizi ziyaret edin" (no city/district) */}
              <div className="mt-4 p-4 rounded-2xl bg-black/60 border border-neutral-800">
                <div className="flex items-center gap-2 text-[#E5A812] font-bold text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5A812] animate-pulse" />
                  <span>3 şubemiz hizmetinizde</span>
                </div>
                <p className="text-sm font-semibold text-white mt-1">
                  Bizi ziyaret edin
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Güler yüzlü ekibimiz ve taze lezzetlerimizle sizleri bekliyoruz.
                </p>
              </div>

              {/* Dükkan Açık Olan Saatleri: 13:00 - 01:00 */}
              <div className="mt-4 space-y-2 text-xs font-semibold">
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#E5A812]" />
                    Çalışma Saatleri
                  </span>
                  <span className="text-[#E5A812] font-black text-sm tracking-wide">13:00 - 01:00</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <span className="text-neutral-400 text-[11px]">
                    Hergün Açığız (Gece 01:00'e Kadar)
                  </span>
                  <span className="text-emerald-400 text-[11px] font-bold">Hizmetinizdeyiz</span>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold text-sm shadow-md transition-all hover:scale-102"
            >
              <MapPin className="w-4 h-4 text-[#E5A812]" />
              <span>Konum & Bilgi Al</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

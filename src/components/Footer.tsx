import React from 'react';
import { TudoLogo } from './TudoLogo';
import { Instagram, Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t-2 border-[#E5A812]/40 relative overflow-hidden">
      {/* Mustard Yellow accent stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-neutral-900 via-[#E5A812] to-neutral-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-neutral-900 rounded-2xl shadow-md border border-[#E5A812]/50">
                <TudoLogo size="sm" lightMode={true} />
              </div>
              <div>
                <span className="text-xl font-black font-heading tracking-wide text-white block">
                  TUDO
                </span>
                <span className="text-xs font-bold text-[#E5A812] tracking-wider uppercase block">
                  Maraş Dondurma
                </span>
              </div>
            </div>

            {/* Exact text: "1981'den Beri Lezzet Yolculuğu" */}
            <p className="mt-4 text-base font-bold text-amber-200 font-heading">
              "1981'den Beri Lezzet Yolculuğu"
            </p>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              Seyyar dondurmacılıktan 3 şubeye uzanan 40 yılı aşkın dövme dondurma ve el yapımı özel lezzetler mirası.
            </p>

            {/* Instagram link (empty link # as requested) */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                id="footer-instagram-link"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-[#E5A812] hover:text-black flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md border border-neutral-800"
                aria-label="Instagram"
                title="Instagram Sayfamız"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/905446171451"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-[#E5A812] hover:text-black flex items-center justify-center text-[#E5A812] transition-all duration-300 hover:scale-110 shadow-md border border-neutral-800"
                aria-label="WhatsApp"
                title="WhatsApp Hattı"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>

              <a
                href="tel:05446171451"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-[#E5A812] hover:text-black flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md border border-neutral-800"
                aria-label="Telefon"
                title="Telefon"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Hızlı Menü */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5A812] mb-4">
              Lezzetlerimiz
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href="#dondurmalar" className="hover:text-[#E5A812] transition-colors flex items-center gap-1.5">
                  <span>🍦 19 Çeşit Maraş Dondurması</span>
                </a>
              </li>
              <li>
                <a href="#cigkofte" className="hover:text-[#E5A812] transition-colors flex items-center gap-1.5">
                  <span>🥗 Özel Üretim El Yapımı Çiğköfte</span>
                </a>
              </li>
              <li>
                <a href="#misir" className="hover:text-[#E5A812] transition-colors flex items-center gap-1.5">
                  <span>🌽 Taze Bardakta Süt Mısır</span>
                </a>
              </li>
              <li>
                <a href="#helva" className="hover:text-[#E5A812] transition-colors flex items-center gap-1.5">
                  <span>🍨 Helvacı Ali İrmik Helvası</span>
                </a>
              </li>
              <li>
                <a href="#toptan" className="hover:text-[#E5A812] transition-colors flex items-center gap-1.5">
                  <span>📦 Toptan Dondurma Tedariği</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: İletişim Bilgileri */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5A812] mb-4">
              Doğrudan İletişim
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5A812] shrink-0" />
                <a href="tel:05446171451" className="hover:text-[#E5A812] font-semibold text-white">
                  0544 617 1451
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#E5A812] shrink-0" />
                <a
                  href="https://wa.me/905446171451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5A812] font-semibold text-white"
                >
                  WhatsApp: 0544 617 1451
                </a>
              </li>
              <li className="text-neutral-400 text-xs">
                3 şubemiz hizmetinizde • Bizi ziyaret edin
              </li>
              <li className="text-neutral-300 text-xs font-semibold">
                Açık Olduğumuz Saatler: <span className="text-[#E5A812] font-bold">13:00 - 01:00</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Babadan Oğula Geleneği */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-neutral-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#E5A812] uppercase tracking-wider block mb-2">
                Ustalık & Güven
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                "Hakiki Maraş dövme dondurmasının kıvamı, 1981'den bu yana sevgi ve özenle yoğruluyor."
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-[#E5A812] hover:text-black text-xs font-semibold text-white transition-colors cursor-pointer border border-neutral-800"
            >
              <span>Yukarı Çık</span>
              <ArrowUp className="w-4 h-4 text-[#E5A812]" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright: Exactly "© 2026 Tudo Maraş Dondurma - Tüm hakları saklıdır." as requested */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Tudo Maraş Dondurma - Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1 text-neutral-400">
            <span>1981'den Günümüze</span>
            <span className="text-[#E5A812] font-bold">•</span>
            <span className="text-white font-semibold">Babadan Oğula</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

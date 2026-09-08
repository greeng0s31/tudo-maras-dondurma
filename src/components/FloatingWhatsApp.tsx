import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/905446171451?text=' +
    encodeURIComponent('Merhaba, Tudo Maraş Dondurma hakkında bilgi ve sipariş için yazıyorum.');

  return (
    <aside
      aria-label="Hızlı WhatsApp İletişim Butonu"
      className="fixed bottom-6 right-6 z-40 flex items-center group select-none"
    >
      {/* Tooltip badge */}
      <span className="hidden sm:inline-flex items-center gap-1.5 mr-3 px-3.5 py-1.5 rounded-full bg-black/95 text-white text-xs font-semibold shadow-xl border border-[#E5A812]/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-[#E5A812] animate-ping" />
        <span className="text-[#E5A812] font-bold">0544 617 1451</span> • WhatsApp Sipariş
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-950/40 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        aria-label="WhatsApp ile İletişime Geç: 0544 617 1451"
      >
        {/* Soft pulse glow ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />
      </a>
    </aside>
  );
};

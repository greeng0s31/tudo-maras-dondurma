import React, { useState } from 'react';
import { TudoLogo } from './TudoLogo';
import { Phone, MessageCircle, Menu, X, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Dondurmalar (19 Çeşit)', href: '#dondurmalar' },
    { name: 'Özel Çiğ Köfte', href: '#cigkofte' },
    { name: 'Süt Mısır', href: '#misir' },
    { name: 'İrmik Helvası', href: '#helva' },
    { name: 'Toptan Satış', href: '#toptan' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0D] text-white shadow-2xl border-b border-[#E5A812]/30">
      {/* Top Banner: 3 Şubemiz & Telefon in Noir & Mustard */}
      <div className="bg-[#050505] text-xs py-1.5 px-4 text-neutral-300 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E5A812] animate-pulse" />
            <span className="font-semibold text-white">3 şubemiz hizmetinizde</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline text-[#E5A812] font-semibold">1981'den Günümüze • Babadan Oğula</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hover:text-[#E5A812] transition-colors flex items-center gap-1 cursor-pointer text-neutral-300"
                title="Giriş animasyonunu tekrar izle"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E5A812]" />
                <span className="hidden md:inline">Giriş Animasyonu</span>
              </button>
            )}
            <a
              href="tel:05446171451"
              className="hover:text-[#E5A812] transition-colors flex items-center gap-1 text-neutral-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A812]" />
              <span>0544 617 1451</span>
            </a>
            <a
              href="https://wa.me/905446171451?text=Merhaba,%20Tudo%20Maraş%20Dondurma%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5A812] hover:text-[#F5B41E] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-14 bg-neutral-900 rounded-xl p-1 shadow-md border border-[#E5A812]/50 flex items-center justify-center transition-transform group-hover:scale-105">
              <TudoLogo size="sm" lightMode={true} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-wide text-white flex items-center gap-1.5">
                TUDO
                <span className="text-[#E5A812] text-sm sm:text-base font-bold uppercase tracking-wider">
                  Maraş Dondurma
                </span>
              </span>
              <span className="text-[11px] font-semibold text-neutral-400 tracking-wider">
                1981'den Günümüze • <span className="text-[#E5A812]">Babadan Oğula</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-neutral-200 hover:text-[#E5A812] hover:bg-neutral-900 transition-all duration-150 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/905446171451?text=Merhaba,%20sipariş%20ve%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-black/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Sipariş</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/905446171451"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#E5A812] text-black font-bold"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#E5A812] hover:bg-neutral-800 focus:outline-none"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-t border-neutral-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-neutral-200 hover:text-[#E5A812] hover:bg-neutral-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="https://wa.me/905446171451?text=Merhaba,%20sipariş%20ve%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E5A812] text-black font-black text-center text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp: 0544 617 1451</span>
            </a>
            <a
              href="tel:05446171451"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-800 text-white font-semibold text-center text-sm"
            >
              <Phone className="w-4 h-4 text-[#E5A812]" />
              <span>Telefonla Ara: 0544 617 1451</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

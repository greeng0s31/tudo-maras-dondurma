import React from 'react';
import { TudoLogo } from './TudoLogo';
import { ArrowDown, Sparkles, PhoneCall, Award, IceCream } from 'lucide-react';
import heroImg from '../assets/images/maras_dondurma_hero_1788800610474.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#0D0D0D] text-white">
      {/* Background with Ice Cream photography & Noir overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroImg}
          alt="Tudo Maraş Dondurması"
          className="w-full h-full object-cover object-center opacity-25 lg:opacity-30 mix-blend-luminosity scale-105"
        />
        {/* Sleek noir gradients & mustard aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/85 to-[#141414]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,168,18,0.15)_0%,transparent_70%)]" />

        {/* Decorative waffle pattern subtle mesh */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(#E5A812 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center flex flex-col items-center">
        {/* Heritage Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#E5A812]/70 text-[#E5A812] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xl mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-[#E5A812]" />
          <span>1981'den Beri • Babadan Oğula Maraş Geleneği</span>
        </div>

        {/* Logo Badge in Hero */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <div className="p-3 bg-neutral-900 rounded-3xl shadow-2xl shadow-black/80 border-2 border-[#E5A812]">
            <TudoLogo size="md" lightMode={true} />
          </div>
        </div>

        {/* Big Catchy Title: "Tudo Maraş Dondurma" in Mustard */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-5xl leading-tight drop-shadow-md">
          <span className="text-white">Tudo </span>
          <span className="text-[#E5A812] drop-shadow-[0_4px_16px_rgba(229,168,18,0.4)]">
            Maraş Dondurma
          </span>
        </h1>

        {/* Subtitle: "1981'den Günümüze Lezzet Yolculuğu" */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-amber-200/95 tracking-wide max-w-3xl">
          "1981'den Günümüze Lezzet Yolculuğu"
        </p>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
          Hakiki keçi sütü, yabani orkide salebi ve 40 yılı aşkın dövme dondurma ustalığıyla hazırlanan 19 eşsiz lezzet.
        </p>

        {/* Trust Badges: 3 Şube & Toptan Satış */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-[#E5A812]/30 text-neutral-200">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5A812] animate-pulse" />
            <span>3 Şubemiz Hizmetinizde</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-[#E5A812]/30 text-neutral-200">
            <IceCream className="w-4 h-4 text-[#E5A812]" />
            <span>19 Eşsiz Dondurma Çeşidi</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-[#E5A812]/30 text-neutral-200">
            <Award className="w-4 h-4 text-[#E5A812]" />
            <span>Hakiki Maraş Kıvamı</span>
          </div>
        </div>

        {/* Action Buttons: "Trendyol'dan Sipariş Ver", "Dondurma Çeşitlerimiz" & "Toptan Satış İçin Tıkla" */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://tgoyemek.com/restoranlar/332211"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-trendyol-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-black text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 shadow-xl cursor-pointer"
            style={{
              backgroundColor: '#FF5A3C',
              boxShadow: '0 8px 25px rgba(255, 90, 60, 0.45)',
            }}
          >
            <span className="text-xl leading-none">🛵</span>
            <span>Trendyol'dan Sipariş Ver</span>
          </a>

          <a
            href="#dondurmalar"
            id="hero-flavors-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-base sm:text-lg shadow-xl shadow-black/60 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>Dondurma Çeşitlerimiz</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>

          <a
            href="#toptan"
            id="hero-wholesale-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border-2 border-[#E5A812] text-[#E5A812] font-bold text-base sm:text-lg shadow-xl shadow-black/40 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-5 h-5 text-[#E5A812]" />
            <span>Toptan Satış İçin Tıkla</span>
          </a>
        </div>
      </div>

      {/* Curved bottom edge wave */}
      <div className="absolute bottom-0 inset-x-0 h-10 overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 fill-[#121212]">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

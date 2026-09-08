import React from 'react';

export const FloatingTrendyol: React.FC = () => {
  return (
    <aside
      aria-label="Sabit Trendyol Go Sipariş Butonu"
      className="fixed bottom-6 left-6 z-40 flex items-center group select-none"
    >
      <a
        href="https://tgoyemek.com/restoranlar/332211"
        target="_blank"
        rel="noopener noreferrer"
        id="fixed-trendyol-btn"
        aria-label="Trendyol Go ile Sipariş Ver"
        className="relative flex flex-col items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full text-white font-black shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white cursor-pointer"
        style={{
          backgroundColor: '#FF5A3C',
          boxShadow: '0 6px 20px rgba(255, 90, 60, 0.55)',
        }}
      >
        {/* Soft pulse glow ring */}
        <span
          className="absolute -inset-1 rounded-full opacity-40 animate-ping pointer-events-none"
          style={{ backgroundColor: '#FF5A3C' }}
        />

        <span className="text-xl sm:text-2xl leading-none -mb-0.5">🛵</span>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-tight leading-none text-white drop-shadow">
          Go
        </span>
      </a>

      {/* Tooltip badge */}
      <span className="hidden sm:inline-flex items-center gap-1.5 ml-3 px-3.5 py-1.5 rounded-full bg-black/95 text-white text-xs font-semibold shadow-xl border border-[#FF5A3C]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-[#FF5A3C] animate-ping" />
        <span className="text-[#FF5A3C] font-bold">Trendyol Go</span> • Hemen Sipariş Ver
      </span>
    </aside>
  );
};

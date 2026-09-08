import React from 'react';
import { TudoLogo } from './TudoLogo';
import { History, Store, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-20 bg-[#121212] text-white relative overflow-hidden">
      {/* Decorative subtle background elements in mustard yellow */}
      <div className="absolute top-10 right-5 w-80 h-80 rounded-full bg-[#E5A812]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-96 h-96 rounded-full bg-[#E5A812]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Heritage Card in Charcoal & Mustard */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Background Glow Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E5A812] via-amber-600 to-yellow-500 rounded-3xl opacity-20 blur-xl" />

              <div className="relative bg-[#1A1A1A] rounded-3xl p-8 shadow-2xl border border-[#E5A812]/30 flex flex-col items-center text-center">
                {/* Logo Presentation */}
                <div className="p-4 bg-gradient-to-b from-black to-neutral-900 rounded-2xl shadow-inner border-2 border-[#E5A812] mb-6">
                  <TudoLogo size="lg" lightMode={true} />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#262626] text-[#E5A812] text-xs font-bold uppercase tracking-wider mb-2 border border-[#E5A812]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5A812]" />
                  Babadan Oğula Aktarılan Ustalık
                </div>

                <h3 className="text-xl font-bold text-white font-heading">
                  1981'den Beri Değişmeyen Tutku
                </h3>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  Niğde sokaklarında seyyar dondurma arabasıyla atılan ilk tohumlar, bugün 3 şubemizde lezzet severlerle buluşuyor.
                </p>

                {/* Micro Stats */}
                <div className="grid grid-cols-3 gap-2 w-full mt-6 pt-6 border-t border-neutral-800 text-center">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="block text-2xl font-black text-[#E5A812]">1981</span>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase">Kuruluş</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="block text-2xl font-black text-[#E5A812]">3</span>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase">Şube</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="block text-2xl font-black text-white">19</span>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase">Çeşit Tat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sincere Storytelling */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] text-[#E5A812] font-bold text-xs uppercase tracking-wider mb-4 border border-[#E5A812]/40 shadow-sm">
              <History className="w-4 h-4 text-[#E5A812]" />
              Hakkımızda & Hikayemiz
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
              Lezzetin Kökleri: <br />
              <span className="text-[#E5A812]">Seyyardan 3 Şubeli Markaya</span>
            </h2>

            {/* Prompt's exact words highlighted with utmost elegance */}
            <div className="mt-6 p-6 rounded-2xl bg-neutral-900/90 border-l-4 border-[#E5A812] shadow-lg border border-neutral-800">
              <p className="text-lg sm:text-xl font-medium text-amber-100 leading-relaxed italic">
                "1981 yılında Niğde'de seyyar dondurmacı olarak başlayan yolculuğumuz, bugün 3 şubeyle devam ediyor. Geleneksel Maraş dondurması lezzetini modern dokunuşlarla buluşturuyoruz."
              </p>
            </div>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Babadan oğula aktarılan 40 yılı aşkın tecrübemizle, hakiki dövme Maraş dondurmasının kıvamını ve doğallığını ilk günkü heyecanla koruyoruz. Katkısız taze süt, dağ salebi ve özenle seçilen meyvelerle hazırladığımız lezzetleri her gün taze olarak sunuyoruz.
            </p>

            <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Bugün dondurmanın yanı sıra özel üretim el yapımı çiğköftemiz, taze bardakta süt mısırımız ve meşhur Helvacı Ali irmik helvamız ile damaklarda iz bırakmaya devam ediyoruz.
            </p>

            {/* Feature bullets in Noir & Mustard */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#1A1A1A] border border-neutral-800 shadow-md">
                <CheckCircle2 className="w-5 h-5 text-[#E5A812] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Hakiki Maraş Usulü Dövme</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Bıçakla kesilen, uzayan geleneksel kıvam.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#1A1A1A] border border-neutral-800 shadow-md">
                <Store className="w-5 h-5 text-[#E5A812] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">3 Şubemiz Hizmetinizde</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Aileniz ve sevdiklerinizle keyifli anlar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TudoLogo } from './TudoLogo';
import { Sparkles, ArrowRight, Award } from 'lucide-react';
import cigkofteImg from '../assets/images/cigkofte_tabagi_1788800591360.jpg';

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 350);
          return 100;
        }
        return prev + 2.5;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background layer 1: Blurred Çiğköfte Imagery with Noir Vignette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={cigkofteImg}
          alt="Çiğköfte Arka Plan"
          className="w-full h-full object-cover filter blur-2xl scale-110 opacity-25 brightness-50 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#141414]/90 to-[#0A0A0A]" />
      </div>

      {/* Background layer 2: Blurred Artistic Çiğköfte Badge with Mustard Accent */}
      <motion.div
        animate={{
          rotate: [0, 6, -6, 0],
          scale: [0.95, 1.05, 0.95],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] pointer-events-none rounded-full flex items-center justify-center filter blur-md select-none"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
          <circle cx="200" cy="200" r="180" fill="#141414" stroke="#E5A812" strokeWidth="6" strokeDasharray="16 8" />
          <circle cx="200" cy="200" r="150" fill="#1C1C1C" stroke="#B45309" strokeWidth="3" />
          <defs>
            <path id="badgeTextCircle" d="M 200,200 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
          </defs>
          <text fill="#E5A812" fontSize="19" fontWeight="900" letterSpacing="4">
            <textPath href="#badgeTextCircle" startOffset="0%">
              ★ ÖZEL ÜRETİM ÇİĞ KÖFTE ★ EL YAPIMI LEZZET ★
            </textPath>
          </text>
          <g transform="translate(140, 140) scale(0.6)">
            <path
              d="M 50,20 C 80,0 120,10 150,40 C 180,70 170,120 140,150 C 110,180 60,180 30,150 C 0,120 20,40 50,20 Z"
              fill="#242424"
              stroke="#E5A812"
              strokeWidth="5"
            />
            <circle cx="80" cy="80" r="10" fill="#E5A812" />
            <circle cx="110" cy="100" r="8" fill="#F59E0B" />
            <circle cx="90" cy="120" r="9" fill="#B45309" />
          </g>
        </svg>
      </motion.div>

      {/* Floating mustard-yellow subtle spark particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#E5A812] blur-[1px] animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#F59E0B] blur-[1px] animate-pulse opacity-75" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#E5A812] blur-[1px] animate-pulse opacity-50" />
        <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 rounded-full bg-amber-300 blur-[1px] animate-ping opacity-60" />
      </div>

      {/* Foreground Content: Tudo Maraş Dondurma Animated Entrance */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-lg">
        {/* Animated Badge Container */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: 'spring', bounce: 0.3 }}
          className="relative group p-4 rounded-3xl"
        >
          {/* Mustard halo */}
          <div className="absolute -inset-4 bg-[#E5A812]/20 rounded-full blur-2xl animate-pulse" />

          {/* Logo with explicit Babadan Oğula */}
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <TudoLogo size="xl" lightMode={true} />
          </div>
        </motion.div>

        {/* Title and Heritage: Specifically highlighting "Babadan Oğula" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] border border-[#E5A812]/50 text-[#E5A812] text-xs font-bold tracking-wider uppercase mb-3 shadow-lg">
            <Award className="w-4 h-4 text-[#E5A812]" />
            <span>Since 1981 • Babadan Oğula</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            Tudo Maraş Dondurma
          </h1>
          <p className="text-neutral-300 text-sm mt-2 font-medium tracking-wide">
            "1981'den Günümüze • Babadan Oğula Geleneksel Lezzet"
          </p>
        </motion.div>

        {/* Progress Bar & Skip Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full mt-8 flex flex-col items-center gap-4"
        >
          <div className="w-52 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-[#E5A812]/30 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-600 via-[#E5A812] to-amber-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            onClick={onComplete}
            id="intro-skip-button"
            className="group mt-2 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#E5A812] hover:bg-[#F5B41E] text-black font-black text-sm transition-all duration-200 hover:scale-105 shadow-xl shadow-black/60 cursor-pointer"
          >
            <span>Siteye Giriş Yap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

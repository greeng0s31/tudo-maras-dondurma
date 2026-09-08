/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IntroSplash } from './components/IntroSplash';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { IceCreamSection } from './components/IceCreamSection';
import { CigkofteSection } from './components/CigkofteSection';
import { CornSection } from './components/CornSection';
import { HelvaSection } from './components/HelvaSection';
import { WholesaleSection } from './components/WholesaleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingTrendyol } from './components/FloatingTrendyol';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 flex flex-col font-sans">
      {/* Intro Splash Animation (with blurred çiğköfte background & animated logo) */}
      <AnimatePresence>
        {showSplash && (
          <IntroSplash onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Structure */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col flex-1"
      >
        {/* Navigation Bar */}
        <Navbar onReplayIntro={() => setShowSplash(true)} />

        {/* 1. Üst Bölüm (Hero) */}
        <main className="flex-1">
          <HeroSection />

          {/* 2. Hakkımızda Bölümü */}
          <AboutSection />

          {/* 3. Dondurma Çeşitleri (17 Tat Grid) */}
          <IceCreamSection />

          {/* 4. Çiğ Köfte Bölümü */}
          <CigkofteSection />

          {/* 5. Mısır Bölümü */}
          <CornSection />

          {/* 6. İrmik Helvası Bölümü */}
          <HelvaSection />

          {/* 7. Toptan Satış Bölümü */}
          <WholesaleSection />

          {/* 8. İletişim Bölümü */}
          <ContactSection />
        </main>

        {/* 9. Alt Bölüm (Footer) */}
        <Footer />

        {/* Fixed Floating Action Buttons (Right-Bottom Stack) */}
        <FloatingTrendyol />
        <FloatingWhatsApp />
      </motion.div>
    </div>
  );
}

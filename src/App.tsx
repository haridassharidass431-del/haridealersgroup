import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CanvasBackground } from './components/common/CanvasBackground';
import { CinematicIntro } from './components/common/CinematicIntro';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { XeroxPage } from './pages/XeroxPage';
import { ClothingPage } from './pages/ClothingPage';
import { ArtigencePage } from './pages/ArtigencePage';
import { DigitalServicesPage } from './pages/DigitalServicesPage';
import { RndPage } from './pages/RndPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Helper to scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CinematicIntro />
        <CanvasBackground />
        
        <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#D4AF37]/30 selection:text-white">
          <Navbar />
          <CartDrawer />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/xerox" element={<XeroxPage />} />
              <Route path="/clothing" element={<ClothingPage />} />
              <Route path="/shop" element={<ClothingPage />} />
              <Route path="/artigence" element={<ArtigencePage />} />
              <Route path="/digital-services" element={<DigitalServicesPage />} />
              <Route path="/rnd" element={<RndPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

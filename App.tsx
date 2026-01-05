
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Features from './components/Features';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  // Global handler for smooth scrolling to avoid iframe navigation issues
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        
        // Handle internal links
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update URL hash without reload
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="servicos">
          <Services />
        </section>

        <Benefits />
        
        <Features />

        <section id="quem-somos">
          <About />
        </section>

        <Gallery />

        <ContactForm />

        <section id="recomendacoes">
          <Testimonials />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
};

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import Blog from './components/Blog';
import FileUpload from './components/FileUpload';
import ParallaxSection from './components/ParallaxSection';
import NotificationSystem from './components/NotificationSystem';
import InteractiveElements from './components/InteractiveElements';
import ScrollAnimations from './components/ScrollAnimations';

function App() {
  return (
    <div className="min-h-screen">
      <InteractiveElements />
      <ScrollAnimations />
      <NotificationSystem />
      <Header />
      <Hero />
      <ParallaxSection />
      <About />
      <Services />
      <FileUpload />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;
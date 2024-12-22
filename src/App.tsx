import React from 'react';
import { Menu, MapPin, Clock, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
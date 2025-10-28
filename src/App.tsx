import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PriceList } from './components/PriceList';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <PriceList />
      <Portfolio />
      <Contact />
      <Footer />
    </div>;
}
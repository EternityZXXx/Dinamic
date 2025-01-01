import * as React from 'react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { FeedBacks } from '@/components/FeedBacks';
import '@/index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <Hero />
          <Products />
          <About />
          <Contact />
          <FAQ />
          <FeedBacks />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
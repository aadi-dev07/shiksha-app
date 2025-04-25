
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import AiLearning from '@/components/sections/AiLearning';
import Programs from '@/components/sections/Programs';
import Credits from '@/components/sections/Credits';
import ChatBot from '@/components/sections/ChatBot';
import Referral from '@/components/sections/Referral';
import YouTube from '@/components/sections/YouTube';
import Parents from '@/components/sections/Parents';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

const Index = () => {
  useEffect(() => {
    document.title = "ShikshaSetuvah - Gyaan Ka Setu, Har Bacche Tak";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <AiLearning />
      <Programs />
      <Credits />
      <ChatBot />
      <Referral />
      <YouTube />
      <Parents />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

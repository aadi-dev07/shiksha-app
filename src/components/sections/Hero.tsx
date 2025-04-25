
import React from 'react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/ui/reveal';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500&h=500')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between py-12 md:py-24">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">
                Gyaan Ka Setu, Har Bacche Tak
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-lg mx-auto lg:mx-0">
              AI-powered learning for state board students at just ₹301
            </p>
          </Reveal>

          <Reveal delay={400}>
            <Button className="btn-primary text-lg">
              Start Learning Now
            </Button>
          </Reveal>
        </div>
        
        <div className="w-full lg:w-1/2">
          <Reveal direction="right">
            <div className="relative w-full max-w-md mx-auto animate-float">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Students learning" 
                className="rounded-2xl shadow-2xl border-4 border-white/50"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg card-hover">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-purple-light rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot text-purple"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">AI-Powered Learning</p>
                    <p className="text-xs text-gray-600">Personalized for you</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg card-hover">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-light rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-blue"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">15+ State Boards</p>
                    <p className="text-xs text-gray-600">Supported & growing</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;


import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">
            ShikshaSetuvah
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-purple transition-colors">About</a>
          <a href="#programs" className="text-gray-700 hover:text-purple transition-colors">Programs</a>
          <a href="#features" className="text-gray-700 hover:text-purple transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple transition-colors">Testimonials</a>
          <Button 
            asChild
            className="primary-gradient text-white hover:shadow-lg"
          >
            <a href="#cta">Start Learning</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <nav className="container mx-auto flex flex-col space-y-4 px-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#programs" 
              className="text-gray-700 hover:text-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button 
              asChild
              className="primary-gradient text-white w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#cta">Start Learning</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

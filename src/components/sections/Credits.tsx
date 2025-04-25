
import React, { useState, useEffect, useRef } from 'react';
import Reveal from '@/components/ui/reveal';

const Credits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const items = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
      ),
      title: 'Earn Credits',
      description: 'Complete lessons, pass quizzes, and stay consistent to earn credits'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
      ),
      title: 'Unlock Badges',
      description: 'Earn achievements and badges as you progress through different levels'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      ),
      title: 'Access Premium',
      description: 'Use earned credits to unlock premium content and features'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-purple/5 to-blue-light/20">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Credit-Based <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">Unlock System</span>
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Our gamified learning platform rewards your progress with credits that 
            unlock additional content and features.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 200}>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center card-hover">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple to-blue-dark rounded-full flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-16 relative h-40" ref={ref}>
          {isVisible && (
            <>
              {/* Floating Coins */}
              <div className="absolute left-1/4 animate-float" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
                </div>
              </div>
              
              <div className="absolute left-1/2 top-12 animate-float" style={{ animationDelay: '0.6s' }}>
                <div className="w-10 h-10 bg-purple rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                </div>
              </div>
              
              <div className="absolute right-1/4 animate-float" style={{ animationDelay: '0.9s' }}>
                <div className="w-14 h-14 bg-blue-dark rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Credits;

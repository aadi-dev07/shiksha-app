
import React from 'react';
import Reveal from '@/components/ui/reveal';

const YouTube = () => {
  const benefits = [
    {
      title: "Secure Content Delivery",
      description: "Videos are securely delivered through our PRD system, ensuring only enrolled students can access them.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
      )
    },
    {
      title: "Affordable Learning",
      description: "Access high-quality content at a fraction of the cost of traditional private coaching.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
      )
    },
    {
      title: "Engaging Content",
      description: "Videos are designed to be engaging and easy to understand, with visual aids and examples.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
      )
    },
    {
      title: "Offline Access",
      description: "Download videos when you have internet access and watch them later offline.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
      )
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">YouTube</span> Integration
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Our platform leverages the power of YouTube to deliver high-quality 
            educational content securely and affordably to all students.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-3xl p-4 md:p-6">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube text-white"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Secure Video Library</h3>
                    <p className="text-gray-600">
                      Access thousands of educational videos covering your entire syllabus
                    </p>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-3 shadow-lg">
                  <button className="text-gray-700 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
                  </button>
                  
                  <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </button>
                  
                  <button className="text-gray-700 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
                  </button>
                </div>
                
                {/* Lock Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock text-red-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
              </div>
              
              {/* Video Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-sm"></div>
                ))}
              </div>
            </div>
          </Reveal>
          
          <Reveal direction="right">
            <div className="space-y-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Secure, Scalable Learning</h3>
                <p className="text-gray-700">
                  Our YouTube integration allows us to deliver high-quality educational content to thousands of students 
                  at an affordable price, while ensuring content creators are fairly compensated.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-5 card-hover">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center mr-4 text-red-500">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default YouTube;

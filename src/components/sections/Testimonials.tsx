
import React, { useState, useEffect } from 'react';
import Reveal from '@/components/ui/reveal';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Class 9 Student, UP Board",
      content: "ShikshaSetuvah has completely changed how I learn. The AI tutor explains concepts in a way I can actually understand. I've improved my grades in Science and Math.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 2,
      name: "Rahul Mehra",
      role: "Class 11 Student, Maharashtra Board",
      content: "The affordable price made it possible for me to get quality learning resources. The videos and practice questions have helped me prepare for my board exams.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Class 10 Student, Gujarat Board",
      content: "I love that I can ask questions in Gujarati and get answers right away. The eduSaathi chatbot helps me whenever I'm stuck, even late at night when I'm studying.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: 4,
      name: "Vijay Kumar",
      role: "Parent of Class 8 Student",
      content: "As a parent who didn't go to school, I was worried about helping my daughter with studies. ShikshaSetuvah sends me updates about her progress, and I can easily talk to teachers.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Student <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">Impact</span>
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Hear from students and parents who have experienced the transformative power of ShikshaSetuvah.
          </p>
        </Reveal>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <Reveal delay={400} className="flex space-x-2">
            <div className="flex items-end space-x-1">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-purple/20 flex items-center justify-center rounded-2xl">
                <span className="text-3xl md:text-5xl font-bold text-purple">20</span>
              </div>
              <span className="text-xl md:text-3xl font-bold text-gray-800">K+</span>
            </div>
            <p className="text-gray-600 text-lg">Learners</p>
          </Reveal>
          
          <div className="h-16 border-l border-gray-200 mx-8 hidden md:block"></div>
          
          <Reveal delay={600} className="flex space-x-2 my-8 md:my-0">
            <div className="flex items-end space-x-1">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-light/30 flex items-center justify-center rounded-2xl">
                <span className="text-3xl md:text-5xl font-bold text-blue-dark">15</span>
              </div>
              <span className="text-xl md:text-3xl font-bold text-gray-800">+</span>
            </div>
            <p className="text-gray-600 text-lg">State Boards</p>
          </Reveal>
          
          <div className="h-16 border-l border-gray-200 mx-8 hidden md:block"></div>
          
          <Reveal delay={800} className="flex space-x-2">
            <div className="flex items-end space-x-1">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-orange/20 flex items-center justify-center rounded-2xl">
                <span className="text-3xl md:text-5xl font-bold text-orange">85</span>
              </div>
              <span className="text-xl md:text-3xl font-bold text-gray-800">%</span>
            </div>
            <p className="text-gray-600 text-lg">Grade Improvement</p>
          </Reveal>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="bg-gradient-to-br from-purple/5 to-blue-light/20 rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="mb-4 md:mb-0 md:mr-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-4 flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-yellow-400">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                        
                        <p className="italic text-gray-700 mb-6">"{testimonial.content}"</p>
                        
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                  index === activeIndex ? 'bg-purple' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-purple transition-colors hidden md:block"
            onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg>
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-purple transition-colors hidden md:block"
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

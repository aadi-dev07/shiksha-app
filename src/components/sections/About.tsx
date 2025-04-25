
import React from 'react';
import Reveal from '@/components/ui/reveal';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">ShikshaSetuvah</span>
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            We're on a mission to bridge the educational divide between private and government schools,
            making quality education accessible to every student in India.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange/20 to-purple/20 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  At ShikshaSetuvah, we believe that every child deserves access to quality education, 
                  regardless of their financial background or geographic location.
                </p>
                <p className="text-gray-700 mb-4">
                  Through innovative technology and affordable pricing, we're making 
                  personalized learning accessible to government school students across India.
                </p>
                <p className="text-gray-700">
                  Our AI-powered platform adapts to each student's learning style, pace, 
                  and needs, ensuring they get the most effective educational experience.
                </p>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg card-hover hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-orange"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">20,000+ Students</p>
                    <p className="text-xs text-gray-600">And growing everyday</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal direction="right">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Private Schools</h4>
                  <span className="bg-purple/10 text-purple font-medium px-3 py-1 rounded-full text-sm">High Cost</span>
                </div>
                <div className="bg-gray-100 rounded-full h-6 mb-2">
                  <div className="bg-purple h-6 rounded-full w-[80%]"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Quality Education</span>
                  <span>80%</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Government Schools</h4>
                  <span className="bg-orange/10 text-orange font-medium px-3 py-1 rounded-full text-sm">Limited Resources</span>
                </div>
                <div className="bg-gray-100 rounded-full h-6 mb-2">
                  <div className="bg-orange h-6 rounded-full w-[40%]"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Quality Education</span>
                  <span>40%</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">With ShikshaSetuvah</h4>
                  <span className="bg-blue-light text-blue-dark font-medium px-3 py-1 rounded-full text-sm">Affordable</span>
                </div>
                <div className="bg-gray-100 rounded-full h-6 mb-2">
                  <div className="bg-gradient-to-r from-purple to-blue h-6 rounded-full w-[90%]"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Quality Education</span>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;

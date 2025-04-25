
import React, { useState } from 'react';
import Reveal from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Programs = () => {
  const { toast } = useToast();
  
  const programs = [
    {
      id: 'alpha',
      title: 'Alpha Program',
      price: '₹301',
      features: [
        'Complete Academic Syllabus',
        'AI-Generated Practice Tests',
        'Video Lessons for Key Concepts',
        'Progress Tracking',
        'Limited eduSaathi Support'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      ),
      color: 'bg-purple text-white'
    },
    {
      id: 'beta',
      title: 'Beta Program',
      price: '₹251',
      features: [
        'Skill Development Courses',
        'Computer Basics Training',
        'Spoken English Practice',
        'Interview Preparation',
        'Career Guidance'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
      ),
      color: 'bg-blue-dark text-white'
    },
    {
      id: 'combo',
      title: 'Combo Program',
      price: '₹501',
      features: [
        'Everything in Alpha & Beta',
        'Priority eduSaathi Support',
        'Exclusive Study Materials',
        'Live Doubt-Clearing Sessions',
        'Report Cards for Parents'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      ),
      color: 'bg-orange text-white'
    }
  ];
  
  const handleEnroll = (programId: string) => {
    toast({
      title: "Program Selected",
      description: `You've selected the ${programs.find(p => p.id === programId)?.title}. Continue to registration.`,
    });
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">Programs</span>
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Choose the program that best fits your educational needs and budget.
            All our programs provide exceptional value at affordable prices.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 200}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover h-full flex flex-col">
                {/* Header */}
                <div className={`${program.color} p-6 text-center`}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-3xl font-bold">{program.price}</p>
                </div>
                
                {/* Features */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="text-purple mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA */}
                <div className="p-6 border-t border-gray-100">
                  <Button 
                    onClick={() => handleEnroll(program.id)}
                    className="w-full btn-primary"
                    variant="outline"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;

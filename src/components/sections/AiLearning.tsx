
import React from 'react';
import Reveal from '@/components/ui/reveal';

const AiLearning = () => {
  const steps = [
    {
      id: 1,
      title: "Student Onboarding",
      description: "Answer a few simple questions about your grade, subjects, and learning preferences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      )
    },
    {
      id: 2,
      title: "AI Roadmap Creation",
      description: "Our AI analyzes your strengths and areas for improvement to create a personalized learning path.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
      )
    },
    {
      id: 3,
      title: "Smart Study Plan",
      description: "Receive a daily/weekly study schedule with interactive lessons, quizzes, and practice tests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            AI Personalized <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">Learning</span>
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Our artificial intelligence adapts to how you learn, creating a customized 
            educational experience that helps you succeed in your studies.
          </p>
        </Reveal>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Reveal key={step.id} delay={index * 200}>
                <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 card-hover">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-purple to-blue-dark flex items-center justify-center text-white font-bold">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-light/30 rounded-full flex items-center justify-center text-purple">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          {/* Animation Path */}
          <div className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="animate-pulse-scale bg-blue-light/30 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-blue"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiLearning;


import React from 'react';
import Reveal from '@/components/ui/reveal';

const Parents = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-blue-light/30 to-purple-light/30">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">Parent</span> Involvement
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            We believe parents play a crucial role in a student's educational journey. 
            That's why we've built features specifically to keep parents engaged.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Reveal direction="left">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Book a Call Feature */}
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center text-purple mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">Book a Call</h3>
                    <p className="text-gray-600 mb-4">
                      Schedule a call with our educators to discuss your child's progress and learning needs.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">Academic Progress Review</span>
                        </div>
                        <span className="text-sm text-gray-500">15 min</span>
                      </div>
                      
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-dark rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">Subject-Specific Guidance</span>
                        </div>
                        <span className="text-sm text-gray-500">30 min</span>
                      </div>
                      
                      <button className="w-full bg-purple text-white py-2 rounded-lg font-medium hover:bg-purple/90 transition-colors">
                        Schedule Now
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Reports Feature */}
                  <div className="bg-gradient-to-br from-purple/5 to-blue-dark/5 p-6">
                    <div className="w-12 h-12 bg-blue-dark/10 rounded-full flex items-center justify-center text-blue-dark mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">Weekly Reports</h3>
                    <p className="text-gray-600 mb-4">
                      Receive detailed weekly reports about your child's learning progress, attendance, and completed activities.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Math Progress</h4>
                        <span className="text-sm text-gray-500">Last Week</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Lessons Completed</span>
                            <span>8/10</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-blue-dark h-2.5 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Quiz Score</span>
                            <span>85%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-purple h-2.5 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Time Spent</span>
                            <span>4.5 hrs</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-orange h-2.5 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Reveal direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Keeping Parents in the Loop</h3>
                
                <p className="text-gray-700">
                  We understand that many parents want to be involved in their child's education but might not have the time or resources to do so effectively.
                </p>
                
                <p className="text-gray-700">
                  Our platform provides simple tools for parents to stay updated on their child's progress, communicate with educators, and provide necessary support.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-purple"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-gray-700">Weekly progress reports sent via SMS or WhatsApp</span>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-purple"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-gray-700">Simple parent dashboard accessible even on basic phones</span>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-purple"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-gray-700">Scheduled calls with educators in your preferred language</span>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-purple"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-gray-700">Tips for supporting your child's learning at home</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parents;

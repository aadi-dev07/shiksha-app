
import React from 'react';
import Reveal from '@/components/ui/reveal';

const Referral = () => {
  const steps = [
    {
      id: 1,
      title: "Invite Your Friends",
      description: "Share your unique referral link with classmates and friends",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      id: 2,
      title: "They Join ShikshaSetuvah",
      description: "When they sign up using your link and enroll in any program",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
      )
    },
    {
      id: 3,
      title: "Earn Rewards",
      description: "Get 50 credits for each successful referral to use in the platform",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
      )
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-orange/5 to-purple/5">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-orange to-purple bg-clip-text text-transparent">Referral</span> Program
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Invite your friends to join ShikshaSetuvah and earn credits that you can 
            use to unlock premium content and features.
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 200}>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center card-hover h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange to-purple/70 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={600}>
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-bold mb-4">Share Your Link</h3>
                <p className="text-gray-600 mb-6">
                  Copy your unique referral link below and share it with your friends to 
                  start earning rewards.
                </p>
                
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <input 
                    type="text" 
                    value="shikshasetuvah.org/ref/YOUR_ID"
                    readOnly
                    className="flex-grow bg-transparent border-none py-3 px-4 text-gray-700 w-full"
                  />
                  <button className="bg-purple text-white font-medium py-3 px-4">
                    Copy
                  </button>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-grow bg-blue-dark/90 text-white rounded-lg py-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook mr-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span>Share</span>
                  </button>
                  <button className="flex-grow bg-orange text-white rounded-lg py-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    <span>Email</span>
                  </button>
                </div>
              </div>
              
              <div className="col-span-3 bg-gradient-to-br from-orange/20 to-purple/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block mb-4">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange to-purple/70 rounded-full flex items-center justify-center mx-auto animate-pulse-scale">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex space-x-2">
                          {[1, 2, 3].map((item, index) => (
                            <div 
                              key={index}
                              className="w-10 h-10 bg-white rounded-full border-4 border-orange/20 flex items-center justify-center shadow-lg text-gray-700 font-bold"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Track Your Rewards</h3>
                  <p className="text-gray-600">
                    You've earned <span className="font-bold text-purple">150 credits</span> from 3 referrals!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Referral;

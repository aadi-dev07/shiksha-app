
import React from 'react';
import Reveal from '@/components/ui/reveal';

const ChatBot = () => {
  const messages = [
    {
      id: 1,
      text: "मुझे गणित की मदद चाहिए",
      isBot: false
    },
    {
      id: 2,
      text: "ज़रूर! किस विषय पर मदद चाहिए? बीजगणित, ज्यामिति या त्रिकोणमिति?",
      isBot: true
    },
    {
      id: 3,
      text: "बीजगणित - रैखिक समीकरण",
      isBot: false
    },
    {
      id: 4,
      text: "रैखिक समीकरण को हल करने के लिए इन चरणों का पालन करें...",
      isBot: true
    }
  ];

  const features = [
    "Supports 10+ Indian languages",
    "Voice input and output for easy access",
    "24/7 help with school subjects",
    "Explains complex topics in simple terms"
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent">eduSaathi</span> Chatbot
              </h2>
              
              <p className="text-lg text-gray-700">
                Our multilingual AI assistant helps students understand difficult concepts, 
                solve problems, and guide their learning journey in their preferred language.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-purple"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          
          <Reveal direction="right">
            <div className="bg-gradient-to-br from-purple/5 to-blue-light/20 rounded-3xl p-4 md:p-6">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-purple to-blue-dark p-4 flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">eduSaathi</h3>
                    <p className="text-white/70 text-sm">Online • Ready to help</p>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="p-4 bg-gray-50 h-64 overflow-y-auto">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`mb-4 max-w-[80%] ${message.isBot ? 'ml-0' : 'ml-auto'}`}
                    >
                      <div 
                        className={`p-3 rounded-xl ${
                          message.isBot 
                            ? 'bg-white shadow-sm text-gray-800' 
                            : 'bg-gradient-to-r from-purple to-blue-dark text-white'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Chat Input */}
                <div className="p-4 border-t border-gray-100 flex">
                  <div className="flex-grow bg-gray-100 rounded-full px-4 py-2 flex items-center">
                    <input 
                      type="text" 
                      placeholder="Type your question in any language..."
                      className="bg-transparent border-none w-full focus:outline-none text-gray-700"
                    />
                    <button className="ml-2 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                    </button>
                  </div>
                  <button className="ml-2 bg-purple text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;

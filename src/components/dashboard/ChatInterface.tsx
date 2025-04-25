
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mic, Send, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatInterface = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch("https://agentmart.app.n8n.cloud/webhook-test/edusathi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I'll help you with that!",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      toast({
        title: "Not Supported",
        description: "Voice input is not supported in your browser.",
        variant: "destructive",
      });
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-IN";

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript);
    };

    recognition.start();
  };

  return (
    <Card className={cn(
      "fixed transition-all duration-300 ease-in-out bg-white shadow-xl",
      isMobile 
        ? "inset-0 z-50 rounded-none" 
        : "bottom-6 right-6 w-[400px] h-[600px] rounded-2xl",
      !isOpen && "translate-y-full opacity-0 pointer-events-none"
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b bg-gradient-to-r from-purple to-blue-dark rounded-t-2xl">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
          🤖
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white">eduSaathi</h3>
          <p className="text-sm text-white/80 flex items-center gap-1">
            {isTyping ? "Typing..." : "Online"} • <Globe className="w-3 h-3" />
            <span className="text-xs">Multilingual</span>
          </p>
        </div>
        {isMobile && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-white hover:text-white/80"
          >
            Close
          </Button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto h-[calc(100%-140px)] space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.isBot ? "justify-start" : "justify-end"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl p-3 shadow-sm",
                message.isBot
                  ? "bg-gradient-to-r from-purple/10 to-blue-dark/10"
                  : "bg-gradient-to-r from-purple to-blue-dark text-white"
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gradient-to-r from-purple/10 to-blue-dark/10 rounded-2xl p-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-purple/50 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-purple/50 animate-bounce delay-100"></span>
                <span className="w-2 h-2 rounded-full bg-purple/50 animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={handleVoiceInput}
          >
            <Mic className="w-5 h-5 text-purple" />
          </Button>
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything about your syllabus or skills..."
            className="flex-1"
          />
          <Button
            variant="default"
            size="icon"
            onClick={handleSendMessage}
            className="shrink-0 bg-gradient-to-r from-purple to-blue-dark hover:opacity-90"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          <Globe className="w-3 h-3 inline mr-1" />
          You can ask in Hindi, Marathi, Tamil, and other languages
        </p>
      </div>
    </Card>
  );
};

export default ChatInterface;

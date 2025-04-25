
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import ChatInterface from "./ChatInterface";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="fixed bottom-6 right-6 shadow-lg z-40">
        <Button size="lg" className="gap-2" onClick={() => setIsOpen(true)}>
          <MessageSquare className="h-5 w-5" />
          Ask eduSaathi
        </Button>
      </Card>
      <ChatInterface isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatBot;

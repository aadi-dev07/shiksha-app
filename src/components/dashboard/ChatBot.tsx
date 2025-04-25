
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const ChatBot = () => {
  return (
    <Card className="fixed bottom-6 right-6 shadow-lg">
      <Button size="lg" className="gap-2">
        <MessageSquare className="h-5 w-5" />
        Ask eduSaathi
      </Button>
    </Card>
  );
};

export default ChatBot;

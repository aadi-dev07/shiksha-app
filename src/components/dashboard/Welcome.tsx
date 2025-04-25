
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Reveal from "@/components/ui/reveal";

const Welcome = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <Reveal>
      <Card className="overflow-hidden bg-gradient-to-r from-purple/90 to-blue-dark/90">
        <CardContent className="p-6 text-white flex items-center gap-6">
          <Avatar className="h-16 w-16 border-2 border-white">
            <AvatarImage src="/placeholder.svg" alt="Student" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold mb-2">
              {getGreeting()}, Student! 🌟
            </h1>
            <p className="text-white/90">
              Ready to continue your learning journey?
            </p>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
};

export default Welcome;

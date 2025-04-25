
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Reveal from "@/components/ui/reveal";

export const QuizVictories = () => {
  const victories = [
    { 
      title: "Perfect Score",
      description: "Score 100% in any quiz",
      xp: 200,
      achieved: true,
      date: "2024-04-20"
    },
    {
      title: "Quick Thinker",
      description: "Complete a quiz in under 5 minutes",
      xp: 150,
      achieved: true,
      date: "2024-04-18"
    },
    {
      title: "Quiz Master",
      description: "Win 5 quizzes in a row",
      xp: 300,
      achieved: false,
      date: null
    },
  ];

  return (
    <div className="grid gap-6">
      {victories.map((victory, index) => (
        <Reveal key={index}>
          <Card className={victory.achieved ? "bg-purple/5" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    victory.achieved ? "bg-purple/10" : "bg-gray-100"
                  }`}>
                    <Star className={`w-6 h-6 ${
                      victory.achieved ? "text-purple" : "text-gray-400"
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {victory.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {victory.description}
                    </p>
                    {victory.achieved && victory.date && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Achieved on {new Date(victory.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                <Badge variant={victory.achieved ? "default" : "outline"}>
                  {victory.xp} XP
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
};

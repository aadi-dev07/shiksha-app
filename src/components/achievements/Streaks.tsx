
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Reveal from "@/components/ui/reveal";

export const Streaks = () => {
  const streaks = [
    { days: 7, xp: 100, achieved: true },
    { days: 15, xp: 250, achieved: true },
    { days: 30, xp: 500, achieved: false },
  ];

  return (
    <div className="grid gap-6">
      {streaks.map((streak, index) => (
        <Reveal key={index}>
          <Card className={streak.achieved ? "bg-purple/5" : ""}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    streak.achieved ? "bg-purple/10" : "bg-gray-100"
                  }`}>
                    <Star className={`w-6 h-6 ${
                      streak.achieved ? "text-purple" : "text-gray-400"
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {streak.days} Day Streak
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Study for {streak.days} consecutive days
                    </p>
                  </div>
                </div>
                <Badge variant={streak.achieved ? "default" : "outline"}>
                  {streak.xp} XP
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
};

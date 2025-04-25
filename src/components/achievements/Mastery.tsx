
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import Reveal from "@/components/ui/reveal";

export const Mastery = () => {
  const subjects = [
    { name: "Mathematics", progress: 75, level: "Gold" },
    { name: "Science", progress: 60, level: "Silver" },
    { name: "English", progress: 40, level: "Bronze" },
  ];

  return (
    <div className="grid gap-6">
      {subjects.map((subject, index) => (
        <Reveal key={index}>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Trophy className={`w-6 h-6 ${
                      subject.level === "Gold" 
                        ? "text-yellow-500" 
                        : subject.level === "Silver" 
                        ? "text-gray-400" 
                        : "text-orange-600"
                    }`} />
                    <h3 className="font-semibold text-lg">{subject.name}</h3>
                  </div>
                  <Badge>{subject.level}</Badge>
                </div>
                <Progress value={subject.progress} />
                <p className="text-sm text-muted-foreground text-right">
                  {subject.progress}% Mastery
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
};

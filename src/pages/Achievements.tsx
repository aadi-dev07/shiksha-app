
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy } from "@/components/achievements/Trophy";
import { Streaks } from "@/components/achievements/Streaks";
import { Mastery } from "@/components/achievements/Mastery";
import { QuizVictories } from "@/components/achievements/QuizVictories";
import { Star } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const Achievements = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <Reveal>
        <Card className="w-full bg-gradient-to-r from-purple to-blue-dark text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <Star className="w-8 h-8 mx-auto text-yellow-300" />
                <h3 className="text-2xl font-bold">2,450</h3>
                <p className="text-white/90">XP Points</p>
              </div>
              <div className="text-center space-y-2">
                <Trophy className="w-8 h-8 mx-auto text-yellow-300" />
                <h3 className="text-2xl font-bold">Silver</h3>
                <p className="text-white/90">Current Tier</p>
              </div>
              <div className="text-center space-y-2">
                <Star className="w-8 h-8 mx-auto text-yellow-300" />
                <h3 className="text-2xl font-bold">#42</h3>
                <p className="text-white/90">Global Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>

      <Tabs defaultValue="streaks" className="w-full">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="streaks">Daily Streaks</TabsTrigger>
          <TabsTrigger value="mastery">Lesson Mastery</TabsTrigger>
          <TabsTrigger value="quiz">Quiz Victories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="streaks">
          <Streaks />
        </TabsContent>
        
        <TabsContent value="mastery">
          <Mastery />
        </TabsContent>
        
        <TabsContent value="quiz">
          <QuizVictories />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Achievements;

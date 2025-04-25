
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const LearningBanner = () => {
  return (
    <Card className="w-full p-6 bg-gradient-to-r from-purple to-blue-dark text-white">
      <div className="flex items-center gap-4">
        <Star className="w-8 h-8 text-yellow-300" />
        <div>
          <h2 className="text-2xl font-bold mb-1">
            Keep going, you're doing great! 🌟
          </h2>
          <p className="text-white/90">
            You've made progress in 3 subjects this week. Keep up the momentum!
          </p>
        </div>
      </div>
    </Card>
  );
};

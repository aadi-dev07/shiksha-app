
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";

const Credits = () => {
  return (
    <Reveal>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-orange" />
            Credits & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">150</p>
              <p className="text-sm text-muted-foreground">Shiksha Credits</p>
            </div>
            <div>
              <p className="text-2xl font-bold flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>3</span>
              </p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Quick Learner</Badge>
            <Badge variant="secondary">Quiz Master</Badge>
            <Badge variant="secondary">Team Player</Badge>
          </div>
          <Button className="w-full">
            Redeem Credits
          </Button>
        </CardContent>
      </Card>
    </Reveal>
  );
};

export default Credits;

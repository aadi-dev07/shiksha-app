
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";

export const ContinueLearning = () => {
  return (
    <Reveal>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Continue Learning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Physics - Chapter 4: Motion and Forces
            </h3>
            <Progress value={65} className="mb-2" />
            <p className="text-sm text-muted-foreground mb-4">
              65% Complete • Last studied 2 days ago
            </p>
            <Button className="w-full sm:w-auto">
              Resume Learning
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
};

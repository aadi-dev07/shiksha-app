
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/ui/reveal";

const SmartPlan = () => {
  const tasks = [
    { title: "Watch 2 videos", completed: true },
    { title: "Attempt 1 quiz", completed: false },
    { title: "Revise 1 concept", completed: false },
  ];

  const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

  return (
    <Reveal>
      <Card>
        <CardHeader>
          <CardTitle>Today's Smart Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground">
            You've completed {progress}% of today's plan!
          </p>
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 ${
                  task.completed ? "text-green-600" : "text-gray-600"
                }`}
              >
                <span>
                  {task.completed ? "✓" : "○"}
                </span>
                {task.title}
              </li>
            ))}
          </ul>
          <p className="text-sm italic text-center mt-4">
            "Small steps lead to big success!"
          </p>
        </CardContent>
      </Card>
    </Reveal>
  );
};

export default SmartPlan;

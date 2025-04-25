
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Book, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const courses = [
  {
    title: "Mathematics",
    progress: 40,
    icon: Book,
    color: "text-blue-500",
  },
  {
    title: "Science",
    progress: 65,
    icon: Lightbulb,
    color: "text-green-500",
  }
];

const Courses = () => {
  return (
    <Reveal>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <course.icon className={`h-5 w-5 ${course.color}`} />
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={course.progress} />
                <p className="text-sm text-muted-foreground">
                  {course.progress}% Complete
                </p>
                <Button className="w-full">Resume Learning</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default Courses;

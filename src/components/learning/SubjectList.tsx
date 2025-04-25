
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CircleCheck, CircleSlash, Hourglass } from "lucide-react";
import Reveal from "@/components/ui/reveal";

interface Subject {
  id: string;
  name: string;
  progress: number;
  chaptersCompleted: number;
  totalChapters: number;
  status: "locked" | "completed" | "in-progress";
}

const getStatusIcon = (status: Subject["status"]) => {
  switch (status) {
    case "completed":
      return <CircleCheck className="text-green-500" />;
    case "locked":
      return <CircleSlash className="text-gray-400" />;
    case "in-progress":
      return <Hourglass className="text-blue-500" />;
  }
};

const getStatusText = (status: Subject["status"]) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "locked":
      return "Locked";
    case "in-progress":
      return "In Progress";
  }
};

interface SubjectListProps {
  type: "subject" | "skill" | "unlocked";
}

export const SubjectList = ({ type }: SubjectListProps) => {
  const subjects: Subject[] = [
    {
      id: "1",
      name: "Mathematics",
      progress: 40,
      chaptersCompleted: 2,
      totalChapters: 5,
      status: "in-progress",
    },
    {
      id: "2",
      name: "Science",
      progress: 100,
      chaptersCompleted: 5,
      totalChapters: 5,
      status: "completed",
    },
    {
      id: "3",
      name: "History",
      progress: 0,
      chaptersCompleted: 0,
      totalChapters: 4,
      status: "locked",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subjects.map((subject) => (
        <Reveal key={subject.id}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">
                {subject.name}
              </CardTitle>
              {getStatusIcon(subject.status)}
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={subject.progress} />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {subject.chaptersCompleted}/{subject.totalChapters} Chapters
                </span>
                <Badge
                  variant={
                    subject.status === "completed"
                      ? "default"
                      : subject.status === "in-progress"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {getStatusText(subject.status)}
                </Badge>
              </div>
              <Button
                className="w-full"
                variant={subject.status === "locked" ? "outline" : "default"}
                disabled={subject.status === "locked"}
              >
                View Lessons
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
};


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Play } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CourseCardProps {
  title: string;
  thumbnail: string;
  videoId?: string;
  isLocked?: boolean;
  onClick?: () => void;
  type: "skill" | "unlocked" | "locked";
}

export const CourseCard = ({
  title,
  thumbnail,
  isLocked,
  onClick,
  type,
}: CourseCardProps) => {
  const CardButton = () => {
    if (isLocked) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="w-full"
              variant="secondary"
              disabled
            >
              <Lock className="mr-2 h-4 w-4" />
              Unlock with Credits
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Earn credits to unlock this content</p>
          </TooltipContent>
        </Tooltip>
      );
    }

    return (
      <Button onClick={onClick} className="w-full">
        <Play className="mr-2 h-4 w-4" />
        {type === "skill" ? "Watch Now" : "Start Learning"}
      </Button>
    );
  };

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-full object-cover ${
            isLocked ? "grayscale" : ""
          }`}
        />
        {isLocked && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Lock className="w-12 h-12 text-white/70" />
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-4">{title}</h3>
        <CardButton />
      </CardContent>
    </Card>
  );
};


import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LearningBanner } from "@/components/learning/LearningBanner";
import { ContinueLearning } from "@/components/learning/ContinueLearning";
import { CourseCard } from "@/components/learning/CourseCard";
import { VideoModal } from "@/components/learning/VideoModal";

// Mock data for our courses
const skillCourses = [
  {
    id: "1",
    title: "9th Science - AI Basics",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoId: "dQw4w9WgXcQ",
    description: "Learn the basics of Artificial Intelligence for 9th grade science.",
  },
  {
    id: "2",
    title: "CBSE Chapter Overview",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoId: "dQw4w9WgXcQ",
    description: "A comprehensive overview of CBSE chapters.",
  },
];

const unlockedContent = [
  {
    id: "1",
    title: "Biology Introduction",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    videoId: "dQw4w9WgXcQ",
    description: "Introduction to Biology concepts.",
  },
];

const lockedContent = [
  {
    id: "1",
    title: "Advanced Physics",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Unlock to access advanced physics content.",
  },
  {
    id: "2",
    title: "Chemistry Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Comprehensive chemistry lessons.",
  },
];

const MyLearning = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoId: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <LearningBanner />
      <ContinueLearning />
      
      <Tabs defaultValue="subjects" className="w-full">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="skills">Skill Courses</TabsTrigger>
          <TabsTrigger value="unlocked">Unlocked Content</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subjects">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Skill Development Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    thumbnail={course.thumbnail}
                    type="skill"
                    onClick={() => setSelectedVideo({
                      videoId: course.videoId,
                      title: course.title,
                      description: course.description,
                    })}
                  />
                ))}
              </div>
            </section>
          </div>
        </TabsContent>
        
        <TabsContent value="skills">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Your Unlocked Academic Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {unlockedContent.map((content) => (
                  <CourseCard
                    key={content.id}
                    title={content.title}
                    thumbnail={content.thumbnail}
                    type="unlocked"
                    onClick={() => setSelectedVideo({
                      videoId: content.videoId,
                      title: content.title,
                      description: content.description,
                    })}
                  />
                ))}
              </div>
            </section>
          </div>
        </TabsContent>
        
        <TabsContent value="unlocked">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6">Coming Soon: Unlock More!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lockedContent.map((content) => (
                  <CourseCard
                    key={content.id}
                    title={content.title}
                    thumbnail={content.thumbnail}
                    type="locked"
                    isLocked
                  />
                ))}
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.videoId || ""}
        title={selectedVideo?.title || ""}
        description={selectedVideo?.description || ""}
      />
    </div>
  );
};

export default MyLearning;

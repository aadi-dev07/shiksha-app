
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContinueLearning } from "@/components/learning/ContinueLearning";
import { SubjectList } from "@/components/learning/SubjectList";
import { LearningBanner } from "@/components/learning/LearningBanner";

const MyLearning = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <LearningBanner />
      <ContinueLearning />
      
      <Tabs defaultValue="subjects" className="w-full">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="skills">Skill Courses</TabsTrigger>
          <TabsTrigger value="unlocked">Unlocked Content</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subjects">
          <SubjectList type="subject" />
        </TabsContent>
        
        <TabsContent value="skills">
          <SubjectList type="skill" />
        </TabsContent>
        
        <TabsContent value="unlocked">
          <SubjectList type="unlocked" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyLearning;

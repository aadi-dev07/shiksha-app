
import { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const subjects = [
  'Mathematics',
  'Science',
  'English',
  'Social Studies',
  'Computer Science',
];

export const FileUploader = () => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "Success! 🎉",
        description: "Your notes have been shared with the community.",
      });
    }, 1500);
  };

  return (
    <Card className="bg-white shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <FileText className="h-5 w-5 text-purple" />
          Contribute Your Notes
        </CardTitle>
        <CardDescription>
          Help others learn by sharing your notes or previous year papers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              name="file"
              render={() => (
                <FormItem>
                  <FormLabel>Upload File (PDF/DOC/Image)</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="cursor-pointer"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              name="subject"
              render={() => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject.toLowerCase()}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              name="description"
              render={() => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief description of your notes..." />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button 
              type="submit"
              className="w-full primary-gradient text-white"
              disabled={isUploading}
            >
              <Upload className="w-4 h-4 mr-2" />
              {isUploading ? 'Uploading...' : 'Share with Community'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};


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
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';

const subjects = [
  'Mathematics',
  'Science',
  'English',
  'Social Studies',
  'Computer Science',
];

const formSchema = z.object({
  subject: z.string().min(1, "Please select a subject"),
  description: z.string().optional(),
  title: z.string().min(1, "Please enter a title")
});

type FormValues = z.infer<typeof formSchema>;

export const FileUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      description: '',
      title: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      if (!selectedFile) {
        toast.error("Please select a file to upload");
        return;
      }

      setIsUploading(true);
      
      // First, create a storage bucket if it doesn't exist
      try {
        // Check if the bucket exists
        const { data: buckets } = await supabase.storage.listBuckets();
        const notesBucket = buckets?.find(bucket => bucket.name === 'notes');
        
        if (!notesBucket) {
          // Create the notes bucket if it doesn't exist
          await supabase.storage.createBucket('notes', {
            public: true,
            fileSizeLimit: 50000000, // 50MB limit
          });
          console.log('Created notes bucket');
        }
      } catch (bucketError) {
        console.error('Error checking/creating bucket:', bucketError);
        // Continue anyway, the bucket might already exist
      }

      // Upload file to storage bucket
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      console.log('Uploading file:', filePath);
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('notes')
        .upload(filePath, selectedFile);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      if (!uploadData || !uploadData.path) {
        console.error('No upload data returned');
        throw new Error('Failed to get upload path');
      }

      console.log('File uploaded successfully:', uploadData.path);

      // Insert note metadata into database
      const { error: dbError } = await supabase.from('notes').insert({
        title: data.title,
        description: data.description || null,
        subject: data.subject,
        file_path: uploadData.path,
        uploader_id: (await supabase.auth.getUser()).data.user?.id || '00000000-0000-0000-0000-000000000000',
      });

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      toast.success("Your notes have been shared with the community.");
      
      form.reset();
      setSelectedFile(null);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error("Failed to upload notes. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Give your notes a title..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Upload File (PDF/DOC/Image)</FormLabel>
              <FormControl>
                <Input 
                  type="file" 
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="cursor-pointer"
                  onChange={handleFileChange}
                />
              </FormControl>
              {selectedFile && (
                <p className="text-sm text-green-600">
                  File selected: {selectedFile.name}
                </p>
              )}
            </FormItem>
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    value={field.value}
                  >
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
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief description of your notes..." {...field} />
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

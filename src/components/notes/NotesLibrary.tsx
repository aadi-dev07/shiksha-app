
import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { getNotes, downloadFile, incrementNoteDownloads } from '@/lib/supabase-utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type Note = {
  id: string;
  title: string;
  subject: string;
  downloads: number;
  description: string | null;
  file_path: string;
  created_at: string;
};

export const NotesLibrary = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const notesData = await getNotes();
      setNotes(notesData);
    } catch (error) {
      console.error('Error loading notes:', error);
      setError('Failed to load notes. Please try again later.');
      toast.error('Failed to load notes');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (note: Note) => {
    try {
      toast.loading('Downloading note...');
      
      // Get the file from storage
      const blob = await downloadFile(note.file_path);
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = note.title;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Increment download count
      await incrementNoteDownloads(note.id);
      
      // Update local state
      setNotes(notes.map(n => 
        n.id === note.id ? { ...n, downloads: (n.downloads || 0) + 1 } : n
      ));
      
      toast.success('Download complete!');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download the file. Please try again.');
    }
  };

  const filteredNotes = selectedSubject === 'all' 
    ? notes 
    : notes.filter(note => note.subject.toLowerCase() === selectedSubject);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Community Notes & Papers 📚</h2>
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {['mathematics', 'science', 'english', 'social studies', 'computer science'].map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading notes...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : filteredNotes.length === 0 ? (
        <div className="text-center py-8">
          {selectedSubject !== 'all' 
            ? `No notes available for ${selectedSubject}. Be the first to share some!` 
            : 'No notes available yet. Be the first to share some!'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="group hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple" />
                  {note.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-gray-600">
                    <p>Subject: {note.subject}</p>
                    {note.description && <p>{note.description}</p>}
                    <p>{note.downloads || 0} downloads</p>
                  </div>
                  <Button
                    className="w-full primary-gradient text-white"
                    onClick={() => handleDownload(note)}
                  >
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

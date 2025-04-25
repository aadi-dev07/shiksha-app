
import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const mockNotes = [
  {
    id: 1,
    title: 'Physics Chapter 3 Notes',
    subject: 'Science',
    uploader: 'Ramesh K.',
    class: '10th',
    downloads: 45,
    isPopular: true,
  },
  {
    id: 2,
    title: 'Math Previous Year Paper',
    subject: 'Mathematics',
    uploader: 'Priya S.',
    class: '9th',
    downloads: 32,
    isPopular: true,
  },
  // Add more mock notes as needed
];

export const NotesLibrary = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Community Notes & Papers 📚</h2>
        <div className="flex flex-wrap gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="english">English</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="9">Class 9</SelectItem>
              <SelectItem value="10">Class 10</SelectItem>
              <SelectItem value="11">Class 11</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNotes.map((note) => (
          <Card key={note.id} className="group hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="relative pb-3">
              {note.isPopular && (
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  🔥 Popular
                </div>
              )}
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple" />
                {note.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  <p>Subject: {note.subject}</p>
                  <p>Shared by {note.uploader}, Class {note.class}</p>
                  <p>{note.downloads} downloads</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 hover:bg-purple/10"
                    onClick={() => {
                      // Handle preview
                    }}
                  >
                    Preview
                  </Button>
                  <Button
                    className="flex-1 primary-gradient text-white"
                    onClick={() => {
                      // Handle download
                    }}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

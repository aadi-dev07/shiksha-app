
import { useEffect, useState } from 'react';
import { FileUploader } from '@/components/notes/FileUploader';
import { NotesLibrary } from '@/components/notes/NotesLibrary';
import { TopContributors } from '@/components/notes/TopContributors';
import { Stats } from '@/components/notes/Stats';

const SharedNotes = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent mb-2">
            Community Study Hub 📚
          </h1>
          <p className="text-gray-600 mb-6">
            Share and access quality study materials from your peers
          </p>
          <FileUploader />
        </div>
        <div className="w-full md:w-80">
          <Stats />
          <TopContributors />
        </div>
      </div>
      <NotesLibrary />
    </div>
  );
};

export default SharedNotes;

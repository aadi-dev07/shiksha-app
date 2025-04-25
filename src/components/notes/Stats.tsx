
import { FileText, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Stats = () => {
  return (
    <Card className="bg-white shadow-md border-0 mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FileText className="w-8 h-8 text-purple" />
            </div>
            <div className="text-2xl font-bold text-gray-800">245</div>
            <div className="text-sm text-gray-600">Files Shared</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="w-8 h-8 text-purple" />
            </div>
            <div className="text-2xl font-bold text-gray-800">128</div>
            <div className="text-sm text-gray-600">Contributors</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

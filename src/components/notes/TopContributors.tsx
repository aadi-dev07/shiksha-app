
import { Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contributors = [
  { name: 'Ramesh K.', class: '10th', contributions: 15 },
  { name: 'Priya S.', class: '9th', contributions: 12 },
  { name: 'Amit P.', class: '11th', contributions: 10 },
];

export const TopContributors = () => {
  return (
    <Card className="bg-white shadow-md border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="w-4 h-4 text-purple" />
          Top Contributors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contributors.map((contributor, index) => (
            <div
              key={contributor.name}
              className="flex items-center justify-between p-2 rounded-lg bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="bg-purple text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium text-sm">{contributor.name}</div>
                  <div className="text-xs text-gray-500">Class {contributor.class}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-purple">
                {contributor.contributions} notes
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

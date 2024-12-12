import React from 'react';
import { Clock } from 'lucide-react';

const milestones = [
  { year: '2020', title: 'Founded in Silicon Valley' },
  { year: '2021', title: 'Launched Core Platform' },
  { year: '2022', title: 'Expanded to Global Markets' },
  { year: '2023', title: 'Reached 50K+ Active Users' }
];

export function History() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative bg-black border border-yellow-400/10 rounded-lg p-8 h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-600 to-yellow-400 p-0.5">
            <div className="h-full w-full rounded-lg bg-black flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-400" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-yellow-400">Nuestra historia</h3>
        </div>
        
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-green-600" />
              {index !== milestones.length - 1 && (
                <div className="absolute left-1.5 top-4 w-0.5 h-12 bg-gradient-to-b from-yellow-400/50 to-green-600/50" />
              )}
              <div className="text-yellow-400 font-semibold mb-1">{milestone.year}</div>
              <div className="text-gray-400">{milestone.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
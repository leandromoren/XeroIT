import React from 'react';
import { Users, Building2, Award, Landmark } from 'lucide-react';

const stats = [
  { icon: Users, value: '50K+', label: 'Active Users', growth: '+127% YoY' },
  { icon: Building2, value: '100+', label: 'Partner Companies', growth: '+45% YoY' },
  { icon: Award, value: '15+', label: 'Industry Awards', growth: '2023' },
  { icon: Landmark, value: '$2B+', label: 'Assets Managed', growth: '+89% YoY' },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
      {stats.map(({ icon: Icon, value, label, growth }) => (
        <div key={label} className="group text-center">
          <div className="relative mx-auto mb-4">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-green-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="relative h-16 w-16 rounded-xl bg-gradient-to-r from-yellow-400 to-green-600 p-0.5">
              <div className="h-full w-full rounded-xl bg-black flex items-center justify-center">
                <Icon className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-green-500 text-transparent bg-clip-text mb-1">
            {value}
          </div>
          <div className="text-gray-400 mb-2">{label}</div>
          <div className="text-sm text-yellow-400/80">{growth}</div>
        </div>
      ))}
    </div>
  );
}
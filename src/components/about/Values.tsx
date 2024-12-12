import React from 'react';
import { Shield, Heart, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We prioritize the protection of our clients\' assets and data with military-grade encryption and advanced security protocols.'
  },
  {
    icon: Heart,
    title: 'Client First',
    description: 'Every feature we develop and decision we make is guided by our unwavering commitment to our clients\' success and satisfaction.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously push boundaries to deliver cutting-edge financial solutions that transform how people interact with money.'
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'We believe in democratizing finance by making advanced financial tools accessible to everyone, regardless of their background.'
  }
];

export function Values() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
      {values.map(({ icon: Icon, title, description }) => (
        <div 
          key={title}
          className="group p-8 rounded-lg bg-gradient-to-br from-yellow-900/10 to-green-900/10 border border-yellow-400/10 hover:from-yellow-900/20 hover:to-green-900/20 transition-colors duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-green-600 p-0.5 group-hover:from-green-600 group-hover:to-yellow-400 transition-all duration-300">
              <div className="h-full w-full rounded-lg bg-black flex items-center justify-center">
                <Icon className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
            <h4 className="text-xl font-semibold text-yellow-400">{title}</h4>
          </div>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  );
}
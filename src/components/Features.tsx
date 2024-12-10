import React from 'react';
import { Shield, Zap, Trophy, Target, ArrowRight, Lock, Cpu, BarChart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    secondaryIcon: Lock,
    title: 'Ciberseguridad',
    description: 'Your finances are protected with military-grade encryption and advanced security protocols.',
    highlights: ['256-bit encryption', 'Two-factor authentication', 'Biometric security']
  },
  {
    icon: Zap,
    secondaryIcon: Cpu,
    title: 'Desarrollo',
    description: 'Execute transactions and analyze data in real-time with our powerful infrastructure.',
    highlights: ['Instant transfers', 'Real-time updates', 'Zero latency']
  },
  {
    icon: Trophy,
    secondaryIcon: BarChart,
    title: 'Calidad punta a punta',
    description: 'Get insights and recommendations powered by advanced AI algorithms.',
    highlights: ['Predictive analysis', 'Custom reports', 'Market insights']
  },
  {
    icon: Target,
    secondaryIcon: ArrowRight,
    title: 'Diseño',
    description: 'Set and track your financial goals with our intuitive dashboard.',
    highlights: ['Visual progress', 'Smart milestones', 'Achievement rewards']
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-black py-32">
      <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 text-transparent bg-clip-text">
            Servicios de calidad
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            Todo lo que necesitas para ser líder en tecnología
          </p>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            const SecondaryIcon = feature.secondaryIcon;
            return (
              <div 
                key={feature.title} 
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-yellow-900/10 to-green-900/10 border border-yellow-400/10 hover:from-yellow-900/20 hover:to-green-900/20 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-yellow-400 to-green-600 p-0.5">
                      <div className="h-full w-full rounded-xl bg-black flex items-center justify-center">
                        <Icon className="h-7 w-7 text-yellow-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-black flex items-center justify-center border border-yellow-400/20">
                      <SecondaryIcon className="h-3 w-3 text-yellow-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-green-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-green-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Target, ArrowUpRight } from 'lucide-react';

export function Mission() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative bg-black border border-yellow-400/10 rounded-lg p-8 h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-yellow-400 to-green-600 p-0.5">
            <div className="h-full w-full rounded-lg bg-black flex items-center justify-center">
              <Target className="h-6 w-6 text-yellow-400" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-yellow-400">Nuestra misión</h3>
        </div>
        <p className="text-gray-400 leading-relaxed mb-6">
          To revolutionize financial technology by creating innovative solutions that 
          empower individuals and businesses worldwide. We're building a future where 
          advanced financial tools are accessible to everyone, combining cutting-edge 
          technology with uncompromising security.
        </p>
        <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors group">
          Learn more about our approach
          <ArrowUpRight className="h-4 w-4 animate-bounce transform group-hover:translate-x-0.5 " />
        </button>
      </div>
    </div>
  );
}
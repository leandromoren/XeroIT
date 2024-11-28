import React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function GradientButton({ href, variant = 'primary', children, className, ...props }: GradientButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'relative inline-flex items-center justify-center transition-all duration-300 ease-out group',
        variant === 'primary' 
          ? 'rounded-md bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-pink-500 hover:to-purple-500'
          : 'rounded-md border-2 border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:border-gray-900 hover:bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
      {variant === 'primary' && (
        <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
      )}
    </a>
  );
}
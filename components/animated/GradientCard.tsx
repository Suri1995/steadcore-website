'use client';

import React from 'react';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
  glow?: boolean;
}

export function GradientCard({
  children,
  className = '',
  hoverLift = true,
  glow = true,
}: GradientCardProps) {
  return (
    <div
      className={`
        relative p-6 rounded-xl
        bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800
        border border-slate-200 dark:border-slate-700
        smooth-transition
        ${hoverLift ? 'hover-lift' : ''}
        ${glow ? 'glow-effect' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

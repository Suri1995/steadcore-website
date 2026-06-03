'use client';

import React from 'react';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  staggerDelay = 50,
}: AnimatedTextProps) {
  const words = children.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block animate-slide-up"
          style={{
            animationDelay: `${delay + i * staggerDelay}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

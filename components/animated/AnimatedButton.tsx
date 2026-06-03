'use client';

import React from 'react';

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function AnimatedButton({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}: AnimatedButtonProps) {
  const baseStyles =
    'font-montserrat font-600 relative inline-flex items-center justify-center transition-all duration-300 ease-out overflow-hidden';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50 active:scale-95',
    secondary:
      'bg-secondary text-white hover:shadow-lg hover:shadow-secondary/50 active:scale-95',
    outline:
      'border-2 border-primary text-primary hover:bg-primary/10 active:scale-95',
    ghost: 'text-primary hover:bg-primary/10 active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span className="relative flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && (
          <span className="transition-transform group-hover:translate-x-1">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="transition-transform group-hover:translate-x-1">{icon}</span>
        )}
      </span>
    </button>
  );
}

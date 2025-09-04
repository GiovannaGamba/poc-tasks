import React from 'react';

export interface TypographyProps {
  variant?: 
    | 'heading-1' | 'heading-2' | 'heading-3'
    | 'title-1' | 'title-2'
    | 'body-1' | 'body-2' | 'body-3'
    | 'caption-1' | 'caption-2'
    | 'detail-1' | 'detail-2';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'code' | 'label';
  children: React.ReactNode;
  className?: string;
}

export function Typography({ 
  variant = 'body-2', 
  component = 'div', 
  children, 
  className = '' 
}: TypographyProps) {
  const baseClasses = 'font-inter';
  
  const variantClasses = {
    'heading-1': 'text-heading-1',
    'heading-2': 'text-heading-2',
    'heading-3': 'text-heading-3',
    'title-1': 'text-title-1',
    'title-2': 'text-title-2',
    'body-1': 'text-body-1',
    'body-2': 'text-body-2',
    'body-3': 'text-body-3',
    'caption-1': 'text-caption-1',
    'caption-2': 'text-caption-2',
    'detail-1': 'text-detail-1',
    'detail-2': 'text-detail-2',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const Component = component as any;

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}

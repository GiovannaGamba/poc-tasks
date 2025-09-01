import React from 'react';
import { typographyVariants, type TypographyVariantName } from '../styles/typhography';

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TypographyVariantName; 
  component?: React.ElementType; 
  children: React.ReactNode;
  className?: string;
};

export function Typography({
  variant = 'body1',
  component,
  children,
  className,
  ...rest
}: TypographyProps) {
  let defaultComponent: React.ElementType = 'p';
  if (variant === 'h1' || variant === 'h2') {
    defaultComponent = variant;
  }

  const Component = component || defaultComponent;

  return (
    <Component
      className={['m-0', typographyVariants[variant], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Typography;
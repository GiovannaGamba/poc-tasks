export type TypographyVariantName = 'h1' | 'h2' | 'body1' | 'subtitle1';

export const typographyVariants: Record<TypographyVariantName, string> = {
  h1: 'font-sans text-5xl font-light leading-tight tracking-tight',
  h2: 'font-sans text-4xl font-normal leading-tight tracking-tight',
  body1: 'font-sans text-base font-normal leading-6 tracking-normal',
  subtitle1: 'font-sans text-base font-medium leading-7 tracking-normal',
};
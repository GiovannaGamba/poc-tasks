import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white focus-visible:ring-primary-500",
  secondary: "bg-blue-500 hover:bg-neutral-300 text-white focus-visible:ring-neutral-400",
  ghost: "bg-transparent hover:bg-neutral-100 text-neutral-900 focus-visible:ring-neutral-400",
  danger: "bg-danger-500 hover:bg-danger-600 text-white focus-visible:ring-danger-500",
};

export function Button({
  className,
  variant = "primary",
  size = "lg",
  fullWidth = true,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;



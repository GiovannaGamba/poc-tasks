import React from "react";

export type ButtonTesteType = "primary" | "danger" | "success";
export type ButtonTesteStyle = "filled" | "outlined" | "ghost"; 
export type ButtonTesteSize = "medium" | "small";
export type ButtonTesteState = "enabled" | "hover" | "disabled";

export type ButtonTesteProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: ButtonTesteType;
  style?: ButtonTesteStyle;
  size?: ButtonTesteSize;
  state?: ButtonTesteState;
  disabled?: boolean;
  showIconLeft?: boolean;
  showIconRight?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text?: string;
};

const baseClasses = [
  "inline-flex items-center justify-center",
  "font-medium text-[14px] leading-[17px]",
  "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
  "w-[125px]",
  "rounded",
].join(" ");

const sizeClasses: Record<ButtonTesteSize, string> = {
  medium: "h-[40px]",
  small: "h-[32px]",
};

const buttonStyles = {
  filled: {
    primary: {
      enabled: "bg-primary-500 text-white focus-visible:ring-primary-300",
      hover: "bg-primary-600 text-white focus-visible:ring-primary-300",
      disabled: "bg-neutral-100 text-neutral-300",
    },
    danger: {
      enabled: "bg-danger-500 text-white focus-visible:ring-danger-300",
      hover: "bg-danger-600 text-white focus-visible:ring-danger-300",
      disabled: "bg-neutral-100 text-neutral-300",
    },
    success: {
      enabled: "bg-success-500 text-white focus-visible:ring-success-300",
      hover: "bg-success-600 text-white focus-visible:ring-success-300",
      disabled: "bg-neutral-100 text-neutral-300",
    },
  },
  outlined: {
    primary: {
      enabled: "bg-transparent border border-primary-300 text-primary-500 focus-visible:ring-primary-300",
      hover: "bg-primary-50 border border-primary-300 text-primary-600 focus-visible:ring-primary-300",
      disabled: "bg-white border border-neutral-100 text-neutral-300",
    },
    danger: {
      enabled: "bg-transparent border border-danger-300 text-danger-500 focus-visible:ring-danger-300",
      hover: "bg-danger-50 border border-danger-300 text-danger-600 focus-visible:ring-danger-300",
      disabled: "bg-white border border-neutral-100 text-neutral-300",
    },
    success: {
      enabled: "bg-transparent border border-success-300 text-success-500 focus-visible:ring-success-300",
      hover: "bg-success-50 border border-success-300 text-success-600 focus-visible:ring-success-300",
      disabled: "bg-white border border-neutral-100 text-neutral-300",
    },
  },
  ghost: {
    primary: {
      enabled: "bg-transparent text-primary-500 focus-visible:ring-primary-300",
      hover: "bg-primary-50 text-primary-600 focus-visible:ring-primary-300",
      disabled: "bg-transparent text-neutral-300",
    },
    danger: {
      enabled: "bg-transparent text-danger-500 focus-visible:ring-danger-300",
      hover: "bg-danger-50 text-danger-600 focus-visible:ring-danger-300",
      disabled: "bg-transparent text-neutral-300",
    },
    success: {
      enabled: "bg-transparent text-success-500 focus-visible:ring-success-300",
      hover: "bg-sucess-50 text-success-600 focus-visible:ring-success-300",
      disabled: "bg-transparent text-neutral-300",
    },
  },
} as const;

function classes(style: ButtonTesteStyle, type: ButtonTesteType, state: ButtonTesteState) {
  return buttonStyles[style][type][state];
}

export function ButtonTeste({
  className,
  type = "primary",
  style = "filled",
  size = "medium",
  state = "enabled",
  disabled = false,
  showIconLeft = true,
  showIconRight = true,
  iconLeft,
  iconRight,
  text = "Button",
  children,
  ...rest
}: ButtonTesteProps) {
  const content = children ?? text;
  const isDisabled = disabled || state === "disabled";

  return (
    <button
      className={[
        baseClasses,
        sizeClasses[size],
        classes(style, type, state),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={isDisabled}
      {...rest}
    >
      <div className="relative w-full h-full flex items-center">
        <div className="absolute left-4 w-4 h-4 flex items-center justify-center">
          {showIconLeft && iconLeft ? iconLeft : null}
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[45px] text-center">
          {content}
        </div>
        <div className="absolute right-4 w-4 h-4 flex items-center justify-center">
          {showIconRight && iconRight ? iconRight : null}
        </div>
      </div>
    </button>
  );
}

export default ButtonTeste;

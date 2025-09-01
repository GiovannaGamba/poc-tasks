import React from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export type InputVariant = "text" | "email" | "password";

export type InputProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: React.HTMLInputTypeAttribute;
  variant?: InputVariant; // text | email | password
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
  inputClassName?: string;
  containerClassName?: string;
  showPasswordToggle?: boolean; 
};

export function Input({
  id,
  name,
  value,
  placeholder,
  disabled,
  readOnly,
  type = "text",
  variant = "text",
  iconLeft,
  iconRight,
  onChange,
  onBlur,
  onFocus,
  className,
  inputClassName,
  containerClassName,
  showPasswordToggle = true,
}: InputProps) {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const computedType: React.HTMLInputTypeAttribute = (() => {
    if (variant === "password") return passwordVisible ? "text" : "password";
    if (variant === "email") return "email";
    return type ?? "text";
  })();

  const leftIcon = (() => {
    if (iconLeft) return iconLeft;
    if (variant === "email") return <Mail size={18} />;
    if (variant === "password") return <Lock size={18} />;
    return null;
  })();

  const rightIcon = (() => {
    if (iconRight) return iconRight;
    if (variant === "password" && showPasswordToggle) {
      return (
        <button
          type="button"
          aria-label={passwordVisible ? "Ocultar senha" : "Mostrar senha"}
          onClick={() => setPasswordVisible((v) => !v)}
          className="outline-none"
        >
          {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      );
    }
    return null;
  })();

  return (
    <div
      className={[
        "flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-xs",
        disabled ? "opacity-60" : "",
        containerClassName,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {leftIcon ? <span className="text-neutral-500">{leftIcon}</span> : null}
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        type={computedType}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={[
          "w-full bg-transparent outline-none placeholder:text-neutral-400",
          inputClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {rightIcon ? <span className="text-neutral-500">{rightIcon}</span> : null}
    </div>
  );
}

export default Input;



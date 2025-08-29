import React from "react";

export type InputProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: React.HTMLInputTypeAttribute;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
  inputClassName?: string;
  containerClassName?: string;
};

export function Input({
  id,
  name,
  value,
  placeholder,
  disabled,
  readOnly,
  type = "text",
  iconLeft,
  iconRight,
  onChange,
  onBlur,
  onFocus,
  className,
  inputClassName,
  containerClassName,
}: InputProps) {
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
      {iconLeft ? <span className="text-gray-500">{iconLeft}</span> : null}
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={[
          "w-full bg-transparent outline-none placeholder:text-gray-400",
          inputClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {iconRight ? <span className="text-gray-500">{iconRight}</span> : null}
    </div>
  );
}

export default Input;



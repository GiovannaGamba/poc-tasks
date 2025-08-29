import React from "react";

export type Option = { label: string; value: string };

export type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  className?: string;
  selectClassName?: string;
  containerClassName?: string;
  iconLeft?: React.ReactNode;
};

export function Select({
  id,
  name,
  value,
  placeholder,
  disabled,
  options,
  onChange,
  className,
  selectClassName,
  containerClassName,
  iconLeft,
}: SelectProps) {
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
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={[
          "w-full bg-transparent outline-none appearance-none",
          selectClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {placeholder ? (
          <option value="" disabled={true} hidden={true}>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;



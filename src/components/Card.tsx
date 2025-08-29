import React from "react";

export type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Card({ title, children, className, contentClassName }: CardProps) {
  return (
    <div className={["w-full max-w-2xl bg-white rounded-2xl shadow-md border border-gray-200 p-8", className].filter(Boolean).join(" ")}> 
      {title ? (
        <h1 className="text-3xl font-semibold text-center mb-6">{title}</h1>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

export default Card;



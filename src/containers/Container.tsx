import React from "react";

export type ContainerProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Container({ title, children, className, contentClassName }: ContainerProps) {
  return (
    <div className={["min-h-screen w-full flex items-center justify-center", className].filter(Boolean).join(" ")}> 
      <div className={[
        "w-full max-w-2xl bg-white rounded-2xl shadow-md border border-gray-200 p-8",
        contentClassName,
      ].filter(Boolean).join(" ")}
      >
        {title ? (
          <h1 className="text-3xl font-semibold text-center mb-6">{title}</h1>
        ) : null}
        {children}
      </div>
    </div>
  );
}

export default Container;



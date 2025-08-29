import React from "react";

export type AuthTemplateProps = {
  children: React.ReactNode;
};

export function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-[62%] min-w-[520px] bg-blue-500" />
        <svg
          className="absolute right-0 bottom-0 h-[65%] w-[100%] text-blue-400/70"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,300 C200,200 300,450 800,250 L800,400 L0,400 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute right-0 bottom-0 h-[55%] w-[100%] text-blue-300/60"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,320 C220,260 320,420 800,300 L800,400 L0,400 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default AuthTemplate;



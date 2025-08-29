import React from "react";

export type SideBarProps = {
  children?: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string; 
};

export function SideBar({ children, className, header, footer, width = "w-80" }: SideBarProps) {
  return (
    <aside
      className={[
        "h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col",
        width,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {header ? <div className="px-6 py-5 border-b border-gray-100">{header}</div> : null}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {children}
      </div>
      {footer ? <div className="px-4 py-4 border-t border-gray-100">{footer}</div> : null}
    </aside>
  );
}

export default SideBar;



import React from "react";
import { SideBar, NavBar } from "../containers";

export type AuthenticatedTemplateProps = {
  children: React.ReactNode;
};

export function AuthenticatedTemplate({ children }: AuthenticatedTemplateProps) {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <NavBar userName="Nome Sobrenome" />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AuthenticatedTemplate;



import React from "react";
import { SideBar, NavBar } from "../containers";

export type AuthenticatedTemplateProps = {
  children: React.ReactNode;
};

export function AuthenticatedTemplate({ children }: AuthenticatedTemplateProps) {
  const [title, setTitle] = React.useState("Início");
  return (
    <div className="min-h-screen w-full bg-gray-50 flex">
      <SideBar onChange={(_, item) => setTitle(item.label)} />
      <div className="flex-1 flex flex-col">
        <NavBar userName="Nome Sobrenome" title={title} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AuthenticatedTemplate;



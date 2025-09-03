import React from "react";
import { SideBar } from "../../containers/SideBar/SideBar";
import { NavBar } from "../../containers/NavBar/NavBar";

export type AuthenticatedTemplateProps = {
  children: React.ReactNode;
  onDomainChange?: (domain: string) => void;
};

export function AuthenticatedTemplate({ children, onDomainChange }: AuthenticatedTemplateProps) {
  const [title, setTitle] = React.useState("Início");

  const handleSidebarChange = (index: number, item: any) => {
    setTitle(item.label);
    
    // Mapear labels da sidebar para domínios
    const domainMap: Record<string, string> = {
      'Início': 'inicio',
      'Workflow': 'workflow',
      'Formulários': 'formularios',
      'Requisições': 'requisicoes',
      'Modelos': 'modelos',
      'Documentos': 'documentos',
      'Contatos': 'contatos',
    };
    
    const domain = domainMap[item.label];
    if (domain && onDomainChange) {
      onDomainChange(domain);
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 flex">
      <SideBar onChange={handleSidebarChange} />
      <div className="flex-1 flex flex-col">
        <NavBar userName="Nome" title={title} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AuthenticatedTemplate;



import React from "react";
import { Select, ButtonTeste, Typography } from "../../components";
import type { Option } from "../../components/Select/Select";
import { ChevronDown, Search, UserCircle2 } from "lucide-react";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import { useNavigate } from "@tanstack/react-router";

export type NavBarProps = {
  userName: string;
  title?: string;
  onNewChange?: (value: string) => void;
  newOptions?: Option[];
};

const defaultNewOptions: Option[] = [
  { label: "Novo contrato", value: "contrato" },
  { label: "Nova requisição", value: "requisicao" },
  { label: "Novo modelo", value: "modelo" },
];

export function NavBar({ userName, title = "Olá", onNewChange, newOptions = defaultNewOptions }: NavBarProps) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    
    function onDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest?.("[data-profile-trigger]")) setOpen(false);
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-screen-2xl px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <Typography variant="heading-2" component="h2">{title}</Typography>
          <Typography variant="body-3" className="text-neutral-500">Boas-vindas a plataforma CLM Contraktor.</Typography>
        </div>

        <div className="flex items-center gap-4">
          <div className="min-w-[220px]">
            <Select
              placeholder="Novo"
              options={newOptions}
              onChange={(e) => onNewChange?.(e.target.value)}
              containerClassName="rounded-full"
              selectClassName="pr-8"
              iconLeft={<ChevronDown size={18} className="opacity-0" />}
            />
          </div>
          <ButtonTeste
            type="primary"
            style="ghost"
            state="enabled"
            className="rounded-full border border-gray-300 h-12 px-4 flex items-center gap-3"
            aria-label="Perfil do usuário"
            data-profile-trigger
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
            iconLeft={<Search size={18} className="text-neutral-500" />}
            iconRight={<UserCircle2 size={28} className="text-neutral-500" />}
          >
            <Typography component="span" variant="body-2" className="text-neutral-700">{userName}</Typography>
          </ButtonTeste>
          {open ? (
            <ProfileMenu
              name={userName}
              email={"nome.sobrenome@contraktor.com.br"}
              onManage={() => console.log("manage")}
              onLogout={() => {
                setOpen(false);
                navigate({ to: "/" });
              }}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default NavBar;



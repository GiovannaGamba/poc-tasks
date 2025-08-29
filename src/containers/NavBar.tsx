import { Select, Button } from "../components";
import type { Option } from "../components";
import { ChevronDown, Search, UserCircle2 } from "lucide-react";

export type NavBarProps = {
  userName: string;
  onNewChange?: (value: string) => void;
  newOptions?: Option[];
};

const defaultNewOptions: Option[] = [
  { label: "Novo contrato", value: "contrato" },
  { label: "Nova requisição", value: "requisicao" },
  { label: "Novo modelo", value: "modelo" },
];

export function NavBar({ userName, onNewChange, newOptions = defaultNewOptions }: NavBarProps) {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-screen-2xl px-6 py-4 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Olá, Nome</h1>
          <p className="text-gray-500">Boas-vindas a plataforma CLM Contraktor.</p>
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
          <Button
            variant="ghost"
            fullWidth={false}
            className="rounded-full border border-gray-300 h-12 px-4 flex items-center gap-3"
            aria-label="Perfil do usuário"
          >
            <Search size={18} className="text-gray-500" />
            <span className="text-gray-700">{userName}</span>
            <UserCircle2 size={28} className="text-gray-500" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;



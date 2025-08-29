import React from "react";
import Logo from "../Utils/Contraktor.png";
import { Button } from "../components";
import {
  Home,
  Workflow,
  FileText,
  ClipboardList,
  FileStack,
  Users,
  BarChart3,
  Settings,
  Gauge,
  Globe,
} from "lucide-react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

export type NavItem = { label: string; icon: IconType; path?: string };

export type SideBarProps = {
  className?: string;
  width?: string;
  items?: NavItem[];
  activeIndex?: number; // controlled
  onChange?: (index: number, item: NavItem) => void; // selection callback
};

const defaultItems: NavItem[] = [
  { label: "Início", icon: Home },
  { label: "Workflow", icon: Workflow },
  { label: "Formulários", icon: ClipboardList },
  { label: "Requisições", icon: FileText },
  { label: "Modelos", icon: FileStack },
  { label: "Documentos", icon: FileText },
  { label: "Contatos", icon: Users },
  { label: "Dashboards", icon: BarChart3 },
  { label: "Dashboard CK", icon: Gauge },
  { label: "Configurações", icon: Settings },
];

function SideBarItem({ item, active, onClick }: { item: NavItem; active?: boolean; onClick?: () => void }) {
  const Icon = item.icon;
  return (
    <button
      className={[
        "w-full flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-colors",
        active
          ? "bg-blue-50 text-blue-700 border border-blue-100"
          : "text-gray-700 hover:bg-gray-50",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
    >
      <Icon size={22} className={active ? "text-blue-600" : "text-gray-500"} />
      <span className="font-medium">{item.label}</span>
    </button>
  );
}

export function SideBar({ className, width = "w-80", items = defaultItems, activeIndex, onChange }: SideBarProps) {
  const [localActive, setLocalActive] = React.useState(0);
  const currentActive = typeof activeIndex === "number" ? activeIndex : localActive;

  const handleSelect = (index: number) => {
    if (typeof activeIndex !== "number") setLocalActive(index);
    onChange?.(index, items[index]);
  };

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
      <div className="px-6 py-5 border-b border-gray-100">
        <img src={Logo} alt="Contraktor" className="h-20" />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
        {items.map((item, idx) => (
          <SideBarItem key={item.label} item={item} active={idx === currentActive} onClick={() => handleSelect(idx)} />
        ))}
      </nav>

      <div className="px-6 py-6">
        <Button
          variant="secondary"
          fullWidth={false}
          className="rounded-full w-16 h-16 p-0 flex items-center justify-center shadow-md"
          aria-label="Ação"
        >
          <Globe size={22} />
        </Button>
      </div>
    </aside>
  );
}

export default SideBar;



import { Card, Button, Typography } from "../../components";
import { LogOut, Pencil, UserCircle2 } from "lucide-react";

export type ProfileMenuProps = {
  name: string;
  email: string;
  onManage?: () => void;
  onLogout?: () => void;
};

export function ProfileMenu({ name, email, onManage, onLogout }: ProfileMenuProps) {
  return (
    <div className="relative">
      <div className="absolute right-0 mt-3 z-50">
        <Card className="w-[320px] p-6 rounded-2xl">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <UserCircle2 size={48} />
              </div>
              <button className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-2 shadow" aria-label="Trocar foto">
                <Pencil size={16} />
              </button>
            </div>
            <div className="text-center">
              <Typography variant="h2" className="!text-2xl !font-semibold">Olá, {name.split(" ")[0]}</Typography>
              <Typography className="text-gray-500">{email}</Typography>
            </div>
            <Button
              variant="ghost"
              fullWidth={true}
              className="h-12 rounded-xl border border-blue-300 text-blue-600 hover:bg-blue-50"
              onClick={onManage}
            >
              Gerenciar minha conta
            </Button>
            <div className="w-full h-px bg-gray-200" />
            <Button
              variant="ghost"
              fullWidth={true}
              className="h-12 rounded-xl text-gray-700 hover:bg-gray-50 flex items-center justify-start gap-3"
              onClick={onLogout}
            >
              <LogOut size={18} />
              Sair
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProfileMenu;



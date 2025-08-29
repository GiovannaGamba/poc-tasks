import { EmailInput, PasswordInput, EnterpriseSelect, Button, Card } from "../components";
import Logo from "../Utils/Contraktor.png";

const enterprises = [
  { label: "Contraktor - Produto", value: "produto" },
  { label: "Contraktor - Engenharia", value: "engenharia" },
];

export function LoginContainer() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card>
        <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3">
          <img src={Logo} alt="Contraktor" className="h-30" />
          <h1 className="text-3xl font-semibold text-center">Bem vindo de volta!</h1>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Email</label>
          <EmailInput placeholder="rafael.ferreira@contraktor.com.br" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Empresa</label>
          <EnterpriseSelect enterprises={enterprises} placeholder="Contraktor - Produto" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium">Senha</label>
          <PasswordInput placeholder="Sua senha" />
          <div className="text-right text-sm text-gray-500">Esqueceu a senha?</div>
        </div>
          <Button variant="secondary">Login</Button>
        </div>
      </Card>
    </div>
  );
}

export default LoginContainer;



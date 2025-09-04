import { useNavigate } from "@tanstack/react-router";
import { Input, Select, ButtonTeste, Card, Typography } from "../../components";
import Logo from "../../Utils/Contraktor.png";

const enterprises = [
  { label: "Contraktor - Produto", value: "produto" },
  { label: "Contraktor - Engenharia", value: "engenharia" },
];

export function LoginContainer() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card>
        <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3">
          <img src={Logo} alt="Contraktor" className="h-30" />
          <Typography variant="heading-1" component="h1" className="text-center">Bem vindo de volta!</Typography>
        </div>

        <div className="flex flex-col gap-2">
          <Typography component="label" variant="body-2" className="text-neutral-700 font-medium">Email</Typography>
          <Input variant="email" placeholder="nome.sobrenome@contraktor.com.br" />
        </div>
        <div className="flex flex-col gap-2">
          <Typography component="label" variant="body-2" className="text-neutral-700 font-medium">Empresa</Typography>
          <Select variant="enterprise" options={enterprises} placeholder="Contraktor - Produto" />
        </div>
        <div className="flex flex-col gap-2">
          <Typography component="label" variant="body-2" className="text-neutral-700 font-medium">Senha</Typography>
          <Input variant="password" placeholder="Sua senha" />
          <Typography variant="caption-2" className="text-right text-neutral-500">Esqueceu a senha?</Typography>
        </div>
          <ButtonTeste
            type="primary"
            style="filled"
            state="enabled"
            onClick={() => {
              navigate({ to: "/app" });
            }}
          >
            Login
          </ButtonTeste>
        </div>
      </Card>
    </div>
  );
}

export default LoginContainer;



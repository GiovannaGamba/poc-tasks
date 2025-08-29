import React from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "./Input";
import type { InputProps } from "./Input";

export type PasswordInputProps = Omit<InputProps, "type" | "iconLeft" | "iconRight">;

export function PasswordInput(props: PasswordInputProps) {
  const [visible, setVisible] = React.useState(false);
  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      iconLeft={<Lock size={18} />}
      iconRight={
        <button
          type="button"
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          onClick={() => setVisible((v) => !v)}
          className="outline-none"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
    />
  );
}

export default PasswordInput;



import { Mail } from "lucide-react";
import { Input } from "./Input";
import type { InputProps } from "./Input";

export type EmailInputProps = Omit<InputProps, "type" | "iconLeft">;

export function EmailInput(props: EmailInputProps) {
  return <Input {...props} type="email" iconLeft={<Mail size={18} />} />;
}

export default EmailInput;



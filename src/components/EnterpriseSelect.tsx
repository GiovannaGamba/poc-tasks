import { Building2 } from "lucide-react";
import { Select } from "./Select";
import type { SelectProps, Option } from "./Select";

export type EnterpriseSelectProps = Omit<SelectProps, "iconLeft" | "options"> & {
  enterprises: Option[];
};

export function EnterpriseSelect({ enterprises, placeholder = "Selecione a empresa", ...rest }: EnterpriseSelectProps) {
  return (
    <Select
      {...rest}
      options={enterprises}
      placeholder={placeholder}
      iconLeft={<Building2 size={18} />}
    />
  );
}

export default EnterpriseSelect;



import { AuthTemplate } from "../AuthTemplate/AuthTemplate";
import { LoginContainer } from "../../containers";

export function UnauthenticatedTemplate() {
  return (
    <AuthTemplate>
      <LoginContainer />
    </AuthTemplate>
  );
}

export default UnauthenticatedTemplate;



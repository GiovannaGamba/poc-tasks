import { AuthenticatedTemplate } from "../templates/AuthenticatedTemplate/AuthenticatedTemplate";
import { Typography } from "../components/Typography/Typhography";

export function Authenticated() {
  return (
    <AuthenticatedTemplate>
      <Typography className="text-center text-xl text-neutral-600">Content</Typography>
    </AuthenticatedTemplate>
  );
}

export default Authenticated;



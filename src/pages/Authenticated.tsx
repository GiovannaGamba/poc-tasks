import { AuthenticatedTemplate } from "../templates";
import { Typography } from "../components";

export function Authenticated() {
  return (
    <AuthenticatedTemplate>
      <Typography className="text-center text-xl text-gray-600">Content</Typography>
    </AuthenticatedTemplate>
  );
}

export default Authenticated;



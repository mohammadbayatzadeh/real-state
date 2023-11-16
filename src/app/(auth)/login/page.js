import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//template
import LoginPage from "@/components/templates/auth/LoginPage";

async function Login() {
  const session = await getServerSession(authOptions);
  session && redirect("/");
  return <LoginPage />;
}

export default Login;

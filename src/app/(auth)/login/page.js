import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginPage from "@/components/templates/LoginPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Login() {
  const session = await getServerSession(authOptions);
  session && redirect("/");
  return <LoginPage />;
}

export default Login;

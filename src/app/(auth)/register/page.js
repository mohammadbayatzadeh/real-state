import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RegisterPage from "@/components/templates/RegisterPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Register() {
  const session = await getServerSession(authOptions);
  session && redirect("/");
  return <RegisterPage />;
}

export default Register;

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function layout({ children }) {
  const session = await getServerSession(authOptions);
  session && redirect("/");
  return <div>{children}</div>;
}

export default layout;

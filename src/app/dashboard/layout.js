import DashboardSideBar from "@/components/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <DashboardSideBar session={session}>{children}</DashboardSideBar>;
}

export default DashboardLayout;

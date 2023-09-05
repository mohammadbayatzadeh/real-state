import DashboardSideBar from "@/components/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import Boss from "@/models/Boss";

async function DashboardLayout({ children }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await Boss.findOne({ email: session.user.email });
  if (!session || !user) redirect("/login");

  return (
    <DashboardSideBar email={session.user.email} role={user.role}>
      {children}
    </DashboardSideBar>
  );
}

export default DashboardLayout;

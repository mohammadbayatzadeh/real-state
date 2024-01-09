import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

//functions
import connectDB from "@/utils/connectDB";

//templates
import DashboardSideBar from "@/components/layout/DashboardSideBar";

//models
import Boss from "@/models/Boss";

export const metadata = {
  title: "پنل ادمین سامانه ملک",
};
async function DashboardLayout({ children }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await Boss.findOne({ email: session?.user?.email });

  if (!session || !user) redirect("/login");
  return (
    <DashboardSideBar session={session} user={user}>
      {children}
    </DashboardSideBar>
  );
}

export default DashboardLayout;

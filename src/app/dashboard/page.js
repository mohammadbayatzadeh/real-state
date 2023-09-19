import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

//functions
import connectDB from "@/utils/connectDB";

//tmeplates
import DashboardPage from "@/components/templates/DashboardPage";

//models
import Boss from "@/models/Boss";
import { redirect } from "next/navigation";

async function Dahboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) redirect("/");
  const user = await Boss.findOne({ email: session.user.email });
  return <DashboardPage date={user.createdAt} />;
}

export default Dahboard;

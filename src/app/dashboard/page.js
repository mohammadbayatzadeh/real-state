import DashboardPage from "@/components/templates/DashboardPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Boss from "@/models/Boss";

async function Dahboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await Boss.findOne({ email: session.user.email });
  return <DashboardPage date={user.createdAt} />;
}

export default Dahboard;
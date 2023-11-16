import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//functions
import connectDB from "@/utils/connectDB";

//models
import Profile from "@/models/Profile";
import Boss from "@/models/Boss";

//templates
import AdminPage from "@/components/templates/dashboard/NotPublishedPage";

async function notPublished() {
  await connectDB();
  const session = await getServerSession(authOptions);

  const user = await Boss.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return <AdminPage profiles={JSON.parse(JSON.stringify(profiles))} />;
}

export default notPublished;

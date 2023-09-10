import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AllProfilesPage from "@/components/templates/AllProfilesPage";
import Boss from "@/models/Boss";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function allProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  const user = await Boss.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find();

  return (
    <div>
      <AllProfilesPage profiles={profiles} />
    </div>
  );
}

export default allProfiles;

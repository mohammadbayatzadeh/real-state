import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//templates
import AllProfilesPage from "@/components/templates/dashboard/AllProfilesPage";

//functions
import connectDB from "@/utils/connectDB";

//models
import Boss from "@/models/Boss";
import Profile from "@/models/Profile";

async function allProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);

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

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//functions
import connectDB from "@/utils/connectDB";

//models
import Boss from "@/models/Boss";

//templates
import MyProfilesPage from "@/components/templates/dashboard/My-ProfilesPage";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [boss] = await Boss.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return <MyProfilesPage profiles={boss.profiles} />;
}
export default MyProfiles;

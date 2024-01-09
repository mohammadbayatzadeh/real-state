//template
import ProfileDetailsPage from "@/components/templates/dashboard/ProfileDetailsPage";

//models
import Profile from "@/models/Profile";

//functions
import connectDB from "@/utils/connectDB";

async function page({ params: { profileID } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileID });
  return <ProfileDetailsPage profile={JSON.parse(JSON.stringify(profile))} />;
}

export default page;

export const generateMetadata = async ({ params: { profileID } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileID });
  return {
    title: profile.title,
    description: profile.description,
  };
};

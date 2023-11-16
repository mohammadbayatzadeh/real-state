import ProfileDetailsPage from "@/components/templates/dashboard/ProfileDetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function page({ params: { profileID } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileID });
  return <ProfileDetailsPage profile={profile} />;
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

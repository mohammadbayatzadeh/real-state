import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";
import Profile from "@/models/Profile";

async function page({ params: { profileID } }) {
  const profile = await Profile.find({ _id: profileID });
  return <ProfileDetailsPage {...profile} />;
}

export default page;

import AddProfilePage from "@/components/templates/dashboard/AddProfilePage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function EditProfile({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findById(profileId);
  if (!profile) return <h3>مشکلی پیش آمده است</h3>;
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

export default EditProfile;

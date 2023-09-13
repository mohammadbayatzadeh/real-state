import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";
import axios from "axios";

async function page({ params: { profileID } }) {
  const res = await axios.get(`http://localhost:3000/api/profile/${profileID}`);
  const { data } = res;
  return <ProfileDetailsPage profile={data.data} />;
}

export default page;

export const generateMetadata = async ({ params: { profileID } }) => {
  const res = await axios.get(`http://localhost:3000/api/profile/${profileID}`);
  const { data } = res;
  return {
    title: data.data.title,
    description: data.data.description,
  };
};

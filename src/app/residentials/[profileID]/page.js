import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";

async function page({ params: { profileID } }) {
  const data = await fetch(`http://localhost:3000/api/profile/${profileID}`, {
    cache: "force-cache",
  }).then((res) => res.json());
  return <ProfileDetailsPage profile={data.data} />;
}

export default page;

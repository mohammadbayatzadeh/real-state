//templates
import ResidentialsPage from "@/components/templates/ResidentialsPage";

//models
import Profile from "@/models/Profile";

//functions
import connectDB from "@/utils/connectDB";

async function Residentials({ searchParams: { category } }) {
  await connectDB();
  const data = await Profile.find({ published: true });
  const filteredData = data.filter((item) => item.category === category);

  if (!category || category === "all") return <ResidentialsPage data={data} />;
  return <ResidentialsPage data={filteredData} />;
}

export default Residentials;

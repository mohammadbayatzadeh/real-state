//templates
import ResidentialsPage from "@/components/templates/ResidentialsPage";

//models
import Profile from "@/models/Profile";

//functions
import connectDB from "@/utils/connectDB";

async function Residentials({ searchParams: { category, city } }) {
  await connectDB();
  const data = await Profile.find({ published: true });
  const FilteredData =
    category && category !== "all"
      ? data.filter((item) => item.category === category)
      : city
      ? data.filter((item) => item.city === city)
      : data;
      
  return <ResidentialsPage data={FilteredData} />;
}

export default Residentials;

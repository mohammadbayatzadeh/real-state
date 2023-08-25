import ResidentialsPage from "@/components/templates/ResidentialsPage";

async function Residentials({ searchParams: { category } }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  const filteredData = data.data.filter((item) => item.category === category);
  if (!category || category === "all") return <ResidentialsPage data={data} />;
  return <ResidentialsPage data={{ data: filteredData }} />;
}

export default Residentials;

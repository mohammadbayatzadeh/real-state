import ResidentialsPage from "@/components/templates/ResidentialsPage";

async function Residentials() {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  return <ResidentialsPage data={data} />;
}
export default Residentials;

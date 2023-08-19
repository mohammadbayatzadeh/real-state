import ResidentialsPage from "@/components/templates/Residentials";

async function Residentials() {
  const res = await fetch("http://localhost:3000/api/profile");
  const data = await res.json();
  return <ResidentialsPage data={data} />;
}

export default Residentials;

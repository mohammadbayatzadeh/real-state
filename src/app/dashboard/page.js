"use client";
import { useContext } from "react";

//contexts
import { UserContext } from "@/components/layout/DashboardSideBar";

//tmeplates
import DashboardPage from "@/components/templates/dashboard/DashboardPage";

async function Dahboard() {
  const data = useContext(UserContext);
  return <DashboardPage date={data.user.createdAt} />;
}

export default Dahboard;
